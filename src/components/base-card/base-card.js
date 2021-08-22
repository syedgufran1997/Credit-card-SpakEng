import React from "react";
import InputField from "../input/input";
import cardStyles from "./basecard.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "../button/button";
import Cards from "react-credit-cards";
import "../../cardstyles.css";
// import "react-credit-cards/es/styles-compiled.css";

function BaseCard() {
  const {
    handleChange,
    handleSubmit,
    values,
    touched,
    errors,
    handleBlur,
    setFieldValue,
  } = useFormik({
    initialValues: {
      number: "",
      cardName: "FULL NAME",
      cvc: "",
      expiry: "",
      month: "MM",
      year: "YY",
      focus: "",
    },
    validationSchema: yup.object({
      number: yup.string().required("Card Number is required"),
      cardName: yup
        .string()
        .required("Card Name is required")
        .max(15, "Name should be at most 20 characters only"),
      cvc: yup.string().required("CVV required").max(4, "4 characters only"),
      month: yup.string().required("month required"),
      year: yup.string().required("year required"),
    }),
    onSubmit: (values) => {
      console.log(values, "values");
    },
  });

  const MonthData = [
    { label: "Month", value: "" },
    { label: "Jan", value: "01" },
    { label: "Feb", value: "02" },
    { label: "Mar", value: "03" },
    { label: "Apr", value: "04" },
    { label: "May", value: "05" },
    { label: "Jun", value: "06" },
    { label: "Jul", value: "07" },
    { label: "Aug", value: "08" },
    { label: "Sep", value: "09" },
    { label: "Oct", value: "10" },
    { label: "Nov", value: "11" },
    { label: "Dec", value: "12" },
  ];

  const YearData = [
    { value: "", label: "Year" },
    { value: "10", label: "2010" },
    { value: "11", label: "2011" },
    { value: "12", label: "2012" },
    { value: "13", label: "2013" },
    { value: "14", label: "2014" },
    { value: "15", label: "2015" },
    { value: "16", label: "2016" },
    { value: "17", label: "2017" },
    { value: "18", label: "2018" },
    { value: "19", label: "2019" },
    { value: "20", label: "2020" },
    { value: "21", label: "2021" },
  ];

  const handleDate = (e) => {
    setFieldValue("month", e.target.value, true);
    setFieldValue("expiry", e.target.value, true);
  };
  const handleExpiry = (e) => {
    setFieldValue("expiry", values.month.concat(e.target.value));
    handleChange(e);
    // SetExpiry(month.concat(e.target.value));
  };

  const handleInputFocus = (e) => {
    console.log("focus is working");
    setFieldValue("focus", e.target.name);
  };

  return (
    <div className="">
      <div className="credit-card">
        <Cards
          locale={{ valid: "Expires" }}
          placeholders={{ name: "FULL NAME" }}
          preview
          cvc={values.cvc}
          expiry={values.expiry}
          expiryyear={values.year}
          focused={values.focus}
          name={values.cardName}
          number={values.number}
        />
      </div>

      {/* BaseCard input details */}
      <div className={cardStyles.cardWrapper}>
        <p className={cardStyles.cardHolder}>Card Holder</p>
        <form className={cardStyles} onSubmit={handleSubmit}>
          <div className={cardStyles.inputWrap}>
            <InputField
              labelName="Card Number"
              value={values.number}
              onChange={handleChange}
              onBlur={handleBlur}
              name="number"
              maxLength="16"
              pattern="[0-9]+"
              id="cardNumber"
              type="number"
              onPaste={(e) => e.preventDefault()}
              onFocus={(e) => handleInputFocus(e)}
            />

            {touched.number && errors.number ? (
              <div className={cardStyles.error}>{errors.number}</div>
            ) : null}
          </div>

          <div className={cardStyles.inputWrap}>
            <InputField
              labelName="Card Name"
              value={values.cardName}
              onChange={handleChange}
              onBlur={handleBlur}
              id="cardName"
              type="text"
              placeholder=""
            />

            {touched.cardName && errors.cardName ? (
              <div className={cardStyles.error}>{errors.cardName}</div>
            ) : null}
          </div>

          <div className={cardStyles.datecvvWrap}>
            <div className={cardStyles.dateWrap}>
              <label className="label">Expiration Date</label>
              <div className={cardStyles.monthyearWrap}>
                <div className={cardStyles.monthSelect}>
                  <div className={cardStyles.selectWrap}>
                    <select
                      name="month"
                      value={values.month}
                      placeholder="MM"
                      onChange={(e) => {
                        handleDate(e);
                      }}
                      onBlur={handleBlur}
                    >
                      {/* <option value="" label="Month" defaultValue /> */}
                      {MonthData.map((item, i) => (
                        <option key={i} value={item.value} label={item.label} />
                      ))}
                    </select>
                  </div>
                </div>

                <div className={cardStyles.yearSelect}>
                  <div className={cardStyles.selectWrap}>
                    <select
                      name="year"
                      value={values.year}
                      onChange={(e) => handleExpiry(e)}
                      onBlur={handleBlur}
                    >
                      {/* <option value="" label="Year" defaultValue /> */}
                      {YearData.map((item, i) => (
                        <option key={i} value={item.value} label={item.label} />
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className={cardStyles.cvvWrap}>
              <div className={cardStyles.inputWrap}>
                <InputField
                  name="cvc"
                  labelName="CVV"
                  value={values.cvc}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="cvc"
                  type="number"
                  maxLength="3"
                  pattern="\d*"
                  onFocus={(e) => handleInputFocus(e)}
                />

                {touched.cvc && errors.cvc ? (
                  <div className={cardStyles.error}>{errors.cvc}</div>
                ) : null}
              </div>
            </div>
          </div>

          <Button type="submit" name="Submit" />
        </form>
      </div>
    </div>
  );
}
export default BaseCard;
