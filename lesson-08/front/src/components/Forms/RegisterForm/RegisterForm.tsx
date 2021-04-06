import block from "bem-cn";
import React from "react";
import "./RegisterForm.css";
import * as Yup from "yup";
import { Input } from "../../Input/Input";
import { Button } from "../../Button/Button";
import { AppState } from "../../../store/app/types";
import { InputType } from "../../Input/InputType";
import { connect, MapDispatchToProps, MapStateToProps } from "react-redux";
import { RootState } from "../../../store/types";
import { appActions } from "../../../store/app/actions";
import { useFormik } from "formik";
import { User } from "../../../types/user";

interface StateProps {
  loading: boolean;
  errorText: string;
}

interface DispatchProps extends AppState.ActionThunk {}

interface OwnProps {}

type Props = OwnProps & StateProps & DispatchProps;

const b = block("register-form");

const schema: Yup.SchemaOf<User.Create.Params> = Yup.object().shape({
  login: Yup.string().required(),
  email: Yup.string().required().email(),
  password: Yup.string().required(),
  passwordConfirm: Yup.string().required(),
});

const RegisterFormPresenter: React.FC<Props> = ({ loading, errorText, appRegister }) => {
  const { errors, values, submitForm, handleChange } = useFormik<User.Create.Params>({
    initialValues: {
      login: "",
      email: "",
      password: "",
      passwordConfirm: "",
    },
    validationSchema: schema,
    onSubmit: async (fields) => {
      await appRegister(fields);
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
      <Button text="Зарегистрироваться" onClick={handlerSubmit} disabled={loading} />
    </form>
  );
};

const mapStateToProps: MapStateToProps<StateProps, OwnProps, RootState.State> = ({ app }) => ({
  loading: app.loading,
  errorText: app.errorText,
});

const mapDispatchToProp: MapDispatchToProps<DispatchProps, OwnProps> = { ...appActions };

export const RegisterForm = connect(mapStateToProps, mapDispatchToProp)(RegisterFormPresenter);
