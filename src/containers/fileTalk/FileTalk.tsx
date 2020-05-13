import React from "react";
import styles from "./FileTalk.module.scss";
import FileTalkHeader from "../../components/fileTalkHeader/fileTalkHeader";
import profileImage from "../../assets/images/ProfileImage.png";
import UploadScreenPage from "../uploadScreenPage/UploadScreenPage";
import { Switch, Route, Redirect } from "react-router-dom";
import { Icon } from "semantic-ui-react";
import UploadDetails from "../uploadDetails/UploadDetails";
import FileViewPage from "../fileViewPage/FileViewPage";
import { routes } from "../../interfaces/routes";
import SearchResultsPage from "../searchResultsPage/SearchResultsPage";
const FileTalk = (props: any) => {
  const getHeader = () => {
    return (
      <FileTalkHeader
        src={profileImage}
        userName={"Francisco Alexander"}
        userStatus={"Shared 3 files"}
      />
    );
  };

  return (
    <div className={styles.fileTalkWrapper}>
      <Switch>
        <Route path={routes.uploadScreenPage}>
          {getHeader()}
          <div className={styles.uploadScreenPageWrapper}>
            <UploadScreenPage />
          </div>
        </Route>
        <Route path={routes.uploadDetails}>
          {getHeader()}
          <UploadDetails />
        </Route>
        <Route path={routes.fileView} component={FileViewPage} />
        <Route path={routes.searchResultsPage} component={SearchResultsPage} />

        <Redirect from={routes.fileTalkMainPage} to={routes.uploadScreenPage} />
      </Switch>
      <div className={styles.chatIcon} style={{ transform: "rotateY(180deg)" }}>
        <Icon style={{ color: "white" }} size="big" name="chat" />
      </div>
    </div>
  );
};
export default FileTalk;
