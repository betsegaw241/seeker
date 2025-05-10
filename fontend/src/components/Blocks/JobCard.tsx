import { PencilLine } from 'lucide-react';
import React from 'react';

interface JobCardProps {
  company?: string;
  jobTitle?: string;
  jobType?: string;
  location?: string;
  notes?: string;
  status?: string;
  date?: string; // e.g., "Apr 30, 2025"
  onEdit?: () => void;
}

const JobCard: React.FC<JobCardProps> = ({
  company = 'Company Name',
  jobTitle = 'Job Title',
  jobType = 'Full Time',
  location = 'Onsite',
  notes = 'Some notes about the job go here.',
  status = 'In Progress',
  date = 'Apr 30, 2025',
  onEdit = () => {},
}) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-5 w-[95%] max-w-4xl mx-auto flex justify-center items-center gap-12">
      {/* Company Info */}
      <div className="text-left">
        <p className="text-2xl font-semibold text-gray-800">{company}</p>
        <p className="text-md text-gray-700">{jobTitle}</p>
        <div className="flex gap-4 mt-1">
          <span className="text-sm text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
            {jobType}
          </span>
          <span className="text-sm text-gray-500 bg-gray-200 px-2 py-0.5 rounded-full">
            {location}
          </span>
        </div>
        <p className="text-sm text-gray-600 mt-2">{notes}</p>
        <p className="text-xs text-gray-400 mt-1">📅 {date}</p>
      </div>

      {/* Progress */}
      <div className="text-center">
        <p className="text-base text-gray-700 font-medium">📈 {status}</p>
      </div>

      {/* Edit Button */}
      <div>
        <div
          onClick={onEdit}
          className="flex items-center gap-2 bg-gray-100 hover:bg-gray-200 transition text-gray-700 px-4 py-2 rounded-lg shadow-sm font-medium cursor-pointer"
        >
          <PencilLine size={18} />
          Edit
        </div>
      </div>
    </div>
  );
};

export default JobCard;
