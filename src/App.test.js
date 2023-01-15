import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import items from './items.json'

test('App loads', () => {
    render(<App />, { wrapper: BrowserRouter })
    expect(screen.getByRole('app')).toBeInTheDocument()
})
test('Home page is loaded', () => {
    render(<App />, { wrapper: BrowserRouter })
    expect(screen.getByRole('home')).toBeInTheDocument()
})
test('User can navigate', () => {
    render(<App />, { wrapper: BrowserRouter })
    const home = screen.getByRole('home-link')
    userEvent.click(home)
    expect(screen.getByRole('home')).toBeInTheDocument()
    // go to shopping
    const shopping = screen.getByRole('shopping-link')
    userEvent.click(shopping)
    expect(screen.getByRole('shopping')).toBeInTheDocument()
    // back to home
    userEvent.click(home)
    // click on a category
    userEvent.click(screen.getByRole('test'))
    expect(screen.getByRole('shopping')).toBeInTheDocument()
    // click on an item
    userEvent.click(screen.getAllByRole('more-info-test')[0])
    expect(screen.getByText(/add to cart/i)).toBeInTheDocument()
})
// test('user can add item to cart', () => {
//     render(<App />, { wrapper: BrowserRouter })
// })
test('user can add item to cart', () => {
    render(<App />, {wrapper : BrowserRouter})
    const shopping = screen.getByRole('shopping-link')
    userEvent.click(shopping)
    userEvent.click(screen.getAllByRole('more-info-test')[0])
    expect(screen.getByText(/add to cart/i)).toBeInTheDocument()
    userEvent.click(screen.getByText(/add to cart/i))
    userEvent.click(screen.getByRole('shopping-cart'))
    expect(screen.getByRole('shop-list')).toBeInTheDocument()
})