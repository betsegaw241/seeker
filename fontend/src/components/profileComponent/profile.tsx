import React, { useState } from 'react';
import EditProfileForm from './EditProfileForm';
import CareerTimeline from './CareerTimeline';
import { Button } from '../Blocks/Button';

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
    <div className=" w-full mx-auto h-screen ">
      <div className="bg-white shadow-md rounded-lg p-6  min-h-[85%] ">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">{profile.name}</h1>
            <p className="text-black">{profile.profession}</p>
          </div>
          <Button variant="primary" onClick={() => setIsEditing(true)}>
            Edit Profile
          </Button>
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
