import DashboardLayout from '../layouts/Layout';
import ComboBox from '../ComboBox';
import JobCard from '../JobCard';

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
  };

  return (
    <DashboardLayout>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 rounded-xl shadow-md flex flex-wrap justify-between items-center gap-4">
        <p className="text-3xl font-semibold text-gray-800">🎯 All Applications</p>

        <div className="flex flex-wrap items-center gap-4">
          <ComboBox
            options={jobRoles}
            placeholder="Choose a job role"
            onSelect={handleJobSelect}
          />
          <ComboBox
            options={jobRoles}
            placeholder="Status"
            onSelect={handleJobSelect}
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition">
            + Add Application
          </button>
        </div>
      </div>

      {/* Job Cards */}
      <div className="bg-slate-50 mt-4 h-screen overflow-y-auto p-4 rounded-lg flex flex-col gap-4">
        <JobCard
          company="Google"
          jobTitle="Backend Developer"
          jobType="Full Time"
          location="Onsite"
          notes="You'll be building scalable backend systems."
          status="Applied"
          date="May 3, 2025"
          onEdit={() => console.log('Edit clicked')}
        />
        <JobCard
          company="Amazon"
          jobTitle="Frontend Engineer"
          jobType="Full Time"
          location="Remote"
          notes="Working with React and TypeScript to build UIs."
          status="Interview"
          date="May 1, 2025"
          onEdit={() => console.log('Edit clicked')}
        />
        <JobCard
          company="Meta"
          jobTitle="Full Stack Engineer"
          jobType="Full Time"
          location="Hybrid"
          notes="Build features across the stack using modern tools."
          status="Offer"
          date="April 29, 2025"
          onEdit={() => console.log('Edit clicked')}
        />
      </div>
    </DashboardLayout>
  );
};

export default Profile;
