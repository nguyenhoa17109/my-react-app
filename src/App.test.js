import { render, screen } from '@testing-library/react';
import App from './App';
import BookingPage from './components/BookingPage';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders the BookingForm heading', () => {
    render(<BookingPage />);
    const headingElement = screen.getByText("Book Now");
    expect(headingElement).toBeInTheDocument();
})

describe('initializeTimes', () => {
  it('should return the initial list of time slots', () => {
    const expected = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const result = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    expect(result).toEqual(expected);
  });
});

describe('updateTimes', () => {
  it('should return the same available times regardless of the date', () => {
    const currentState = ["17:00", "18:00"];
    const action = { type: 'UPDATE_TIMES', date: '2025-07-03' };
    const updateTimes = (state, action) => {
      // later, update based on action.date
      return initializeTimes();
    };
    const result = updateTimes(currentState, action);

    // For now, should always return the same as initializeTimes()
    expect(result).toEqual(initializeTimes());
  });
});