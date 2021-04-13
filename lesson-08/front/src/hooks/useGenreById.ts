import { useEffect, useState } from "react";
import { Genre } from "../types/genre";
import { apiGenreGetById } from "../api/genre";

interface UseGenreById {
  data: Genre.Data | null;
  loading: boolean;
  setId: (id: number) => void;
}

export const useGenreById = (defaultId?: number): UseGenreById => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Genre.Data | null>(null);
  const [id, setId] = useState<number | undefined>(defaultId);

  useEffect(() => {
    if (id === undefined || isNaN(id)) return;

    setData(null);
    setLoading(true);
    apiGenreGetById(id)
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
