import axios from "axios";
import { BASE_URL } from "../config/config";

 export const myAxios=axios.create({baseURL:BASE_URL});