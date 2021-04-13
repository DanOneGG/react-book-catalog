import { useEffect, useState } from "react";
import { Book } from "../types/book";
import { apiBookGetAll } from "../api/book";

interface UseBookGetAll {
  data: Book.Data[];
  loading: boolean;
  setSearch: (search: string) => void;
}

export const useBookGetAll = (defaultSearch: string = ""): UseBookGetAll => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Book.Data[]>([]);
  const [search, setSearch] = useState<string>(defaultSearch);

  useEffect(() => {
    const params: Book.All.Search = {};

    if (search) {
      params.search = search;
    }

    setLoading(true);
    apiBookGetAll(params)
      .then(setData)
      .catch((err) => {
        console.error(err);
        setData([]);
      })
      .then(() => setLoading(false));
  }, [search]);

  return {
    data,
    loading,
    setSearch,
  };
};
