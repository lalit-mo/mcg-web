import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom'; // Use MemoryRouter for testing routing
import App from './App';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const appElement = screen.getByText(/Cognitive Science Labs, IIIT-H/i); // You can change this to a text you expect to find
    expect(appElement).toBeInTheDocument();
  });

  test('renders the Home component when navigating to /home', () => {
    render(
      <MemoryRouter initialEntries={['/home']}>
        <App />
      </MemoryRouter>
    );
    const homeElement = screen.getByText(/Welcome to the Home Page!/i); // Change to a specific text in your Home component
    expect(homeElement).toBeInTheDocument();
  });

  test('renders the Members component when navigating to /mem', () => {
    render(
      <MemoryRouter initialEntries={['/mem']}>
        <App />
      </MemoryRouter>
    );
    const membersElement = screen.getByText(/Members Page/i); // Change to a specific text in your Members component
    expect(membersElement).toBeInTheDocument();
  });

  test('renders the About component when navigating to /about', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <App />
      </MemoryRouter>
    );
    const aboutElement = screen.getByText(/About Us/i); // Change to a specific text in your About component
    expect(aboutElement).toBeInTheDocument();
  });

  // Add more tests for other components as needed
});
