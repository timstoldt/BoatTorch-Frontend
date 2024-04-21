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

export const put = async (route, data) => {
    const requestOptions = {
        method: "PUT",
        body: data,
    };

    try {
        const response = await fetch(`${url + route}`, requestOptions);
        const result = await response.json();
        console.log(result);

    } catch (error) {
        console.error(error);
    }
}

export const get = async (route) => {
    const requestOptions = {
        method: "GET",
    };

    try {
        const response = await fetch(`${url + route}`, requestOptions);
        const result = await response.json();
        return result;

    } catch (error) {
        console.error(error);
        return
    }
}