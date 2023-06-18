import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Main } from "./index";
import { Header } from './style';

describe("Main Page", () => {
    it("Should render Header", () => {
        render(<Main />);

       const headerBackButton = screen.getByRole("button");
       //const BackIcon = headerBackButton.
       userEvent.click(headerBackButton);

       expect(headerBackButton).toBeInTheDocument();
    });
})