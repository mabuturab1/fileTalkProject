import React from "react";
import styles from "./StorageSummary.module.scss";
import ProgressBar from "../progressBar/ProgressBar";
import { Link } from "react-router-dom";
import { routes } from "../../interfaces/routes";
import Button from "../input/button/Button";
const storageSummary = (props: any) => {
  return (
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
  );
};
export default storageSummary;
