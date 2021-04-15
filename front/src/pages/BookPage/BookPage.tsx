import block from "bem-cn";
import React, { useCallback, useMemo } from "react";
import { browserHistory } from "../../browserHistory";
import { Button } from "../../components/Button/Button";
import { ButtonType } from "../../components/Button/ButtonType";
import { Card } from "../../components/Card/Card";
import { Spinner } from "../../components/Spinner/Spinner";
import { BasePageProps } from "../../types/base";
import "./BookPage.css";
import { useBookById } from "../../hooks/useBookById";

interface Props extends BasePageProps<{ id: string }> {}

const b = block("book-page");

export const BookPage: React.FC<Props> = ({ match }) => {
  const id = useMemo<number>(() => +match.params.id, [match]);
  const { data, loading } = useBookById(id);

  const button = useCallback(
    () =>
      data ? (
        <Button type={ButtonType.Secondary} onClick={() => browserHistory.push(`/ref/books/${data.id}/edit`)}>
          Редактировать
        </Button>
      ) : null,
    [data]
  );

  return (
    <Card title={data ? `Книга ${data?.title}` : ""} rightElement={button} className={b()}>
      {loading ? <Spinner size={32} /> : <pre>{JSON.stringify(data)}</pre>}
    </Card>
  );
};
