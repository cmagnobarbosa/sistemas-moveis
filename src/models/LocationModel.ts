export interface Coordinate {
  latitude: number;
  longitude: number;
  accuracy?: number | null;
  altitude?: number | null;
  heading?: number | null;
  speed?: number | null;
}

export interface LocationHistoryItem extends Coordinate {
  timestamp: number;
}

export type PermissionStatus = 'loading' | 'granted' | 'denied';
