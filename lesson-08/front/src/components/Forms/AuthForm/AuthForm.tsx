import block from "bem-cn";
import React, { ChangeEventHandler, MouseEventHandler, useEffect, useRef } from "react";
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
import { browserHistory } from "../../../browserHistory";
import { ButtonType } from "../../Button/ButtonType";

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

const AuthFormPresenter: React.FC<Props> = ({ loading, errorText, appLogin, clearError }) => {
  const refLogin = useRef<HTMLInputElement>(null);
  const refPassword = useRef<HTMLInputElement>(null);

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

  const handlerFieldChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    handleChange(event);
    clearError();
  };

  const handlerSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();
    submitForm().catch();
  };

  useEffect(() => {
    refLogin?.current?.focus();
  }, []);

  return (
    <form className={b()}>
      <h1 className={b("title")}>Авторизация</h1>
      <h2 className={b("subtitle")}>Логин</h2>
      <Input
        ref={refLogin}
        className={b("field")}
        label={"Имя"}
        name={"login"}
        value={values.login}
        onChange={handlerFieldChange}
        onPressEnter={() => refPassword?.current?.focus()}
        error={errors?.login}
        disabled={loading}
      />
      <h2 className={b("subtitle")}>Пароль</h2>
      <Input
        ref={refPassword}
        className={b("field")}
        label={"Пароль"}
        name={"password"}
        htmlType={InputType.Password}
        value={values.password}
        onChange={handlerFieldChange}
        onPressEnter={submitForm}
        error={errors?.password}
        disabled={loading}
      />
      {!!errorText && <p className={b("error")}>{errorText}</p>}
      <Button onClick={handlerSubmit} disabled={loading}>
        Войти
      </Button>
      <Button type={ButtonType.Secondary} onClick={() => browserHistory.push("/registration")} disabled={loading}>
        Зарегистрироваться
      </Button>
    </form>
  );
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  loading: app.loading,
  errorText: app.errorText,
});

const mapDispatchToProp: MapDispatchToProps<DispatchProps, OwnProps> = { ...appActions };

export const AuthForm = connect(mapStateToProps, mapDispatchToProp)(AuthFormPresenter);
