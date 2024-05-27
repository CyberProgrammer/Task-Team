import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import NavigationButton from './NavigationButton.tsx';

describe('NavigationButton Component', () => {
    test('renders NavigationButton with provided props', () => {
        render(<NavigationButton icon={"icon.png"} isSelected={false} text="Button Text" setSelectedSection={jest.fn()} />);

        expect(screen.getByAltText('icon')).toHaveAttribute('src', 'icon.png');
        expect(screen.getByText('Button Text')).toBeInTheDocument();
    });

    test('applies selected class when isSelected is true', () => {
        render(<NavigationButton icon="icon.png" isSelected={true} text="Button Text" setSelectedSection={jest.fn()} />);

        expect(screen.getByRole('button')).toHaveClass('selected');
    });

    test('calls setSelectedSection with text when clicked', () => {
        const mockSetSelectedSection = jest.fn();
        render(<NavigationButton icon="icon.png" isSelected={false} text="Button Text" setSelectedSection={mockSetSelectedSection} />);

        fireEvent.click(screen.getByRole('button'));
        expect(mockSetSelectedSection).toHaveBeenCalledWith('Button Text');
    });
});
