// Este código é um aplicativo React Native usando 
// Expo que gerencia a localização do dispositivo. 
// Ele solicita permissões de localização, obtém a 
// localização atual, 
// rastreia a localização continuamente e 
// mantém um histórico das últimas localizações. 
// O aplicativo também fornece feedback visual sobre o status da 
// permissão e do rastreamento, além de exibir mensagens de erro quando necessário.

import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocationViewModel } from '../src/viewmodels/useLocationViewModel';

export default function App() {
  const loc = useLocationViewModel();

  const formatCoordinate = (value: number) => value.toFixed(5);

  const formatTime = (timestamp: number) =>
    new Date(timestamp).toLocaleTimeString('pt-BR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

  const permissionLabel =
    loc.permissionStatus === 'loading'
      ? 'Verificando permissões...'
      : loc.permissionStatus === 'granted'
        ? 'Permitida'
        : 'Negada';

  return (
    <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.appTitle}>Localiza Mobile</Text>
        <Text style={styles.subtitle}>
          Monitoramento de localização com foco em usabilidade e feedback visual
        </Text>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Status do aplicativo</Text>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Permissão</Text>
            <Text
              style={[
                styles.badge,
                loc.permissionStatus === 'granted'
                  ? styles.badgeSuccess
                  : loc.permissionStatus === 'denied'
                    ? styles.badgeDanger
                    : styles.badgeNeutral,
              ]}
            >
              {permissionLabel}
            </Text>
          </View>

          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Rastreamento</Text>
            <Text
              style={[
                styles.badge,
                loc.isTracking ? styles.badgeSuccess : styles.badgeNeutral,
              ]}
            >
              {loc.isTracking ? 'Ativo' : 'Inativo'}
            </Text>
          </View>

          {loc.errorMsg && <Text style={styles.errorText}>{loc.errorMsg}</Text>}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Localização atual</Text>

          {loc.isLoadingCurrentLocation ? (
            <View style={styles.loadingBox}>
              <ActivityIndicator size="small" />
              <Text style={styles.loadingText}>Obtendo localização...</Text>
            </View>
          ) : loc.location ? (
            <View style={styles.locationBox}>
              <View style={styles.locationItem}>
                <Text style={styles.locationLabel}>Latitude</Text>
                <Text style={styles.locationValue}>
                  {formatCoordinate(loc.location.latitude)}
                </Text>
              </View>

              <View style={styles.locationItem}>
                <Text style={styles.locationLabel}>Longitude</Text>
                <Text style={styles.locationValue}>
                  {formatCoordinate(loc.location.longitude)}
                </Text>
              </View>

              <View style={styles.locationItem}>
                <Text style={styles.locationLabel}>Precisão</Text>
                <Text style={styles.locationValue}>
                  {loc.location.accuracy ? `${Math.round(loc.location.accuracy)} m` : 'N/D'}
                </Text>
              </View>
            </View>
          ) : (
            <Text style={styles.placeholderText}>
              Nenhuma localização disponível no momento.
            </Text>
          )}
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Ações</Text>

          <View style={styles.actionsContainer}>
            <TouchableOpacity
              style={[styles.button, styles.primaryButton]}
              onPress={loc.getCurrentLocation}
              disabled={loc.permissionStatus !== 'granted' || loc.isLoadingCurrentLocation}
            >
              <Text style={styles.buttonText}>Atualizar localização</Text>
            </TouchableOpacity>

            {!loc.isTracking ? (
              <TouchableOpacity
                style={[styles.button, styles.successButton]}
                onPress={loc.startTracking}
                disabled={loc.permissionStatus !== 'granted'}
              >
                <Text style={styles.buttonText}>Iniciar rastreamento</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={[styles.button, styles.dangerButton]}
                onPress={loc.stopTracking}
              >
                <Text style={styles.buttonText}>Parar rastreamento</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity
              style={[styles.button, styles.secondaryButton]}
              onPress={loc.requestLocationPermission}
            >
              <Text style={styles.secondaryButtonText}>Revisar permissão</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.card}>
          <Text style={styles.cardTitle}>Últimas localizações</Text>

          {loc.locationHistory.length === 0 ? (
            <Text style={styles.placeholderText}>
              O histórico aparecerá aqui após as atualizações.
            </Text>
          ) : (
            loc.locationHistory.map((item, index) => (
              <View key={`${item.timestamp}-${index}`} style={styles.historyItem}>
                <Text style={styles.historyTitle}>Registro {index + 1}</Text>
                <Text style={styles.historyText}>
                  Lat: {formatCoordinate(item.latitude)} | Long:{' '}
                  {formatCoordinate(item.longitude)}
                </Text>
                <Text style={styles.historyTime}>{formatTime(item.timestamp)}</Text>
              </View>
            ))
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#F4F7FB',
  },
  container: {
    padding: 20,
    paddingBottom: 32,
  },
  appTitle: {
    fontSize: 28,
    fontWeight: '700',
    color: '#1E293B',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: '#64748B',
    marginBottom: 20,
    lineHeight: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.06,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
    elevation: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 14,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoLabel: {
    fontSize: 15,
    color: '#334155',
    fontWeight: '500',
  },
  badge: {
    fontSize: 13,
    fontWeight: '700',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    overflow: 'hidden',
  },
  badgeSuccess: {
    backgroundColor: '#DCFCE7',
    color: '#166534',
  },
  badgeDanger: {
    backgroundColor: '#FEE2E2',
    color: '#991B1B',
  },
  badgeNeutral: {
    backgroundColor: '#E2E8F0',
    color: '#334155',
  },
  errorText: {
    marginTop: 8,
    color: '#B91C1C',
    fontSize: 14,
    lineHeight: 20,
  },
  loadingBox: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    gap: 8,
  },
  loadingText: {
    fontSize: 14,
    color: '#475569',
  },
  locationBox: {
    gap: 12,
  },
  locationItem: {
    backgroundColor: '#F8FAFC',
    borderRadius: 12,
    padding: 12,
  },
  locationLabel: {
    fontSize: 13,
    color: '#64748B',
    marginBottom: 4,
  },
  locationValue: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
  },
  placeholderText: {
    fontSize: 14,
    color: '#64748B',
    lineHeight: 20,
  },
  actionsContainer: {
    gap: 12,
  },
  button: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
  },
  primaryButton: {
    backgroundColor: '#2563EB',
  },
  successButton: {
    backgroundColor: '#16A34A',
  },
  dangerButton: {
    backgroundColor: '#DC2626',
  },
  secondaryButton: {
    backgroundColor: '#E2E8F0',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 15,
  },
  secondaryButtonText: {
    color: '#1E293B',
    fontWeight: '700',
    fontSize: 15,
  },
  historyItem: {
    borderLeftWidth: 4,
    borderLeftColor: '#2563EB',
    paddingLeft: 12,
    marginBottom: 14,
  },
  historyTitle: {
    fontSize: 15,
    fontWeight: '700',
    color: '#0F172A',
    marginBottom: 4,
  },
  historyText: {
    fontSize: 14,
    color: '#334155',
    marginBottom: 2,
  },
  historyTime: {
    fontSize: 12,
    color: '#64748B',
  },
});
