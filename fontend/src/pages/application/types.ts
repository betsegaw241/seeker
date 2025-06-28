// hooks/applications.ts

export interface JobApplication {
    _id?: string; // optional if created by MongoDB
    company: string;
    jobTitle: string;
    jobType?: string;
    workLocation?: string;
    notes?: string;
    status?: string;
    date?: string;
    interviewDateTime?: string;
  }
  