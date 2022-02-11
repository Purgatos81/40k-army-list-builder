import axios from "axios";

export const BASE_URL: any = "https://testherokujohn.herokuapp.com/api/";
export const UNITS_URL: any = "units";


export const getData = (url: string) => {
    axios.get(url).then((response) => console.log(response.data.data));
};

export const getUnits = getData(BASE_URL + UNITS_URL );


