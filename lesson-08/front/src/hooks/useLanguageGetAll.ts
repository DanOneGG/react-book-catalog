import { useEffect, useState } from "react";
import { apiLanguageGetAll } from "../api/language";
import { Language } from "../types/language";
import { Publisher } from "../types/publisher";

interface UseLanguageGetAll {
  data: Language.Data[];
  loading: boolean;
  setSearch: (search: string) => void;
}

export const useLanguageGetAll = (defaultSearch: string = ""): UseLanguageGetAll => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Language.Data[]>([]);
  const [search, setSearch] = useState<string>(defaultSearch);

  useEffect(() => {
    const params: Publisher.All.Search = {};

    if (search) {
      params.search = search;
    }

    setLoading(true);
    apiLanguageGetAll(params)
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
