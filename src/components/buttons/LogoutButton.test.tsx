import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import '@testing-library/jest-dom';
import LogoutButton from './LogoutButton';

// Mock the Auth0Provider component
jest.mock('@auth0/auth0-react', () => ({
    Auth0Provider: ({ children }: any) => children,
    useAuth0: () => ({
        logout: jest.fn(),
    }),
}));

describe('LogoutButton', () => {
    test('renders logout button with class name', () => {
        const { getByText } = render(
            <Router>
                <LogoutButton />
            </Router>
        );
        const button = getByText('Log Out');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('primaryButton');
    });

    test('logout button should be clickable', () => {
        const { getByText } = render(
            <Router>
                <LogoutButton />
            </Router>
        );
        const button = getByText('Log Out');

        fireEvent.click(button);
    });
});
