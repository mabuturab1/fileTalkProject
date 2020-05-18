import React, { useState, useContext } from "react";
import styles from "./AccountSummary.module.scss";
import ProgressBar from "../progressBar/ProgressBar";
import Button from "../input/button/Button";
import { Link } from "react-router-dom";
import { routes } from "../../interfaces/routes";
import FileInput from "../fileInput/FileInput";
// import Modal from "../modal/Modal";
import { Modal } from "semantic-ui-react";
import ReactAvatarEditor from "react-avatar-editor";
import EditProfile from "../editProfile/EditProfile";
import UserDataContext from "../../context/userDataContext";
interface AccountSummaryProps {
  src: string | File;
  userName?: string;
  userAddress?: string;
  date?: string;
  storageUsage?: number;
  storageUsageLabel?: string;
  roomUsage?: number;

  roomUsageLabel?: string;
  onClose?: () => any;
}
const AccountSummary = (props: AccountSummaryProps) => {
  const [showEditPhoto, setEditPhoto] = useState(false);
  const [selectedImage, setSelectedFileImage] = useState<File | string>(
    props.src
  );

  const userDataContext = useContext(UserDataContext);
  console.log(props.src);
  const handleChange = (event: string) => {
    if (event === "edit profile") {
      setEditPhoto(true);
      console.log("set edit photo");
    }
  };
  const onFileSelect = (file: any) => {
    console.log(file);

    userDataContext.setImageSrc(file.path);
  };
  return (
    <div className={styles.accountSummaryWrapper}>
      {showEditPhoto ? (
        <Modal
          open={true}
          basic
          size="small"
          style={{ backgroundColor: "white" }}
          centered={true}
        >
          <Modal.Content>
            <EditProfile onCancel={() => setEditPhoto(false)} />
          </Modal.Content>
        </Modal>
      ) : null}
      <div className={styles.userWrapper}>
        <h6 className={styles.titleText}>Profile</h6>
        <div className={styles.accountInfo}>
          <div className={styles.personalInfo}>
            <ReactAvatarEditor
              width={150}
              height={150}
              border={0}
              image={props.src}
            />
            <div className={styles.personalDetailsWrapper}>
              <h6 className={styles.name}>Franscisco Alexander</h6>
              <h6 className={styles.place}>Los Angelas USA</h6>
              <h6 className={styles.date}>After noon time</h6>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <p
              onClick={() => handleChange("edit profile")}
              className={styles.personalInfoButton}
            >
              Edit Profile
            </p>
            <FileInput
              onFileSelect={onFileSelect}
              children={
                <p className={styles.personalInfoButton}>Change Photo</p>
              }
            />

            <p className={styles.personalInfoButton}>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountSummary;
