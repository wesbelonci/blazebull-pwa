/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Container,
  Button,
  Content,
  LogoBox,
  FormBox,
  InputBox,
  Divider,
  ForgotPassword,
  KeepConnected,
  CheckBoxField,
  NeedHelp,
} from "./styles";
import { FiUser, FiLock } from "react-icons/fi";
import * as React from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { AnimatedTransictionPage } from "../../../components/modules/AnimatedTransictonPage";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useToast } from "../../../hooks/ToastContext";
import { useAuth } from "../../../hooks/AuthContext";
import { FormattedMessage, useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import { useLocale } from "../../../hooks/LocaleContext";

const schema = yup
  .object({
    email: yup
      .string()
      .email("fill in with a valid e-mail")
      .required("email is required"),
    password: yup.string().required("password is required"),
  })
  .required();

function AuthenticationPage() {
  const [checked, setChecked] = React.useState(true);
  const { addToast } = useToast();
  const { signIn } = useAuth();
  const { formatMessage: f } = useIntl();
  const { locale } = useLocale();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  React.useEffect(() => {
    if (errors) {
      if (errors.email?.message) {
        const message = errors.email?.message as unknown as string;

        addToast({
          title: message,
          type: "error",
        });
      } else if (errors.password?.message) {
        const message = errors.password?.message as unknown as string;

        addToast({
          title: message,
          type: "error",
        });
      }
    }
  }, [addToast, errors]);

  const onSubmit = React.useCallback(
    async (data: any) => {
      try {
        await signIn(data);
        navigate(`/${locale}/home`);
      } catch (err) {
        addToast({
          title: "Invalid E-mail or password",
          type: "error",
        });
      }
    },
    [addToast, locale, navigate, signIn]
  );

  return (
    <AnimatedTransictionPage>
      <Container>
        <Content>
          <LogoBox>
            <img src="/assets/images/logo.svg" alt="Logo Blaze Bull" />
          </LogoBox>
          <FormBox id="hook-form" onSubmit={handleSubmit(onSubmit)}>
            <InputBox error={!!errors.email}>
              <FiUser size={30} />
              <input
                type="text"
                placeholder={f({ id: "email" })}
                {...register("email")}
              />
            </InputBox>
            <Divider />
            <InputBox error={!!errors.password}>
              <FiLock size={30} />
              <input
                type="password"
                placeholder={f({ id: "password" })}
                {...register("password")}
              />
            </InputBox>
          </FormBox>
          <ForgotPassword>
            <span className="font-bold text-md">
              <FormattedMessage id="forgot-password" />
            </span>
          </ForgotPassword>
          <KeepConnected>
            <FormControlLabel
              control={
                <CheckBoxField
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                  name="gilad"
                />
              }
              label={f({ id: "keep-me-connected" })}
            />
          </KeepConnected>
          <Button
            variant="contained"
            className="mt-8"
            type="submit"
            form="hook-form"
          >
            <div className="flex w-full h-full justify-center items-center">
              <span className="font-semibold text-lg">
                <FormattedMessage id="sign-in" />
              </span>
            </div>
          </Button>

          <NeedHelp>
            <span className="text-white font-normal">
              <FormattedMessage id="need-help" />{" "}
              <a href="#" className="text-red underline cursor-pointer">
                <FormattedMessage id="click-here" />
              </a>
            </span>
          </NeedHelp>
        </Content>
      </Container>
    </AnimatedTransictionPage>
  );
}

export { AuthenticationPage };
