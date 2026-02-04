import React from 'react';
import { render, screen } from '@testing-library/react';
import { describe, test, expect } from '@rstest/core';
import TableList from '../tableList';

describe('TableList', () => {
    test('renders correctly with default data', () => {
        render(<TableList />);
        expect(screen.getByText('John Brown')).toBeInTheDocument();
        expect(screen.getByText('Jim Green')).toBeInTheDocument();
    });

    test('renders children', () => {
        render(<TableList><div>Table Child</div></TableList>);
        expect(screen.getByText('Table Child')).toBeInTheDocument();
    });

    test('renders custom data', () => {
        const customData = [
            {
                key: '1',
                name: 'Custom User',
                age: 25,
                address: 'Custom Address',
                tags: ['custom'],
            },
        ];
        render(<TableList data={customData} />);
        expect(screen.getByText('Custom User')).toBeInTheDocument();
    });
});
