import { render, screen } from '@testing-library/react';
import ReservationForm from './ReservationForm';

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/example/path"
  }),
  useNavigate: () => jest.fn(),
  useOutletContext: () => ({ setReservation: jest.fn() }),
  Link: jest.fn()
}));

test('Renders the BookingForm heading', () => {
    render(<ReservationForm />);
    const headingElement = screen.getByText('Reservation');
    expect(headingElement).toBeInTheDocument();
})