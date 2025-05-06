import React, { useState } from 'react';
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

  const [applications, setApplications] = useState([
    {
      company: 'Google',
      jobTitle: 'Backend Developer',
      jobType: 'Full Time',
      location: 'Onsite',
      notes: "You'll be building scalable backend systems.",
      status: 'Applied',
      date: 'May 3, 2025',
    },
    {
      company: 'Amazon',
      jobTitle: 'Frontend Engineer',
      jobType: 'Full Time',
      location: 'Remote',
      notes: 'Working with React and TypeScript to build UIs.',
      status: 'Interview',
      date: 'May 1, 2025',
    },
    {
      company: 'Meta',
      jobTitle: 'Full Stack Engineer',
      jobType: 'Full Time',
      location: 'Hybrid',
      notes: 'Build features across the stack using modern tools.',
      status: 'Offer',
      date: 'April 29, 2025',
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newJob, setNewJob] = useState({
    company: '',
    jobTitle: '',
    jobType: '',
    location: '',
    notes: '',
    status: '',
    date: '',
  });

  const handleJobSelect = (job: string) => {
    console.log('Selected job:', job);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setNewJob((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAddApplication = () => {
    setApplications((prevApplications) => [...prevApplications, newJob]);
    setShowForm(false); // Close the form after adding the job
  };

  return (
    <DashboardLayout>
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
            options={jobRoles}
            placeholder="Status"
            onSelect={handleJobSelect}
          />
          <button
            onClick={() => setShowForm(true)} // Open form when button is clicked
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-md transition"
          >
            + Add Application
          </button>
        </div>
      </div>
      {showForm && (
        /* Add Application Form */
        <div
          onClick={() => setShowForm(false)}
          className=" text-black bg-black/40  fixed inset-0 backdrop-blur-sm shadow-2xl bg-opacity-30 flex justify-center items-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white p-6 rounded-xl w-96"
          >
            <h2 className="text-2xl font-semibold mb-4">Add Application</h2>
            <div className="flex flex-col gap-4">
              <input
                type="text"
                name="company"
                placeholder="Company"
                className="p-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={newJob.company}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="jobTitle"
                placeholder="Job Title"
                className="p-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={newJob.jobTitle}
                onChange={handleInputChange}
              />

              <ComboBox
                options={['Full Time', 'Part Time', 'Contract']}
                placeholder="Job Type"
                onSelect={(value) => setNewJob({ ...newJob, jobType: value })}
              />
              <ComboBox
                options={['Remote', 'Onsite', 'Hybrid']}
                placeholder="Location"
                onSelect={(value) => setNewJob({ ...newJob, location: value })}
              />
              <ComboBox
                options={['Applied', 'Interview', 'Offer', 'Rejected']}
                placeholder="Status"
                onSelect={(value) => setNewJob({ ...newJob, status: value })}
              />

              <input
                type="text"
                name="notes"
                placeholder="Notes"
                className="p-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={newJob.notes}
                onChange={handleInputChange}
              />
              <input
                type="date"
                name="date"
                className="p-2 rounded-md bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                value={newJob.date}
                onChange={handleInputChange}
              />

              {/* Buttons */}
              <div className="flex gap-4 justify-end mt-4">
                <div
                  onClick={() => setShowForm(false)}
                  className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition"
                >
                  Cancel
                </div>
                <div
                  onClick={handleAddApplication}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
                >
                  Add Application
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      /* Job Cards List */
      <div className="bg-slate-50 mt-4 h-screen overflow-y-auto p-4 rounded-lg flex flex-col gap-4">
        {applications.map((job, index) => (
          <JobCard
            key={index}
            company={job.company}
            jobTitle={job.jobTitle}
            jobType={job.jobType}
            location={job.location}
            notes={job.notes}
            status={job.status}
            date={job.date}
            onEdit={() => console.log('Edit clicked')}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Profile;
