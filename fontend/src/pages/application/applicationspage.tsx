import React, { useEffect, useState } from 'react';
import { useApplication } from './applications'; // <-- your custom hook
import Profile from '../../components/Profile';

const Applications: React.FC = () => {
  const { addApplication, getApplications, applications, errorMsg, loading } =
    useApplication();

  const [formData, setFormData] = useState({
    company: '',
    jobTitle: '',
    jobType: 'Full-time',
    workLocation: 'On-site',
    status: 'Applied',
    date: new Date().toLocaleDateString('en-US'),
    notes: '',
  });
  useEffect(() => {
    getApplications();
  }, []);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleaddApplication = async (job: JobApplication) => {
    const success = await addApplication(job);
    if (success) {
      getApplications();
    }
  };

  return (
    <Profile
      handleChange={handleChange}
      onadd={handleaddApplication}
      errorMsg={errorMsg}
      applications={applications}
      loading={loading}
    />
  );
};

export default Applications;
