import { Applicationtypes } from '../../pages/application/types'; // adjust path if needed

export interface ApplicationComponentProps {
  
  // handleChange: (
  //   e: React.ChangeEvent<
  //     HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
  //   >
  // ) => void;
  onadd: (newApp: Applicationtypes) => void;

  errorMsg: string;
  applications?: Applicationtypes[];
}
