import { useState, useEffect, useRef } from 'react';
import { Alert } from 'react-native';
import { LocationService } from '../services/LocationService';
import { Coordinate, LocationHistoryItem, PermissionStatus } from '../models/LocationModel';
import * as Location from 'expo-location'; // Necessário para o tipo da Subscription

// ViewModel: Orquestra lógica com os Services enquanto reage a mudanças pro React
export function useLocationViewModel() {
  const [location, setLocation] = useState<Coordinate | null>(null);
  const [locationHistory, setLocationHistory] = useState<LocationHistoryItem[]>([]);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [permissionStatus, setPermissionStatus] = useState<PermissionStatus>('loading');
  
  const [isTracking, setIsTracking] = useState(false);
  const [isLoadingCurrentLocation, setIsLoadingCurrentLocation] = useState(false);

  const subscriptionRef = useRef<Location.LocationSubscription | null>(null);

  // Ciclo de vida da tela/componente gerenciado pela View Model, limpando side-effects
  useEffect(() => {
    requestLocationPermission();
    return () => {
      stopTracking();
    };
  }, []);

  const requestLocationPermission = async () => {
    try {
      setPermissionStatus('loading');
      setErrorMsg(null);
      
      const isGranted = await LocationService.requestPermissions();
      
      if (!isGranted) {
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

  const addToHistory = (coords: Coordinate) => {
    setLocationHistory((prev) => [
      {
        ...coords,
        timestamp: Date.now(),
      },
      ...prev,
    ].slice(0, 5));
  };

  const getCurrentLocation = async () => {
    if (permissionStatus === 'denied') return;
    
    try {
      setIsLoadingCurrentLocation(true);
      setErrorMsg(null);
      
      const coords = await LocationService.getCurrentLocation();
      
      setLocation(coords);
      addToHistory(coords);
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
      
      const sub = await LocationService.startTracking((coords) => {
        // Ignora atualizações se já parou
        if (!subscriptionRef.current) return;
        
        setLocation(coords);
        addToHistory(coords);
      });
      
      subscriptionRef.current = sub;
      setIsTracking(true);
    } catch (error) {
      setErrorMsg('Erro ao iniciar rastreamento.');
    }
  };

  const stopTracking = () => {
    LocationService.stopTracking(subscriptionRef.current);
    subscriptionRef.current = null;
    setIsTracking(false);
  };

  return {
    // Estados exportados pra View
    location,
    locationHistory,
    errorMsg,
    permissionStatus,
    isTracking,
    isLoadingCurrentLocation,
    
    // Funções (Intents/Actions) acionáveis pela View
    requestLocationPermission,
    getCurrentLocation,
    startTracking,
    stopTracking,
  };
}
