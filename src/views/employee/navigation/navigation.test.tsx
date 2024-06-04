import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import Navigation from './navigation.tsx';
import {Constants} from "../utils/constants.ts";

describe('EmployeeNavigation', () => {
    test('renders correctly', () => {
        const setSelectedSectionMock = jest.fn();

        render(
            <Navigation
                selectedSection={"Test"}
                setSelectedSection={setSelectedSectionMock}
            />);

        // Assert that navigation buttons are rendered
        expect(screen.getByText(Constants.DASHBOARD)).toBeInTheDocument();
        expect(screen.getByText(Constants.TASKS)).toBeInTheDocument();
        expect(screen.getByText(Constants.TEAMS)).toBeInTheDocument();
        expect(screen.getByText(Constants.PROGRESS)).toBeInTheDocument();
        expect(screen.getByText(Constants.HISTORY)).toBeInTheDocument();
        expect(screen.getByText(Constants.SETTINGS)).toBeInTheDocument();
    })
})

