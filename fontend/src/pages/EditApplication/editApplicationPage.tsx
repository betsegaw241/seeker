import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useEditApplication } from "./editApplication";
import EditApplicationComponenet from "../../components/Profile";
import { Applicationtypes } from "./types";

const EditApplications: React.FC = () => {
  const { id } = useParams(); 

  const {
    selectedApplication,
    getApplicationById,
    editApplication,
    errorMsg,
  } = useEditApplication();

  useEffect(() => {
    if (id) {
      getApplicationById(id);
    }
  }, [id]);

  const handleEditApplication = async (updates: Partial<Applicationtypes>) => {
    if (!id) return;

    const success = await editApplication(id, updates);

    if (success) {
      console.log("Application updated!");
      // Optional: redirect or refetch
      // navigate("/applications")
    }
  };

  return (
    <EditApplicationComponenet
      onadd={handleEditApplication}
      errorMsg={errorMsg}
      applications={selectedApplication}
    />
  );
};

export default EditApplications;
