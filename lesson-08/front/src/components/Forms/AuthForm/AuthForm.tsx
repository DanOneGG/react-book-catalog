import block from "bem-cn";
import React from "react";
import "./AuthForm.css";
import * as Yup from "yup";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";
import { Auth } from "../../../types/auth";
import { AppState } from "../../../store/app/types";
import { InputType } from "../../Input/InputType";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { RootState } from "../../../store/types";
import { appActions } from "../../../store/app/actions";
import { useFormik } from "formik";

interface StateProps {
  loading: boolean;
  errorText: string;
}

interface DispatchProps extends AppState.ActionThunk {}

interface OwnProps {}

type Props = OwnProps & StateProps & DispatchProps;

const b = block("auth-form");

const schema: Yup.SchemaOf<Auth.Login.Params> = Yup.object().shape({
  login: Yup.string().required(),
  password: Yup.string().required(),
});

const AuthFormPresenter: React.FC<Props> = ({ loading, errorText, appLogin }) => {
  const { errors, values, submitForm, handleChange } = useFormik<Auth.Login.Params>({
    initialValues: {
      login: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      await appLogin(fields);
    },
  });

  const handlerSubmit: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    submitForm().catch();
  };

  return (
    <form className={b()}>
      <h1 className={b("title")}>Авторизация</h1>
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
      {!!errorText && <p className={b("error")}>{errorText}</p>}
      <Button text="Войти" onClick={handlerSubmit} disabled={loading} />
      <Button outlined text="Зарегистрироваться" onClick={() => console.log("test 1")} disabled={loading} />
    </form>
  );
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  loading: app.loading,
  errorText: app.errorText,
});

const mapDispatchToProp: MapDispatchToProps<DispatchProps, OwnProps> = { ...appActions };

export const AuthForm = connect(mapStateToProps, mapDispatchToProp)(AuthFormPresenter);
