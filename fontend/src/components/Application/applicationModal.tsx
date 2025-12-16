import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  applicationSchema,
  ApplicationFormData,
} from './applicationValidationSchema';
import ComboBox from '../Blocks/ComboBox';

type Props = {
  onClose: () => void;
  onAdd: (data: ApplicationFormData) => void;
};

const AddApplicationModal = ({ onClose, onAdd }: Props) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ApplicationFormData>({
    resolver: yupResolver(applicationSchema),
  });

  const onSubmit = (data: ApplicationFormData) => {
    onAdd(data);
    onClose();
  };

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="bg-white p-6 rounded-xl w-96"
      >
        <h2 className="text-2xl font-semibold mb-4">Add Application</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <input
            {...register('company')}
            placeholder="Company"
            className="input"
          />
          <p className="error">{errors.company?.message}</p>

          <input
            {...register('jobTitle')}
            placeholder="Job Title"
            className="input"
          />
          <p className="error">{errors.jobTitle?.message}</p>

          <ComboBox
            options={['Full Time', 'Part Time', 'Contract']}
            placeholder="Job Type"
            onSelect={(value) =>
              setValue('jobType', value, { shouldValidate: true })
            }
          />
          <p className="error">{errors.jobType?.message}</p>

          <ComboBox
            options={['Remote', 'Onsite', 'Hybrid']}
            placeholder="Work Location"
            onSelect={(value) =>
              setValue('workLocation', value, { shouldValidate: true })
            }
          />
          <p className="error">{errors.workLocation?.message}</p>

          <ComboBox
            options={['Applied', 'Interview', 'Offer', 'Rejected']}
            placeholder="Status"
            onSelect={(value) =>
              setValue('status', value, { shouldValidate: true })
            }
          />
          <p className="error">{errors.status?.message}</p>

          <input type="date" {...register('date')} className="input" />
          <p className="error">{errors.date?.message}</p>

          <div className="flex gap-4 justify-end mt-4">
            <button type="button" onClick={onClose} className="btn-secondary">
              Cancel
            </button>
            <button type="submit" className="btn-primary">
              Add Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddApplicationModal;
