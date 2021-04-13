import { useEffect, useState } from "react";
import { apiBookGetById } from "../api/book";
import { Book } from "../types/book";

interface UseBookById {
  data: Book.Data | null;
  loading: boolean;
  setId: (id: number) => void;
}

export const useBookById = (defaultId?: number): UseBookById => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Book.Data | null>(null);
  const [id, setId] = useState<number | undefined>(defaultId);

  useEffect(() => {
    if (id === undefined || isNaN(id)) return;

    setData(null);
    setLoading(true);
    apiBookGetById(id)
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
