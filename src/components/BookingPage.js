import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
} from "@chakra-ui/react";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
export default function BookingPage({ availableTimes, dispatch, submitForm }) {
  let [form, setForm] = useState({
    date: new Date(),
    time: null,
    guests: 0,
    occasion: "",
  });
  const formik = useFormik({
    initialValues: {
      date: new Date(),
      time: null,
      guests: 0,
      occasion: "",
    },
    onSubmit: (values) => {
      submitForm(values);
    },
    validationSchema: Yup.object({
      date: Yup.string().required("Required"),
      time: Yup.string().required("Required"),
      occasion: Yup.string().required("Required"),
      guests: Yup.number()
        .required("Required")
        .min(1, "Must be at least 1")
        .max(10, "Must be at least 10"),
    }),
    validateOnBlur: true,
    validateOnChange: true,
  });
  const handleChange = (e) => {
    formik.handleChange(e);
    if (e.target.name === "date") {
      dispatch({ date: e.target.value }); 
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(form);
  //   // you can send formData to an API here
  //   submitForm(form);
  // };

  return (
    <>
      <Box>
        <Flex
          margin="0 auto"
          py={16}
          justifyContent="center"
          alignItems="center"
          maxWidth="1024px"
          direction={"column"}
        >
          <h1>Book Now</h1>
          <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
            <FormControl isInvalid={formik.touched.date && formik.errors.date}>
              <FormLabel>Choose date</FormLabel>
              <Input
                type="date"
                {...formik.getFieldProps("date")}
                onChange={handleChange}
              />
              {formik.touched.date && !!formik.errors.date && (
                <FormErrorMessage>{formik.errors.date}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={formik.touched.time && formik.errors.time}>
              <FormLabel>Choose time</FormLabel>
              <Select
                placeholder="Select option"
                {...formik.getFieldProps("time")}
                onChange={handleChange}
              >
                {availableTimes.map((item) => (
                  <option key={item} value={item}>{item}</option>
                ))}
              </Select>
              {formik.touched.time && !!formik.errors.time && (
                <FormErrorMessage>{formik.errors.time}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
              <FormLabel>Number of guests</FormLabel>
              <Input
                type="number"
                min={1}
                max={10}
                {...formik.getFieldProps("guests")}
                onChange={handleChange}
              />
              {formik.touched.guests && !!formik.errors.guests && (
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isInvalid={formik.touched.occasion && formik.errors.occasion}>
              <FormLabel>Occasion</FormLabel>
              <Select
                id="occasion"
                name="occasion"
                {...formik.getFieldProps("occasion")}
                onChange={handleChange}
              >
                <option key="Birthday">Birthday</option>
                <option key="Anniversary">Anniversary</option>
              </Select>
              {formik.touched.occasion && !!formik.errors.occasion && (
                <FormErrorMessage>{formik.errors.occasion}</FormErrorMessage>
              )}
            </FormControl>
            <Button type="submit">Make Your reservation</Button>
          </form>
        </Flex>
      </Box>
    </>
  );
}
