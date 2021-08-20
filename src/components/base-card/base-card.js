import React, { useState } from "react";
import InputField from "../input/input";
import cardStyles from "./basecard.module.css";
import { useFormik } from "formik";
import * as yup from "yup";
import Button from "../button/button";
import CreditcardBack from "../credit-card-back/credit-card-back";
import Creditcard from "../credit-card/card";
import ReactCardFlip from "react-card-flip";

function BaseCard({ onClick }) {
  const { handleChange, handleSubmit, values, touched, errors, handleBlur } =
    useFormik({
      initialValues: {
        cardNumber: "#### #### #### ####",
        cardName: "FULL NAME",
        cvvNumber: "",
        month: "MM",
        year: "YY",
      },
      validationSchema: yup.object({
        cardNumber: yup.string().required("Card Number is required"),
        cardName: yup
          .string()
          .required("Card Name is required")
          .max(15, "Name should be at most 20 characters only"),
        cvvNumber: yup.string().required("CVV required"),
      }),
      onSubmit: (values) => {
        console.log(values, "values");
      },
    });

  const [isFlipped, setIsFlipped] = useState(false);

  const MonthData = [
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

  return (
    <div>
      {/* credit card  */}
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        {/* Credit card front side  */}
        <Creditcard
          Expires={`${values.month} / ${values.year}`}
          CardName={values.cardName}
          CardNumber={values.cardNumber}
        />

        {/* credit card back side  */}
        <CreditcardBack
          onClickBack={() => setIsFlipped(false)}
          cvv={values.cvvNumber}
        />
      </ReactCardFlip>

      {/* BaseCard input details */}
      <div className={cardStyles.cardWrapper}>
        <form className={cardStyles} onSubmit={handleSubmit}>
          <div className={cardStyles.inputWrap}>
            <InputField
              labelName="Card Number"
              value={values.cardNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              id="cardNumber"
              type="number"
              placeholder=""
            />

            {touched.cardNumber && errors.cardNumber ? (
              <div className={cardStyles.error}>{errors.cardNumber}</div>
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
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="MM" label="Month" defaultValue />
                      {MonthData.map((item, i) => (
                        <option value={item.value} label={item.label} />
                      ))}
                    </select>
                  </div>
                </div>

                <div className={cardStyles.yearSelect}>
                  <div className={cardStyles.selectWrap}>
                    <select
                      name="year"
                      value={values.year}
                      onChange={handleChange}
                      onBlur={handleBlur}
                    >
                      <option value="YY" label="Year" defaultValue />
                      {YearData.map((item, i) => (
                        <option value={item.value} label={item.label} />
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className={cardStyles.cvvWrap}>
              <div className={cardStyles.inputWrap}>
                <InputField
                  onClick={() => setIsFlipped(true)}
                  labelName="CVV"
                  value={values.cvvNumber}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  id="cvvNumber"
                  type="number"
                  placeholder=""
                />

                {touched.cvvNumber && errors.cvvNumber ? (
                  <div className={cardStyles.error}>{errors.cvvNumber}</div>
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
