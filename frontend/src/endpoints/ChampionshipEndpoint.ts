import Championship from "../types/Championship";
import http from "./http";
import {AxiosResponse} from "axios";
import {delay} from "./Sleep";

const getAll = async (): Promise<Championship[]> => {
    //await delay(100000);
    let result: AxiosResponse = await http.get("/championship/list");
    return result.data;

};




export default {getAll};

