export type DesignNotificationType = 'success' | 'error' | 'warning' | 'info';

export interface DesignNotification {
  type: DesignNotificationType;
  message: string;
  timeOut?: number;
}
