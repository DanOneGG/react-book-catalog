import block from "bem-cn";
import React, { useCallback, useMemo } from "react";
import { browserHistory } from "../../browserHistory";
import { Button } from "../../components/Button/Button";
import { ButtonType } from "../../components/Button/ButtonType";
import { Card } from "../../components/Card/Card";
import { Spinner } from "../../components/Spinner/Spinner";
import { BasePageProps } from "../../types/base";
import "./GenrePage.css";
import { useGenreById } from "../../hooks/useGenreById";

interface Props extends BasePageProps<{ id: string }> {}

const b = block("genre-page");

export const GenrePage: React.FC<Props> = ({ match }) => {
  const id = useMemo<number>(() => +match.params.id, [match]);
  const { data, loading } = useGenreById(id);

  const button = useCallback(
    () =>
      data ? (
        <Button type={ButtonType.Secondary} onClick={() => browserHistory.push(`/ref/genres/${data.id}/edit`)}>
          Редактировать
        </Button>
      ) : null,
    [data]
  );

  return (
    <Card title={data ? `Жанр ${data?.name}` : ""} rightElement={button} className={b()}>
      {loading ? <Spinner size={32} /> : <pre>{JSON.stringify(data)}</pre>}
    </Card>
  );
};
