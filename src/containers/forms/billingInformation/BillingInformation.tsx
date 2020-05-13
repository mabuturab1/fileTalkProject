import React, { useState } from "react";
import { getElementData, FormField } from "./utils";
import { Form, Divider } from "semantic-ui-react";
import InputFormField from "../../../components/input/formField/FormField";

import styles from "./BillingInformation.module.scss";

var validator = require("validator");

const BillingInformation = (props: { showDivider?: boolean }) => {
  let billingClass = [styles.billingForm];
  if (props.showDivider) {
    billingClass.push(styles.removeBorder);
  }
  const [formState, setFormState] = useState<{
    [key: string]: FormField | boolean;
  }>({
    valid: false,
    name: getElementData(
      "email",
      "Billing email",
      "youremail@email.com",
      { required: true, email: true },
      null,
      ""
    ),
    email: getElementData(
      "country",
      "Country",
      "South Korea",
      { required: true },
      null,
      ""
    ),
    vatId: getElementData(
      "vatId",
      "VAT ID number",
      "VAT ID",
      { required: true },
      null,
      ""
    ),
    billingAddress: getElementData(
      "address",
      "Blling Address",
      "Address",
      { required: true },
      null,
      ""
    ),
    companyName: getElementData(
      "companyName",
      "Company Name",
      "Company Name",
      { required: true },
      null,
      ""
    ),
  });
  const updateValidity = (form: { [key: string]: FormField | boolean }) => {
    let validity = true;
    const keys = Object.keys(form);

    for (let i = 0; i < keys.length; i++) {
      if ((form[keys[i]] as FormField).valid != null)
        validity = validity && (form[keys[i]] as FormField).valid;
    }

    return validity;
  };
  const onInputChanged = (value: string, key: string) => {
    console.log("input changed", value, key);
    let form = { ...formState };
    let element = { ...(form[key] as FormField) };
    element.elementConfig.value = value;
    element.touched = true;
    let errors = getErrors(element);

    if (errors == null) element.valid = true;
    else element.valid = false;
    element.errors = errors;
    form[key] = element;
    form.valid = updateValidity(form);

    setFormState(form);
  };
  const getErrors = (element: any) => {
    if (element.validators.required) {
      if (element.elementConfig.value == null) return { required: true };
      if (element.elementConfig.value.trim() === "") return { required: true };
    }

    if (element.validators.email) {
      if (!validator.isEmail(element.elementConfig.value))
        return { email: true };
    }
    return null;
  };
  const getDivider = () => {
    if (props.showDivider) return <Divider />;
    else return null;
  };
  return (
    <div className={styles.billingInformationWrapper}>
      <h6 className={styles.title}>Billing Information</h6>
      {getDivider()}
      <div className={billingClass.join(" ")}>
        <Form>
          <div className={styles.singleForm}>
            <InputFormField
              onChange={onInputChanged}
              hasError={(formState.name as FormField).errors != null}
              elementConfig={(formState.name as FormField).elementConfig}
            />
          </div>
          <div className={styles.singleForm}>
            <InputFormField
              onChange={onInputChanged}
              hasError={(formState.email as FormField).errors != null}
              elementConfig={(formState.email as FormField).elementConfig}
            />
          </div>
          <Divider />
          <h6 className={styles.title}>(Optional)</h6>
          <div className={styles.singleForm}>
            <InputFormField
              onChange={onInputChanged}
              hasError={(formState.vatId as FormField).errors != null}
              elementConfig={(formState.vatId as FormField).elementConfig}
            />
          </div>
          <div className={styles.singleForm}>
            <InputFormField
              onChange={onInputChanged}
              hasError={(formState.billingAddress as FormField).errors != null}
              elementConfig={
                (formState.billingAddress as FormField).elementConfig
              }
            />
          </div>
          <div className={styles.singleForm}>
            <InputFormField
              onChange={onInputChanged}
              hasError={(formState.companyName as FormField).errors != null}
              elementConfig={(formState.companyName as FormField).elementConfig}
            />
          </div>
        </Form>
      </div>
    </div>
  );
};
export default BillingInformation;
