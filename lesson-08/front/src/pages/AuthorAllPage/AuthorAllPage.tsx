import block from "bem-cn";
import { debounce } from "lodash";
import React, { ChangeEventHandler, useCallback } from "react";
import { Link } from "react-router-dom";
import { Card } from "../../components/Card/Card";
import { Input } from "../../components/Input/Input";
import { Spinner } from "../../components/Spinner/Spinner";
import { BasePageProps } from "../../types/base";
import "./AuthorAllPage.css";
import { useAuthorGetAll } from "../../hooks/useAuthorGetAll";

interface Props extends BasePageProps {}

const b = block("author-all-page");

export const AuthorAllPage: React.FC<Props> = () => {
  const { data, loading, setSearch } = useAuthorGetAll();

  const handlerChange = useCallback<ChangeEventHandler<HTMLInputElement>>(
    (event) => {
      setSearch(event.target.value);
    },
    [setSearch]
  );

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debounceHandlerChange = useCallback(debounce(handlerChange, 500), [handlerChange]);

  return (
    <Card title={"Авторы"} className={b()}>
      <div className={b("content")}>
        <Input name={"search"} placeholder={"Поиск"} onChange={debounceHandlerChange} />
        {loading && <Spinner size={32} />}
        <h3>Результаты поиска:</h3>
        {data.length > 0 ? (
          <ul className={b("list")}>
            {data.map((item) => (
              <li key={item.id}>
                <Link to={`/ref/authors/${item.id}`}>{item.name}</Link>
              </li>
            ))}
          </ul>
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
    </Card>
  );
};
