
export interface JobApplication {
  _id?: string;
  company: string;
  jobTitle: string;
  jobType: string;
  workLocation: string;
  notes?: string;
  status: string;
  date: string;
  interviewDateTime?: string;
}
