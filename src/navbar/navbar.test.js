import React from 'react';
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import { Navbar } from './navbar';

describe('Navbar Module', function () {
    test('Navbar renders correctly', () => {
        const route = `#/example`;
        const title = 'Example';
        const links = [{href: route, title}];
        render(<Navbar links={links} />);
        expect(screen.queryByText(title)).toHaveAttribute('href', route);
    });
});