// config.js
// Site-wide settings that change from season to season.

export const BOOKING_URL = process.env.REACT_APP_BOOKING_URL;
export const PHONE = process.env.REACT_APP_PHONE;
export const EMAIL = process.env.REACT_APP_EMAIL;

// Seasonal notice shown in a bar above the menu on every page.
// Set `show` to false to hide it, or change `message` for a new notice.
export const SEASON_BANNER = {
  show: true,
  message:
    "Thank you for an amazing 2026 season! We look forward to seeing you again next year.",
};
