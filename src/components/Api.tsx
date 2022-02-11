import axios from "axios";

export const BASE_URL = "https://testherokujohn.herokuapp.com/api/";
export const UNITS_URL = "UNIT";

export const getData = (url) => {
    axios.get(url).then((response) => console.log(response.data.data));
};

export const getUnits = getData(BASE_URL + UNITS_URL);


