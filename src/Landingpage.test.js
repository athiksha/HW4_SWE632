// LandingPage.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for expect(...).toBeInTheDocument()

import LandingPage from './LandingPage'; // Adjust the path based on your file structure

test('renders LandingPage component without crashing', () => {
  render(<LandingPage />);
});

test('clicking on "Add Homework" option changes selected option', () => {
    const { getByText } = render(<LandingPage />);
    fireEvent.click(getByText('For Professor - Add Homework'));
    expect(getByText('Add Homework')).toBeInTheDocument();
  });
  

  test('submitting the form for "Add Homework" updates formSubmissions state', () => {
    const { getByText, getByLabelText } = render(<LandingPage />);
    fireEvent.click(getByText('For Professor - Add Homework'));
    
    // Fill out the form fields
    fireEvent.change(getByLabelText('Name'), { target: { value: 'Homework 1' } });
    fireEvent.change(getByLabelText('Course Name'), { target: { value: 'Math' } });
    
    // Submit the form
    fireEvent.click(getByText('Submit')); // Adjust this line based on your submit button text
    
    // Check if the form submissions state is updated correctly
    expect(getByLabelText('Name')).toHaveValue('');
    expect(getByLabelText('Course Name')).toHaveValue('');
  });

  
  