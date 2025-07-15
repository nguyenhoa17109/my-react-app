import { useReducer } from "react";
import BookingPage from "./BookingPage";
import HomePage from "./HomePage";
import { Routes, Route, useNavigate } from "react-router-dom";
import ConfirmedBooking from "./ConfirmedBooking";

export default function Main() {
  /* global fetchAPI */
  const initializeTimes = () => {
    return fetchAPI(new Date());
  };

  const updateTimes = (state, action) => {
    const selectedDate = action.date;
    // You can add logic based on date here in the future
    // For now, return the same list
    console.log('selectedDate', selectedDate);
    return fetchAPI(new Date(action.date));
  };
  const navigate = useNavigate()
  /* global submitAPI */
  const submitForm  = (formData) => {
    const response = submitAPI(formData);
    if(response)
      navigate("/booking-confirm")
  }
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

  return (
    <>
      <Routes>
         <Route path="/" element={<HomePage />}></Route>
         <Route path="/booking-confirm" element={<ConfirmedBooking />}></Route>
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}
