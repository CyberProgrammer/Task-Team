import React from 'react';
import { render , screen} from '@testing-library/react';
import '@testing-library/jest-dom'
import Navigation from './navigation';
import {BrowserRouter} from "react-router-dom";

jest.mock('@auth0/auth0-react', () => ({
    Auth0Provider: ({ children }: any) => children,
    useAuth0: () => ({
        isAuthenticated: true,
    }),
}));

describe('Navigation', () => {
    test('renders correctly', () => {
        render(
            <BrowserRouter>
                <Navigation />
            </BrowserRouter>
        );

        // Ensure the company logo is rendered
        const companyLogo = screen.getByAltText('logo');
        expect(companyLogo).toBeInTheDocument();

        // Ensure the navigation links are rendered correctly
        const homeLink = screen.queryByText('Home');
        expect(homeLink).not.toBeInTheDocument(); // Assuming it's not rendered on the index page
    });
});