import { Formik } from "formik";
import React, { useState } from "react";

const BookingForm = ({ availableTimes, dispatchOnDateChange, submitData }) => {
  const [time, setTime] = useState(availableTimes[0]);
  const [date, setDate] = useState();
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");
  const [email, setEmail] = useState("");

  const handleSubmit = (values) => {
    submitData({ values });
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatchOnDateChange(e.target.value);
  };

  return (
    <div>
      <Formik
        initialValues={{
          date: date,
          email: email,
          guests: guests,
          time: availableTimes[0],
          occasion: occasion,
        }}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = "Required";
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = "Invalid email";
          }
          return errors;
        }}
        onSubmit={handleSubmit}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-column">
              <div className="form-row">
                <label htmlFor="date">Date</label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  onChange={handleDateChange}
                  onBlur={handleBlur}
                  value={values.date}
                />
                {errors.date && touched.date && errors.date}
              </div>
              <div className="form-row">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && errors.email}
              </div>
              <div className="form-row">
                <label htmlFor="guests">Guests</label>
                <input
                  type="number"
                  name="guests"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.guests}
                />
                {errors.guests && touched.guests && errors.guests}
              </div>{" "}
              <div className="form-row">
                <label htmlFor="time">Choose time</label>
                <select id="time ">
                  {availableTimes.map((times) => (
                    <option data-testid="booking-time-option" key={times}>
                      {times}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-row">
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default BookingForm;
