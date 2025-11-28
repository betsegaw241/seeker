import { useState } from 'react';
import api from '../../config/api';
import { Applicationtypes } from './types';

export const useEditApplication = () => {
  const [errorMsg, setErrorMsg] = useState('');
  const [loading, setLoading] = useState(false);
  const [selectedApplication, setSelectedApplication] = useState<Applicationtypes | null>(null);


   const getApplicationById = async (id: string): Promise<void> => {
    setLoading(true);
    setErrorMsg('');
    try {
      const response = await api.get(`/applications/${id}`);
      setSelectedApplication(response.data);
    } catch (error) {
      console.error('Get Application By ID Error:', error);
      setErrorMsg('Failed to fetch application.');
    } finally {
      setLoading(false);
    }
  };
  
  const editApplication = async (id: string, updates: Partial<Applicationtypes>): Promise<boolean> => {
    try {
      await api.put(`/applications/${id}`, updates);
      setErrorMsg('');
      return true;
    } catch (error) {
      console.error('Edit Application Error:', error);
      setErrorMsg('Failed to edit application.');
      return false;
    }
  };

  
  return {
    getApplicationById, 
    editApplication, 
    selectedApplication,
    errorMsg,
    loading,
  };
};
