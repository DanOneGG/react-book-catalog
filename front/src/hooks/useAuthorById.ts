import { useEffect, useState } from "react";
import { apiAuthorGetById } from "../api/author";
import { Author } from "../types/author";

interface UseAuthorById {
  data: Author.Data | null;
  loading: boolean;
  setId: (id: number) => void;
}

export const useAuthorById = (defaultId?: number): UseAuthorById => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Author.Data | null>(null);
  const [id, setId] = useState<number | undefined>(defaultId);

  useEffect(() => {
    if (id === undefined || isNaN(id)) return;

    setData(null);
    setLoading(true);
    apiAuthorGetById(id)
      .then(setData)
      .catch(console.error)
      .then(() => setLoading(false));
  }, [id]);

  return {
    data,
    loading,
    setId,
  };
};
