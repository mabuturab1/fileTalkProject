import React from "react";
import styles from "./CountryList.module.scss";
import Dropdown from "../dropdown/Dropdown";
import { countries } from "../../interfaces/countriesList";
interface CountryListProps {
  handleChange: any;
  value: string;
  error: string;
  elementConfig: { label: string; placeholder: string };
  name: string;
  touched: boolean;
  labelStyle?: any;
  inputStyle?: any;
}
const countryList = (props: CountryListProps) => {
  let countryOptionsList: {
    key: string;
    value: string;
    flag: string;
    text: string;
  }[] = [];
  countries.forEach((val, index) => {
    countryOptionsList.push({
      key: val.countryCode.toLowerCase(),
      value: val.countryCode.toLowerCase(),
      flag: val.countryCode.toLowerCase(),
      text: val.name,
    });
  });

  let labelStyle = {
    width: "10rem",
    color: "black",
  };
  labelStyle = {
    ...labelStyle,
    ...props.labelStyle,
  };
  return (
    <div className={styles.wrapper}>
      <label className={styles.labelStyle} style={labelStyle}>
        {props.elementConfig.label}
      </label>
      <div className={styles.dropdownWrapper} style={props.inputStyle}>
        <Dropdown
          placeholder={props.elementConfig.placeholder}
          name={props.name}
          onChange={props.handleChange}
          options={countryOptionsList}
          value={props.value}
          error={props.error}
          touched={props.touched}
        />
      </div>
    </div>
  );
};
export default countryList;
