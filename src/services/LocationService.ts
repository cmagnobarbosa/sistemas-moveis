import * as Location from 'expo-location';
import { Coordinate } from '../models/LocationModel';

// Classe responsável apenas por se comunicar com a API do dispositivo/Expo
export class LocationService {
  // Solicita permissão e retorna booleano de sucesso
  static async requestPermissions(): Promise<boolean> {
    const { status } = await Location.requestForegroundPermissionsAsync();
    return status === 'granted';
  }

  // Pega a coordenada atual instantânea
  static async getCurrentLocation(): Promise<Coordinate> {
    const currentLocation = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });
    return {
      latitude: currentLocation.coords.latitude,
      longitude: currentLocation.coords.longitude,
      accuracy: currentLocation.coords.accuracy,
      altitude: currentLocation.coords.altitude,
      heading: currentLocation.coords.heading,
      speed: currentLocation.coords.speed,
    };
  }

  // Inicia rastreamento contínuo, chama a callback quando a posição muda
  static async startTracking(
    onLocationUpdate: (coords: Coordinate) => void
  ): Promise<Location.LocationSubscription> {
    const subscription = await Location.watchPositionAsync(
      {
        accuracy: Location.Accuracy.High,
        timeInterval: 5000,
        distanceInterval: 10,
      },
      (loc) => {
        onLocationUpdate({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          accuracy: loc.coords.accuracy,
          altitude: loc.coords.altitude,
          heading: loc.coords.heading,
          speed: loc.coords.speed,
        });
      }
    );
    return subscription;
  }

  // Limpa a inscrição do rastreamento
  static stopTracking(subscription: Location.LocationSubscription | null) {
    if (subscription) {
      try {
        subscription.remove();
      } catch (error) {
        console.warn('Erro interno do expo-location ignorado ao parar rastreamento:', error);
      }
    }
  }
}
