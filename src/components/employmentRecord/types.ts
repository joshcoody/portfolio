interface EmploymentRange {
  start: Temporal.PlainDate;
  end?: Temporal.PlainDate;
}

export interface EmploymentRecordProps {
  companyName: string;
  jobTitle: string;
  employmentRange: EmploymentRange;
  children?: React.ReactNode;
}
