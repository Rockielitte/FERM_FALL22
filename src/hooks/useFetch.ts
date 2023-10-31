import axios, { AxiosError } from "axios";
import { method } from "lodash";
import { useState, useEffect, useCallback } from "react";

type Props<T> = {
  url: string;
  method?: string;
  body?: Object;
};

const useFetch = <T = unknown>({ url, method = "GET", body }: Props<T>) => {
  const [isLoading, setisLoading] = useState(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<AxiosError<T, any>>();
  const refecth = useCallback((query?: string) => {
    setisLoading(true);
    axios<T>({
      url: `${url}?${query || ""}`,
      data: body,
      method: method,
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        setData(res.data), setisLoading(false);
      })
      .catch((err) => {
        if (axios.isAxiosError<T>(err)) {
          setError(err);
          setisLoading(false);
        }
      });
  }, []);

  useEffect(() => {
    setisLoading(true);
    axios<T>({
      url: url,
      data: body,
      method: method,
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        setData(res.data), setisLoading(false);
      })
      .catch((err) => {
        if (axios.isAxiosError<T>(err)) {
          setError(err);
          setisLoading(false);
        }
      });
  }, []);

  return { isLoading, data, error, refecth };
};

export default useFetch;
