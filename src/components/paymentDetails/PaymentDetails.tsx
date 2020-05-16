import React from "react";
import styles from "./PaymentDetails.module.scss";
import { Input, Icon, Form, Divider } from "semantic-ui-react";
import Button from "../input/button/Button";
import PaymentMethod from "../../assets/images/PaymentMethod.png";
import PaymentMethod1 from "../../assets/images/PaymentMethod1.png";
import PaymentMethod2 from "../../assets/images/PaymentMethod2.png";
import PaymentMethod3 from "../../assets/images/PaymentMethod3.png";
import InputFormField from "../input/formField/FormField";
import CountryList from "../countryList/CountryList";
import HeaderText from "../headerText/HeaderText";
import { withFormik, FormikBag } from "formik";

import * as Yup from "yup";
const PaymentDetails = ({
  values,
  touched,
  errors,
  handleChange,
  isSubmitting,

  handleSubmit,
  setFieldValue,
}: any) => {
  let style: any = {
    width: "100%",
    height: "100%",
  };
  const formData = {
    fullName: {
      label: "Full Name",
      placeholder: "Please enter full name",
    },
    country: {
      label: "Country",
      placeholder: "eg. South Korea",
    },
    creditCardNumber: {
      label: "Credit or debit card",
      placeholder: "Card Number",
    },
  };
  const handleChangeDropdown = (e: any, { name, value }: any) =>
    setFieldValue(name, value);
  const getPaymentMethods = () => {
    return [PaymentMethod, PaymentMethod1, PaymentMethod2, PaymentMethod3].map(
      (el) => {
        return (
          <img className={styles.imageStyle} src={el} alt="paymentMethod" />
        );
      }
    );
  };
  return (
    <Form>
      <div className={styles.billingForm}>
        <div className={styles.header}>
          <HeaderText onCancel={values.onClose} titleText={"Payment"} />
        </div>

        <div className={styles.singleForm}>
          <InputFormField
            error={errors.fullName}
            elementConfig={formData.fullName}
            handleChange={handleChange}
            name={"fullName"}
            value={values.fullName}
            touched={touched.fullName}
          />
        </div>
        <div className={styles.singleForm}>
          <CountryList
            error={errors.country}
            elementConfig={formData.country}
            handleChange={handleChangeDropdown}
            name={"country"}
            value={values.country}
            touched={touched.country}
          />
        </div>
        <Divider />
        <div className={styles.cardDetails}>
          <InputFormField
            icon={"credit card"}
            error={errors.creditCardNumber}
            elementConfig={formData.creditCardNumber}
            handleChange={handleChange}
            name={"creditCardNumber"}
            value={values.creditCardNumber}
            touched={touched.creditCardNumber}
          />
          <p className={styles.cardSubtitles}>
            Your credit card will be stored with out secure partner Stripe
          </p>
        </div>
        <div className={styles.buttonWrapper}>
          <Button
            padding={["0.8rem", "6rem"]}
            label={"Pay " + values.totalAmount}
          />
        </div>
        <div className={styles.supportedPaymentMethods}>
          <div className={styles.imageTile}>{getPaymentMethods()}</div>
          <p className={styles.cardSubtitles}>
            All major credit and debit cards supported
          </p>
        </div>
      </div>
    </Form>
  );
};

const FormikPaymentBillingInfo = withFormik({
  mapPropsToValues(props: any) {
    return {
      fullName: props.fullName || "",

      country: props.country || "",
      creditCardNumber: props.creditCardNumber || "",
      totalAmount: props.totalAmount || 0,
      onClose: props.onClose,
    };
  },
  handleSubmit(values: any, { setErrors, setSubmitting, resetForm }) {
    console.log(values);

    setTimeout(() => {
      setSubmitting(false);
      resetForm();
    }, 2000);
  },
  validationSchema: Yup.object().shape({
    fullName: Yup.string().required("First name is required"),

    country: Yup.string().required("Country is required"),
    creditCardNumber: Yup.number().required("Country is required"),
  }),
})(PaymentDetails);
export default FormikPaymentBillingInfo;
