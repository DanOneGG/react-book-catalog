import block from "bem-cn";
import React from "react";
import "./RegistrationForm.css";
import * as Yup from "yup";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";
import { InputType } from "../../Input/InputType";
import { useFormik } from "formik";
import { User } from "../../../types/user";
import { browserHistory } from "../../../browserHistory";
import { apiUserCreate } from "../../../api/user";
import { ButtonType } from "../../Button/ButtonType";

interface Props {}

const b = block("register-form");

const schema: Yup.SchemaOf<User.Create.Params> = Yup.object().shape({
  login: Yup.string().required("Обязательное"),
  email: Yup.string().required("Обязательное").email("Неверный email"),
  password: Yup.string().required("Обязательное"),
  passwordConfirm: Yup.string()
    .required("Обязательное")
    .test("match", "Пароли не совпадают", (value, context) => value === context.parent.password),
});

export const RegistrationForm: React.FC<Props> = () => {
  const [loading, setLoading] = React.useState<boolean>(false);
  const [errorText, setErrorText] = React.useState<string>("");

  const { errors, values, submitForm, handleChange } = useFormik<User.Create.Params>({
    initialValues: {
      login: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      try {
        setLoading(true);
        await apiUserCreate(fields);
        browserHistory.push("/auth");
      } catch (err) {
        setErrorText(err.message);
      } finally {
        setLoading(false);
      }
    },
  });

  const handlerSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    submitForm().catch();
  };

  return (
    <form className={b()}>
      <h1 className={b("title")}>Регистрация</h1>
      <h2 className={b("subtitle")}>Логин</h2>
      <Input
        className={b("field")}
        label={"Имя"}
        name={"login"}
        value={values.login}
        onChange={handleChange}
        error={errors?.login}
        disabled={loading}
      />
      <h2 className={b("subtitle")}>Почта</h2>
      <Input
        className={b("field")}
        label={"Почта"}
        name={"email"}
        value={values.email}
        onChange={handleChange}
        error={errors?.email}
        disabled={loading}
      />
      <h2 className={b("subtitle")}>Пароль</h2>
      <Input
        className={b("field")}
        label={"Пароль"}
        name={"password"}
        htmlType={InputType.Password}
        value={values.password}
        onChange={handleChange}
        error={errors?.password}
        disabled={loading}
      />
      <h2 className={b("subtitle")}>Подтвердите пароль</h2>
      <Input
        className={b("field")}
        label={"Пароль"}
        name={"passwordConfirm"}
        htmlType={InputType.Password}
        value={values.passwordConfirm}
        onChange={handleChange}
        error={errors?.passwordConfirm}
        disabled={loading}
      />
      {!!errorText && <p className={b("error")}>{errorText}</p>}
      <Button onClick={handlerSubmit} disabled={loading} type={ButtonType.Default}>
        Зарегистрироваться
      </Button>
    </form>
  );
};
