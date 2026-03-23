import * as Location from 'expo-location';
import { useEffect, useRef, useState } from 'react';
import { Alert } from 'react-native';

// Gerencia toda a lógica de localização, incluindo permissões, obtenção da localização atual e rastreamento contínuo
export function useLocationManager() {
  const [location, setLocation] = useState<Location.LocationObjectCoords | null>(null);
  const [locationHistory, setLocationHistory] = useState<{ latitude: number; longitude: number; timestamp: number }[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<'loading' | 'granted' | 'denied'>(
    'loading'
  );
  // Gerencia o estado de rastreamento e carregamento da localização atual
  const [isTracking, setIsTracking] = useState(false);
  const [isLoadingCurrentLocation, setIsLoadingCurrentLocation] = useState(false);

  const subscriptionRef = useRef<Location.LocationSubscription | null>(null);

  useEffect(() => {
    requestLocationPermission();

    return () => {
      try {
        subscriptionRef.current?.remove();
      } catch (error) {
        console.warn('Erro interno do expo-location ignorado no cleanup:', error);
      }
    };
  }, []);

  const requestLocationPermission = async () => {
    try {
      setPermissionStatus('loading');
      setErrorMsg(null);

      const { status } = await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        setPermissionStatus('denied');
        setErrorMsg('Permissão de localização negada.');
        return;
      }

      setPermissionStatus('granted');
      await getCurrentLocation();
    } catch (error) {
      setPermissionStatus('denied');
      setErrorMsg('Não foi possível solicitar a permissão de localização.');
    }
  };

  const addToHistory = (coords: Location.LocationObjectCoords) => {
    setLocationHistory((prev) => [{
      latitude: coords.latitude,
      longitude: coords.longitude,
      timestamp: Date.now(),
    }, ...prev].slice(0, 5));
  };

  const getCurrentLocation = async () => {
    if (permissionStatus === 'denied') return;

    try {
      setIsLoadingCurrentLocation(true);
      setErrorMsg(null);

      const currentLocation = await Location.getCurrentPositionAsync({
        accuracy: Location.Accuracy.High,
      });

      setLocation(currentLocation.coords);
      addToHistory(currentLocation.coords);
    } catch (error) {
      setErrorMsg('Erro ao obter localização atual.');
    } finally {
      setIsLoadingCurrentLocation(false);
    }
  };

  const startTracking = async () => {
    if (isTracking) return;

    if (permissionStatus !== 'granted') {
      Alert.alert(
        'Permissão necessária',
        'É necessário permitir o acesso à localização para iniciar o rastreamento.'
      );
      return;
    }

    try {
      setErrorMsg(null);

      const sub = await Location.watchPositionAsync(
        {
          accuracy: Location.Accuracy.High,
          timeInterval: 5000,
          distanceInterval: 10,
        },
        (loc) => {
          // Garante que não atualize se o rastreamento foi parado,
          // útil caso o .remove() falhe devido a bugs da biblioteca
          if (!subscriptionRef.current) return;
          
          setLocation(loc.coords);
          addToHistory(loc.coords);
        }
      );

      subscriptionRef.current = sub;
      setIsTracking(true);
    } catch (error) {
      setErrorMsg('Erro ao iniciar rastreamento.');
    }
  };

  const stopTracking = () => {
    if (subscriptionRef.current) {
      try {
        subscriptionRef.current.remove();
      } catch (error) {
        console.warn('Erro interno do expo-location ignorado ao parar rastreamento:', error);
      }
      subscriptionRef.current = null;
    }
    setIsTracking(false);
  };

  return {
    location,
    locationHistory,
    errorMsg,
    permissionStatus,
    isTracking,
    isLoadingCurrentLocation,
    requestLocationPermission,
    getCurrentLocation,
    startTracking,
    stopTracking,
  };
}
