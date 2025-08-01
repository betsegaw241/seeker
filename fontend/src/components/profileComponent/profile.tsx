import React, { useState } from 'react';
import EditProfileForm from './EditProfileForm';
import CareerTimeline from './CareerTimeline';

interface CareerItem {
  year: string;
  role: string;
  company: string;
}

interface Profile {
  name: string;
  profession: string;
  careerPath: CareerItem[];
}

const ProfilePage: React.FC = () => {
  const [profile, setProfile] = useState<Profile>({
    name: 'Jane Doe',
    profession: 'Software Engineer',
    careerPath: [
      { year: '2020', role: 'Frontend Developer', company: 'TechCorp' },
      { year: '2022', role: 'Senior Developer', company: 'InnovateX' },
    ],
  });

  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleUpdate = (updatedProfile: Profile) => {
    setProfile(updatedProfile);
    setIsEditing(false);
  };

  return (
    <div className="p-6 w-full mx-auto">
      <div className="bg-white shadow-md rounded-lg p-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <p className="text-black">{profile.profession}</p>
          </div>
          <button
            onClick={() => setIsEditing(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Edit Profile
          </button>
        </div>

        {isEditing && (
          <EditProfileForm
            profile={profile}
            onSave={handleUpdate}
            onCancel={() => setIsEditing(false)}
          />
        )}

        <div className="mt-6">
          <h2 className="text-xl font-semibold mb-2">Career Path</h2>
          <CareerTimeline careerPath={profile.careerPath} />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
