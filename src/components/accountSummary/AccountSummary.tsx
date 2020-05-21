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
import UserDataContext, { UserInfo } from "../../context/userDataContext";
import SemanticModal from "../semanticModal/SemanticModal";
import ChangePhoto from "../changePhoto/ChangePhoto";
import AuthContext from "../../context/authContext";

interface AccountSummaryProps {
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
  const [showEditProfile, setEditProfile] = useState(false);
  const [showEditPhoto, setEditPhoto] = useState(false);

  const userDataContext = useContext(UserDataContext);
  const authContext = useContext(AuthContext);
  const handleChange = (event: string) => {
    if (event === "edit profile") {
      setEditProfile(true);
      console.log("set edit photo");
    }
  };
  const onFileSelect = (file: any) => {
    console.log(file);

    userDataContext.setImageSrc(URL.createObjectURL(file));
  };
  const saveUserData = (userData: UserInfo) => {
    userDataContext.setUserInfo(userData);
    setEditProfile(false);
  };
  return (
    <div className={styles.accountSummaryWrapper}>
      {showEditProfile ? (
        <SemanticModal size="small" style={{ backgroundColor: "white" }}>
          <EditProfile
            onCancel={() => setEditProfile(false)}
            onSave={saveUserData}
          />
        </SemanticModal>
      ) : null}
      {showEditPhoto ? (
        <SemanticModal size="small" style={{ backgroundColor: "white" }}>
          <ChangePhoto
            onClose={() => setEditPhoto(false)}
            imageSrc={userDataContext.imageSrc}
          />
        </SemanticModal>
      ) : null}
      <div className={styles.userWrapper}>
        <h6 className={styles.titleText}>Profile</h6>
        <div className={styles.accountInfo}>
          <div className={styles.personalInfo}>
            <img
              className={styles.image}
              src={userDataContext.imageSrc}
              alt="user"
            />
            <div className={styles.personalDetailsWrapper}>
              <h6
                className={styles.name}
              >{`${userDataContext.userData.firstName} ${userDataContext.userData.lastName}`}</h6>
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

            <p
              className={styles.personalInfoButton}
              onClick={() => setEditPhoto(true)}
            >
              Change Photo
            </p>

            <p
              className={styles.personalInfoButton}
              onClick={() => authContext.setAuthenticated(false)}
            >
              Logout
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountSummary;
