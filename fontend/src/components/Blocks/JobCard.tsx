import { PencilLine } from 'lucide-react';
import React from 'react';

interface JobCardProps {
  company?: string;
  jobTitle?: string;
  jobType?: string;
  workLocation?: string;
  notes?: string;
  status?: string;
  date?: string; // e.g., "Apr 30, 2025"
  interviewDateTime?: string; // New field
  onEdit?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  company = 'Company Name',
  jobTitle = 'Job Title',
  jobType = 'Full-time',
  workLocation = 'On-site',
  notes = 'Some notes about the job go here.',
  status = 'In Progress',
  date = 'Apr 30, 2025',
  interviewDateTime,
  onEdit = () => {},
}) => {
  return (
    <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-4xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-gray-100 hover:shadow-xl transition">
      {/* Left: Job Info */}
      <div className="flex-1">
        <h2 className="text-xl font-semibold text-gray-800">{company}</h2>
        <p className="text-gray-600 mt-0.5">{jobTitle}</p>

        <div className="flex flex-wrap gap-2 mt-2">
          <span className="text-xs bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-medium">
            {jobType}
          </span>
          <span className="text-xs bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium">
            {workLocation}
          </span>
        </div>

        <p className="text-sm text-gray-500 mt-3">{notes}</p>
        <p className="text-xs text-gray-400 mt-2">📅 Applied: {date}</p>

        {status === 'Interview' && interviewDateTime && (
          <p className="text-sm text-purple-600 mt-2 font-medium">
            🗓️ Interview Scheduled: {interviewDateTime}
          </p>
        )}
      </div>
      <div className="flex flex-col items-end gap-4">
        <span
          className={`text-sm font-semibold px-3 py-1 rounded-full ${
            status === 'Applied'
              ? 'bg-yellow-100 text-yellow-700'
              : status === 'Interview'
                ? 'bg-purple-100 text-purple-700'
                : status === 'Rejected'
                  ? 'bg-red-100 text-red-600'
                  : 'bg-gray-100 text-gray-700'
          }`}
        >
          📈 {status}
        </span>
      </div>
      <div
        onClick={onEdit}
        className="flex items-center bg-red gap-2 text-sm text-blue-600 hover:text-blue-800 transition font-medium hover:cursor-pointer hover:bg-gray-100 p-2.5  rounded"
      >
        <PencilLine size={18} />
        Edit
      </div>
    </div>
  );
};

export default JobCard;
