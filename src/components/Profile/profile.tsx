// pages/Profile.jsx

import DashboardLayout from '../layouts/Layout';
import ComboBox from '../ComboBox';

const Profile = () => {
  const jobRoles = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'UI/UX Designer',
    'Project Manager',
  ];

  const handleJobSelect = (job: string) => {
    console.log('Selected job:', job);
    // You can set state or perform filtering here
  };

  return (
    <DashboardLayout>
      <div className="bg-white p-4 flex justify-around">
        <p className="text-2xl p-1">All Applications</p>
        <ComboBox
          options={jobRoles}
          placeholder="Choose a job role"
          onSelect={handleJobSelect}
        /><ComboBox
        options={jobRoles}
        placeholder="Choose a accepted"
        onSelect={handleJobSelect}
      />
        <div className="btn bg-blue-600 text-white border-none">
          Add application
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
