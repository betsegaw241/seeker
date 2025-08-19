import React, { useState } from 'react';
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

interface EditProfileFormProps {
  profile: Profile;
  onSave: (profile: Profile) => void;
  onCancel: () => void;
}

const EditProfileForm: React.FC<EditProfileFormProps> = ({ profile, onSave, onCancel }) => {
  const [name, setName] = useState<string>(profile.name);
  const [profession, setProfession] = useState<string>(profile.profession);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({ ...profile, name, profession });
  };

  return (
    <form onSubmit={handleSubmit} className="mt-4">
      <div className="mb-4">
        <label className="block font-medium">Name</label>
        <input
          className="w-[30%] bg-gray-50 outline-0 p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-4">
        <label className="block font-medium">Profession</label>
        <input
          className="w-[30%]  bg-gray-50 outline-0 p-2 rounded "
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
        />
      </div>

      <div className="flex space-x-2">
       <Button variant='primary'>Save</Button>
        <Button onClick={onCancel} variant="secondary" >
          Cancel
        </Button>
      </div>
    </form>
  );
};

export default EditProfileForm;
