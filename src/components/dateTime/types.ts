export interface DateTimeProps {
  date: Temporal.PlainDate | string;
  type?: 'full' | 'date-only' | 'time-only' | 'timestamp';
  omitSeconds?: boolean;
  omitTimezone?: boolean;
}
