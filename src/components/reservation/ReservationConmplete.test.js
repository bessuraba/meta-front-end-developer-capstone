import { render, screen } from '@testing-library/react';
import ReservationComplete from './ReservationComplete';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/example/path"
  }),
  useNavigate: () => jest.fn(),
  useOutletContext: () => ({ setReservation: jest.fn(), reservation: {
    date: '2025-01-01',
    time: '12:00',
    occasion: 'birthday',
    guests: {
      adults: 2,
      children: 1,
      pets: 0
    },
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    phone: '123-456-7890',
    sms: true,
    note: 'Note here'
  } }),
  Link: jest.fn()
}));

test('Renders the BookingForm heading', () => {
    render(<ReservationComplete />);
    const headingElement = screen.getByText('Confirmation');
    expect(headingElement).toBeInTheDocument();
    const name = screen.getByText('John Doe');
    expect(name).toBeInTheDocument();
})