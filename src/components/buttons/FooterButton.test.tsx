import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FooterButton from './FooterButton';

describe('FooterButton', () => {
    test('renders footer button', () => {
        render(<FooterButton icon={"icon.png"} setSelectedSection={jest.fn()} text={"Button Text"}/>);

        expect(screen.getByAltText("Button Text")).toHaveAttribute('src', 'icon.png');
    })

    test('calls handleClick when footer button is clicked', () => {
        const mockSetSelectedSection = jest.fn();
        render(<FooterButton icon={"icon.png"} setSelectedSection={mockSetSelectedSection} text={"Button Text"}/>)

        fireEvent.click(screen.getByRole('button'));
        expect(mockSetSelectedSection).toHaveBeenCalledWith('Button Text')
    })
})
