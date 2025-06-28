import { JobApplication } from '../../pages/application/types'; // adjust path if needed

export interface ApplicationComponentProps {
  formData: {
    company: string;
    jobTitle: string;
    jobType: string;
    workLocation: string;
    status: string;
    date: string;
    notes?: string;
    interviewDateTime?: string;
  };
  handleChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => void;
  onadd: (newApp: JobApplication) => void;

  errorMsg: string;
  applications?: JobApplication[];
}
