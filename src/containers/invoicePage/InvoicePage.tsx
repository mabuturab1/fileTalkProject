import React, { SyntheticEvent } from "react";
import styles from "./InvoicePage.module.scss";
import Table from "../../components/paginatedTable/PaginatedTable";
import { tableData } from "../../interfaces/dummyData";
import { Link } from "react-router-dom";
import { Divider } from "semantic-ui-react";
import { routes } from "../../interfaces/routes";
const InvoicePage = (props: any) => {
  const onPageChange = (event: SyntheticEvent, data: object) => {
    console.log(event);
    console.log(data);
  };
  return (
    <div className={styles.invoiceWrapper}>
      <div className={styles.cancelButton}>
        <Link to={routes.accountPage}>
          <button className={styles.cancelButton}>Cancel</button>
        </Link>
      </div>
      <div className={styles.header}>
        <h4 className={styles.headerTitle}>Order Subscription</h4>
      </div>
      <Divider />
      <div className={styles.contentWrapper}>
        <Table
          onPageChange={onPageChange}
          header={["Date", "Number", "Amount", "Download"]}
          data={tableData}
          totalPages={10}
        />
      </div>
    </div>
  );
};
export default InvoicePage;
