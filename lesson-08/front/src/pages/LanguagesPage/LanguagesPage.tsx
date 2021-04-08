import block from "bem-cn";
import React from "react";
import "./LanguagesPage.css";
import { apiLanguageGetAll } from "../../api/language";
import { Language } from "../../types/language";
import { Spinner } from "../../components/Spinner/Spinner";

interface Props {}

const b = block("languages-page");

export const LanguagesPage: React.FC<Props> = () => {
  const [data, setData] = React.useState<Language.Data[]>([]);

  React.useEffect(() => {
    const getData = async () => {
      const response = await apiLanguageGetAll();
      setData(response);
    };
    getData();
  }, []);

  return (
    <div className={b()}>
      <h1>Языки</h1>
      {data ? data.map((item, index) => <p key={index}>{item.name}</p>) : <Spinner />}
    </div>
  );
};
