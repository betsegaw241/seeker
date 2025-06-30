import * as yup from 'yup';

export const applicationSchema = yup.object({
  company: yup.string().required('Company is required'),
  jobTitle: yup.string().required('Job title is required'),
  jobType: yup.string().required('Job type is required'),
  workLocation: yup.string().required('Work location is required'),
  status: yup.string().required('Status is required'),
  notes: yup.string().optional(),
  date: yup.string().required('Date is required'),
});

export type ApplicationFormData = yup.InferType<typeof applicationSchema>;
