import React from "react";
import styles from "./AccountSummary.module.scss";
import ProgressBar from "../progressBar/ProgressBar";
import Button from "../input/button/Button";
import { Link } from "react-router-dom";
import { routes } from "../../interfaces/routes";
interface AccountSummaryProps {
  src: string;
  userName?: string;
  userAddress?: string;
  date?: string;
  storageUsage?: number;
  storageUsageLabel?: string;
  roomUsage?: number;
  roomUsageLabel?: string;
}
const AccountSummary = (props: AccountSummaryProps) => {
  return (
    <div className={styles.accountSummaryWrapper}>
      <div className={styles.userWrapper}>
        <h6 className={styles.titleText}>Profile</h6>
        <div className={styles.accountInfo}>
          <div className={styles.personalInfo}>
            <img className={styles.image} src={props.src} alt="user" />
            <div className={styles.personalDetailsWrapper}>
              <h6 className={styles.name}>Franscisco Alexander</h6>
              <h6 className={styles.place}>Los Angelas USA</h6>
              <h6 className={styles.date}>After noon time</h6>
            </div>
          </div>
          <div className={styles.buttonGroup}>
            <p className={styles.personalInfoButton}>Edit Profile</p>
            <p className={styles.personalInfoButton}>Change Photo</p>
            <p className={styles.personalInfoButton}>Logout</p>
          </div>
        </div>
      </div>
      <div className={styles.storageWrapper}>
        <h6 className={styles.titleText}>Storage usage</h6>
        <div className={styles.storageDetailsWrapper}>
          <div className={styles.singleProgressbar}>
            <ProgressBar
              title={"Storage usages"}
              value={1.4 / 2}
              details={"1.4GB/2.0GB"}
            />
          </div>
          <div className={styles.singleProgressbar}>
            <ProgressBar title={"Rooms"} value={17 / 25} details={"17/25"} />
          </div>
          <div className={styles.buttonWrapper}>
            <Link to={routes.subscriptionPage}>
              <Button
                label={"Upgrade"}
                type={"secondary"}
                padding={["0.8rem", "4rem"]}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AccountSummary;
