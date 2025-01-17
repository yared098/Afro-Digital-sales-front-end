// src/config/constants.js

// Data Source Configuration (Can be Firebase, MongoDB, MySQL, API, etc.)
export const DATA_SOURCE = process.env.REACT_APP_DATA_SOURCE || 'firebase'; // Default to Firebase

// Authentication Mechanism (Can be Firebase, Google, etc.)
export const AUTH_MECHANISM = process.env.REACT_APP_AUTH_MECHANISM || 'firebase'; // Default to Firebase
