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
      <h6 className={styles.titleText}>Invoices</h6>
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
