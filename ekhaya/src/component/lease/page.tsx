import React, { useState } from "react";
import leaseStyles from "./style";
import { useFileActions , useFileState } from "@/provider/file";

const LeaseComponent: React.FC = () => {
  const [leaseFile, setLeaseFile] = useState<File | null>(null); // State to store uploaded lease file
  const [leaseBase64, setLeaseBase64] = useState<string | null>(null); // State to store base64 string of lease
  const [isUpdating, setIsUpdating] = useState<boolean>(false); // State to track if it's updating an existing lease
  const { styles } = leaseStyles(); // Destructure styles object from leaseStyles
  const {createFile} = useFileActions(); 
  const {file} = useFileState(); 


  // Function to handle lease file upload
  const handleLeaseUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    if (file) {
      setLeaseFile(file);
      // Convert uploaded file to base64 string
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target && typeof e.target.result === "string") {
          setLeaseBase64(e.target.result);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Function to handle uploading new lease
  const handleNewLeaseUpload = () => {
    // Logic to save new lease to database
    console.log("Saving new lease to database...");
    // Set state to indicate it's not updating
    setIsUpdating(false);
  };

  // Function to handle updating existing lease
  const handleUpdateLeaseUpload = () => {
    // Logic to update existing lease in database
    console.log("Updating existing lease in database...");
    // Set state to indicate it's updating
    setIsUpdating(true);
  };

  // Render upload button based on whether it's updating or not
  const renderUploadButton = () => {
    if (isUpdating) {
      return <button onClick={handleUpdateLeaseUpload} className={styles.uploadButton}>Update Lease</button>;
    } else {
      return <button onClick={handleNewLeaseUpload} className={styles.uploadButton}>Upload Lease</button>;
    }
  };

  return (
    <div className={styles.container}>
      <h2>Lease Agreement</h2>
      <div>
       
        <input type="file" accept=".pdf" onChange={handleLeaseUpload} />
      </div>
      <div>
       
        {renderUploadButton()}
      </div>
      <div>
       
        {leaseBase64 && (
          <div>
            <h3>Lease Agreement:</h3>
            <embed src={leaseBase64} width="600" height="400" />
          </div>
        )}
      </div>
    </div>
  );
};

export default LeaseComponent;
