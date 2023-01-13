import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import App from "./App";
import { BrowserRouter, MemoryRouter } from "react-router-dom";

test('App loads', () => {
    render(<App />, {wrapper: BrowserRouter})
    expect(screen.getByRole('app')).toBeInTheDocument()
})
test('Home page is loaded', () => {
    render(<App />, {wrapper : BrowserRouter})
    expect(screen.getByRole('home')).toBeInTheDocument()
})
test('User can click on shopping page', () => {
    render(<App />, {wrapper: BrowserRouter})
    const home = screen.getByRole('home-link')
    userEvent.click(home)
    expect(screen.getByRole('home')).toBeInTheDocument()

    const shopping = screen.getByRole('shopping-link')
    userEvent.click(shopping)
    expect(screen.getByRole('shopping')).toBeInTheDocument()
})