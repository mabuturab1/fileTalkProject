import React from "react";
import styles from "./Header.module.scss";
import Button from "../input/button/Button";
import CircularImage from "../circularImage/CircularImage";
import { Link } from "react-router-dom";
import { routes } from "../../interfaces/routes";
interface HeaderProps {
  userName?: string;
  companyName: string;
  profileImage: string;
}
const myheader = (props: HeaderProps) => {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.logoName}>
        <h6 className={styles.logo}>
          {props.companyName != null ? props.companyName : ""}
        </h6>
      </div>
      <div className={styles.userDetails}>
        <Link to={routes.subscriptionPage}>
          <div className={styles.upgradeButton}>
            <Button
              type={"secondary"}
              label={"Upgrade now"}
              padding={["0.8rem", "4rem"]}
            />
          </div>
        </Link>
        <p className={styles.userName}>
          {props.userName != null ? props.userName : "User"}
        </p>
        <div className={styles.profileImage}>
          <CircularImage
            src={props.profileImage != null ? props.profileImage : ""}
          />
        </div>
      </div>
    </div>
  );
};
export default myheader;
