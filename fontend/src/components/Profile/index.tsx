import  { useState } from 'react';
import ComboBox from '../Blocks/ComboBox';
import JobCard from '../Blocks/JobCard';
import AddApplicationModal from './applicationModal';
import { Applicationtypes } from '../../pages/application/types';
import { ApplicationComponentProps } from './types';

const Application = ({ onadd, applications }: ApplicationComponentProps) => {
  const [showForm, setShowForm] = useState(false);

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
    <>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-100 p-6 rounded-xl shadow-md flex flex-wrap justify-between items-center gap-4">
        <p className="text-3xl font-semibold text-gray-800">
          🎯 All Applications
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <ComboBox
            options={jobRoles}
            placeholder="Choose a job role"
            onSelect={handleJobSelect}
          />
          <ComboBox
            options={['Applied', 'Interview', 'Offer', 'Rejected']}
            placeholder="Status"
            onSelect={handleJobSelect}
          />
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            + Add Application
          </button>
        </div>
      </div>

      {/* Add Form Modal */}
      {showForm && (
        <AddApplicationModal onClose={() => setShowForm(false)} onAdd={onadd} />
      )}

      {/* Job Cards */}
      <div className="bg-slate-50 mt-4 h-screen  p-4 rounded-lg flex flex-col gap-4">
        {applications && applications.length > 0 ? (
          applications.map((job: Applicationtypes, index) => (
            <JobCard
              key={index}
              company={job.company}
              jobTitle={job.jobTitle}
              jobType={job.jobType}
              workLocation={job.workLocation}
              status={job.status}
              date={job.date}
              interviewDateTime={job.interviewDateTime}
              onEdit={() => console.log('Edit clicked')}
            />
          ))
        ) : (
          <p>No applications found.</p>
        )}
      </div>
    </>
  );
};

export default Application;
