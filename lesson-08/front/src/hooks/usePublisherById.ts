import { useEffect, useState } from "react";
import { apiPublisherGetById } from "../api/publisher";
import { Publisher } from "../types/publisher";

interface UsePublisherById {
  data: Publisher.Data | null;
  loading: boolean;
  setId: (id: number) => void;
}

export const usePublisherById = (defaultId?: number): UsePublisherById => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<Publisher.Data | null>(null);
  const [id, setId] = useState<number | undefined>(defaultId);

  useEffect(() => {
    if (id === undefined || isNaN(id)) return;

    setData(null);
    setLoading(true);
    apiPublisherGetById(id)
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
