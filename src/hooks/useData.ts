import { isCancel } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

interface FetchResponse<T> {
  count: number;
  results: T[];
}
const useData = <T>(endpoint: string) => {
  const [data, setDatas] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);
    apiClient
      .get<FetchResponse<T>>(endpoint, { signal: controller.signal })
      .then((res) => {
        setDatas(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (isCancel(err)) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort();
  }, [endpoint]);
  return {
    data,
    error,
    isLoading,
    setLoading,
    setDatas,
    setError,
  };
};
export default useData;
