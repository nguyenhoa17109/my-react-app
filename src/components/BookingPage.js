import { Box, Button, Flex, FormControl, FormLabel, Input, Select } from "@chakra-ui/react";
import { useState } from "react";

export default function BookingPage({ availableTimes, dispatch, submitForm }) {
  let [form, setForm] = useState({
    date: new Date(),
    time: null,
    guests: 0,
    occasion: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (name === "time") {
      dispatch({ date: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    // you can send formData to an API here
    submitForm(form);
  };

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
          <form onSubmit={handleSubmit} style={{width: "100%"}}>
            <FormControl>
              <FormLabel>Choose date</FormLabel>
              <Input type="date" value={form.date} onChange={handleChange} />
            </FormControl>
            <FormControl>
              <FormLabel>Choose time</FormLabel>
              <Select
                placeholder="Select option"
                value={form.time}
                onChange={handleChange}
              >
                {availableTimes.map((item) => (
                  <option value={item}>{item}</option>
                ))}
              </Select>
            </FormControl>
            <FormControl>
              <FormLabel>Number of guests</FormLabel>
              <Input
                type="number"
                min={1}
                max={10}
                value={form.guests}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Occasion</FormLabel>
              <Select
                id="occasion"
                name="occasion"
                value={form.occasion}
                onChange={handleChange}
              >
                <option>Birthday</option>
                <option>Anniversary</option>
              </Select>
            </FormControl>
          <Button type="submit">Make Your reservation</Button>
          </form>
        </Flex>
      </Box>
    </>
  );
}
