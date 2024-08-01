import axios from "axios";
import { rootUrl } from "./App";

const Http = axios.create({
  baseURL: rootUrl,
});

export default Http;