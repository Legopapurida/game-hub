import axios, { AxiosRequestConfig } from "axios";

export interface FetchResponse<T> {
  count: number;
  next: string | null;
  results: T[];
}

const axiosIntance = axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "4464e755dd87486190b95a9202866432",
  },
});

export default class APIClient<T> {
  constructor(private endpoint: string) {}

  public getAll = (config: AxiosRequestConfig) => {
    return axiosIntance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };
  public get = (id: number | string) => {
    return axiosIntance
      .get<T>(this.endpoint + "/" + id)
      .then((res) => res.data);
  };
}
