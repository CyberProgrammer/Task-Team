import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import LoginButton from './LoginButton';

// Mock the Auth0Provider component
jest.mock('@auth0/auth0-react', () => ({
    Auth0Provider: ({ children }: any) => children,
    useAuth0: () => ({
        loginWithRedirect: jest.fn(),
    }),
}));

describe('LoginButton Component', () => {
    test('Login button should render with class name', () => {
        const { getByText } = render(<LoginButton />);
        const button = getByText('Log In');
        expect(button).toBeInTheDocument();
        expect(button).toHaveClass('primaryButton');
    })

    test('Login button should be clickable', () => {
        const { getByText } = render(<LoginButton />);
        const button = getByText('Log In');

        fireEvent.click(button);
    })
})