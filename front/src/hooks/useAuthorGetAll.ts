import { useEffect, useState } from "react";
import { Author } from "../types/author";
import { apiAuthorGetAll } from "../api/author";
import { Publisher } from "../types/publisher";

interface UseAuthorGetAll {
  data: Author.Data[];
  loading: boolean;
  setSearch: (search: string) => void;
}

export const useAuthorGetAll = (defaultSearch: string = ""): UseAuthorGetAll => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Author.Data[]>([]);
  const [search, setSearch] = useState<string>(defaultSearch);

  useEffect(() => {
    const params: Publisher.All.Search = {};

    if (search) {
      params.search = search;
    }

    setLoading(true);
    apiAuthorGetAll(params)
      .then(setData)
      .catch(console.error)
      .then(() => setLoading(false));
  }, [search]);

  return {
    data,
    loading,
    setSearch,
  };
};
