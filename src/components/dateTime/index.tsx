import { useMemo } from 'react';
import type { DateTimeProps } from './types';

export const DateTime: React.FC<DateTimeProps> = ({ type = 'full', date }) => {
  const parsedDate = useMemo(
    () => (typeof date === 'string' ? Temporal.PlainDate.from(date) : date),
    [date]
  );

  const intl = useMemo(
    () =>
      Intl.DateTimeFormat(navigator.language, {
        year: 'numeric',
        month: 'long',
      }).format(parsedDate),
    [parsedDate, navigator.language]
  );

  return <time data-type={type}>{intl}</time>;
};
