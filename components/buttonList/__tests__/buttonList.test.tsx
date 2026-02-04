import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from '@rstest/core';
import ButtonList from '../buttonList';

describe('ButtonList', () => {
    test('renders correctly', () => {
        render(<ButtonList />);
        expect(screen.getByText(/This is Button List/i)).toBeInTheDocument();
        expect(screen.getByText('Primary Button')).toBeInTheDocument();
    });

    test('renders with type prop', () => {
        render(<ButtonList type="primary" />);
        expect(screen.getByText(/This is Button List \[primary\]/i)).toBeInTheDocument();
    });

    test('renders children', () => {
        render(<ButtonList><div>Child Content</div></ButtonList>);
        expect(screen.getByText('Child Content')).toBeInTheDocument();
    });
});
