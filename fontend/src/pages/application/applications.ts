import { useState } from 'react';
import api from '../../config/api'; // Axios instance
// import { JobApplication } from '../../types'; // optional, if you defined a type

export const useApplication = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(false);

  const addApplication = async (applicationData: {
    company: string;
    jobTitle: string;
    jobType?: string;
    workLocation?: string;
    notes?: string;
    status?: string;
    date?: string;
    interviewDateTime?: string;
  }): Promise<boolean> => {
    try {
      await api.post('/applications', applicationData);
      setErrorMsg('');
      return true;
    } catch (error) {
      console.error('Add Application Error:', error);
      setErrorMsg('Failed to add application. Please try again.');
      return false;
    }
  };
  const getApplications = async (): Promise<void> => {
    setLoading(true);
    setErrorMsg('');
    try {
      const response = await api.get('/applications');
      setApplications(response.data);
    } catch (error) {
      console.error('Get Applications Error:', error);
      setErrorMsg('Failed to fetch applications.');
    } finally {
      setLoading(false);
    }
  };

  return {
    addApplication,
    getApplications,
    applications,
    errorMsg,
    loading,
  };
};
