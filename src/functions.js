export const url = "http://localhost/api";
export const client_id = 1;

export const dateToFormattedString = (date) => {
  const date_str = date.toISOString().slice(0, 16);
  return date_str;
};

export const formattedStringToDate = (date_str) => {
  const newDate = new Date(date_str);
  console.log("newDate: ", newDate);
  return newDate;
};

export const addDays = (date, days) => {
  const newDate = new Date(date);
  newDate.setDate(date.getDate() + days);
  return newDate;
};
