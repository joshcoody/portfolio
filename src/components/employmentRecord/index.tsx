import { DateTime } from '@/components/dateTime';
import type { EmploymentRecordProps } from './types';
import { useCallback, useEffect, useState } from 'react';

export const EmploymentRecord: React.FC<EmploymentRecordProps> = ({
  companyName,
  employmentRange,
  jobTitle,
  children,
}) => {
  const [detailsOpen, setDetailsOpen] = useState(true);

  const forceOpen = useCallback(() => setDetailsOpen(true), []);

  useEffect(() => {
    window.addEventListener('beforeprint', forceOpen);

    return () => {
      window.removeEventListener('beforeprint', forceOpen);
    };
  }, []);

  return (
    <details
      open={detailsOpen}
      onToggle={(event) => setDetailsOpen(event.newState === 'open')}
      className="my-1 break-inside-avoid print:px-0 py-1 print:border-0 bg-white border-gray-200 rounded-sm overflow-clip"
    >
      <summary className="font-bold sticky top-0 bg-white">
        {jobTitle} at {companyName}
      </summary>
      <main className="px-3 print:px-0">
        <div className="date-range font-light text-sm">
          Employed from <DateTime date={employmentRange.start} /> to{' '}
          {employmentRange.end ? (
            <DateTime date={employmentRange.end} />
          ) : (
            'present'
          )}
        </div>
        {children && (
          <div className="content mt-3 flex flex-col gap-1">{children}</div>
        )}
      </main>
    </details>
  );
};
