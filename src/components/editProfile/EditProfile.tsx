import React, { useState } from "react";
import styles from "./EditProfile.module.scss";
import HeaderText from "../headerText/HeaderText";
import InputFormField from "../input/formField/FormField";
import {
  getElementData,
  FormField,
} from "../../containers/forms/billingInformation/utils";
const EditProfile = (props: any) => {
  const [formState, setFormState] = useState<{
    [key: string]: FormField | boolean;
  }>({
    valid: false,
    firstName: getElementData(
      "First name",
      "First Name",
      "Enter your first name",
      { required: true },
      null,
      "Alexander"
    ),
    lastName: getElementData(
      "Last name",
      "Last name",
      "Enter your last name",
      { required: true },
      null,
      "Fransisco"
    ),
    password: getElementData(
      "Password",
      "Password",
      "Enter your password",
      { required: true },
      null,
      ""
    ),
    confirmPassword: getElementData(
      "Confirm password",
      "Confirm password",
      "Kindly re-renter password",
      { required: true },
      null,
      ""
    ),
  });
  return (
    <div className={styles.wrapper}>
      <HeaderText titleText={"Edit Profile"} />
      <div className={styles.formData}>
        <div className={styles.name}>
          <InputFormField
            hasError={(formState.firstName as FormField).errors != null}
            elementConfig={(formState.firstName as FormField).elementConfig}
          />
          <InputFormField
            hasError={(formState.lastName as FormField).errors != null}
            elementConfig={(formState.lastName as FormField).elementConfig}
          />
        </div>
        <div className={styles.password}>
          <InputFormField
            hasError={(formState.password as FormField).errors != null}
            elementConfig={(formState.password as FormField).elementConfig}
          />
          <InputFormField
            hasError={(formState.confirmPassword as FormField).errors != null}
            elementConfig={
              (formState.confirmPassword as FormField).elementConfig
            }
          />
        </div>
      </div>
    </div>
  );
};
export default EditProfile;
