import React, { useEffect, useState } from "react";
// import Button from "../UI/Button";
import style from "./style.module.css";

const AddressForm = ({ address, onFieldsChange }) => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    addressLine1: "",
    apartment: "",
    city: "",
    state: "",
    pinCode: "",
    country: "IND",
    phone: "",
    email: "",
  });
  useEffect(() => {
    if (onFieldsChange) onFieldsChange(formValues);
  }, [formValues, onFieldsChange]);
  useEffect(() => {
    if (address && address.firstName) {
      setFormValues({
        firstName: address.firstName || "",
        lastName: address.lastName || "",
        addressLine1: address.addressLine1 || "",
        apartment: address.apartment || "",
        city: address.city || "",
        state: address.state || "",
        pinCode: address.pinCode || "",
        country: address.country || "",
        phone: address.phone || "",
        email: address.email || "",
      });
    }
  }, [address]);
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   onSubmit(formValues);
  // };
  return (
    <div className={style.tableWrapper}>
      <form action="#" className="billing-form">
        <h3 className={style.billingHeading}>Billing Details</h3>
        <div className={style.row}>
          <div className={style.colHalf}>
            <div className={style.formGroup}>
              <label className={style.inputLabel} htmlFor="firstname">
                First Name
              </label>
              <input
                value={formValues.firstName}
                onChange={(e) =>
                  setFormValues({ ...formValues, firstName: e.target.value })
                }
                type="text"
                className={style.formControl}
                placeholder=""
              />
            </div>
          </div>
          <div className={style.colHalf}>
            <div className={style.formGroup}>
              <label className={style.inputLabel} htmlFor="lastname">
                Last Name
              </label>
              <input
                value={formValues.lastName}
                onChange={(e) =>
                  setFormValues({ ...formValues, lastName: e.target.value })
                }
                type="text"
                className={style.formControl}
                placeholder=""
              />
            </div>
          </div>
          <div className={style.colHalf}>
            <div className={style.formGroup}>
              <label className={style.inputLabel} htmlFor="streetaddress">
                Street Address
              </label>
              <input
                value={formValues.addressLine1}
                onChange={(e) =>
                  setFormValues({ ...formValues, addressLine1: e.target.value })
                }
                type="text"
                className={style.formControl}
                placeholder="House number and street name"
              />
            </div>
          </div>
          <div className={style.colHalf}>
            <div className={style.formGroup}>
              <input
                value={formValues.apartment}
                onChange={(e) =>
                  setFormValues({ ...formValues, apartment: e.target.value })
                }
                type="text"
                className={style.formControl}
                placeholder="Appartment, suite, unit etc: (optional)"
              />
            </div>
          </div>
          <div className={style.colHalf}>
            <div className={style.formGroup}>
              <label className={style.inputLabel} htmlFor="towncity">
                Town / City
              </label>
              <input
                value={formValues.city}
                onChange={(e) =>
                  setFormValues({ ...formValues, city: e.target.value })
                }
                type="text"
                className={style.formControl}
                placeholder=""
              />
            </div>
          </div>
          <div className={style.colHalf}>
            <div className={style.formGroup}>
              <label className={style.inputLabel} htmlFor="postcodezip">
                Postcode / ZIP *
              </label>
              <input
                value={formValues.pinCode}
                onChange={(e) =>
                  setFormValues({ ...formValues, pinCode: e.target.value })
                }
                type="text"
                className={style.formControl}
                placeholder=""
              />
            </div>
          </div>
          <div className={style.colHalf}>
            <div className={style.formGroup}>
              <label className={style.inputLabel} htmlFor="streetaddress">
                State
              </label>
              <input
                value={formValues.state}
                onChange={(e) =>
                  setFormValues({ ...formValues, state: e.target.value })
                }
                type="text"
                className={style.formControl}
                placeholder="State"
              />
            </div>
          </div>
          <div className={style.colHalf}>
            <div className={style.formGroup}>
              <label className={style.inputLabel} htmlFor="country">
                Country
              </label>
              <div className="select-wrap">
                <div className="icon">
                  <span className="ion-ios-arrow-down"></span>
                </div>
                <select
                  value={formValues.country}
                  onChange={(e) => {
                    setFormValues({ ...formValues, country: e.target.value });
                  }}
                  name=""
                  id=""
                  className={style.formControl}
                >
                  <option value="IND">India</option>
                  <option value="CAN">Canada</option>
                  <option value="USA">USA</option>
                  <option value="UK">United Kingdom</option>
                  <option value="AUS">Australia</option>
                  <option value="RUS">Russia</option>
                  <option value="NZ">New Zealand</option>
                </select>
              </div>
            </div>
          </div>
          <div className={style.colHalf}>
            <div className={style.formGroup}>
              <label className={style.inputLabel} htmlFor="phone">
                Phone
              </label>
              <input
                value={formValues.phone}
                onChange={(e) =>
                  setFormValues({ ...formValues, phone: e.target.value })
                }
                type="text"
                className={style.formControl}
                placeholder=""
              />
            </div>
          </div>
          <div className={style.colHalf}>
            <div className={style.formGroup}>
              <label className={style.inputLabel} htmlFor="emailaddress">
                Email Address
              </label>
              <input
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({ ...formValues, email: e.target.value })
                }
                type="text"
                className={style.formControl}
                placeholder=""
              />
            </div>
          </div>
          {/* <div className={style.colFull}>
            <div className={style.formGroup}>
              <div className={style.formCheckbox}>
                <label htmlFor="ordernotes">Order Notes</label>
              </div>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                className={style.formControl}
                placeholder="Notes about your order, e.g. special notes for delivery."
              ></textarea>
            </div>
          </div> */}
        </div>
      </form>
    </div>
  );
};

export default AddressForm;
