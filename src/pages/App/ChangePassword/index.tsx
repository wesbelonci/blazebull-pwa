import * as React from "react";
import {
  Container,
  Button,
  Content,
  NeedHelp,
  Header,
  PageTitle,
  HelpText,
  Title,
  FormBox,
  InputBox,
} from "./styles";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AnimatedTransictionPage } from "../../../components/modules/AnimatedTransictonPage";
import { FormattedMessage, useIntl } from "react-intl";
import { useLocale } from "../../../hooks/LocaleContext";
import { FiChevronLeft, FiLock } from "react-icons/fi";

const schema = yup
  .object({
    password: yup
      .string()
      .required("password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    password_confirm: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("password is required"),
  })
  .required();

function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { locale } = useLocale();
  const { formatMessage: f } = useIntl();

  const onSubmit = React.useCallback(async (data: any) => {
    try {
      // await signIn(data);
      // navigate(`/${locale}/home`);
    } catch (err) {
      // addToast({
      //   title: "Invalid E-mail or password",
      //   type: "error",
      // });
    }
  }, []);

  return (
    <AnimatedTransictionPage>
      <Container>
        <Header>
          <Link to={`/${locale}/`}>
            <FiChevronLeft size={25} />
          </Link>
        </Header>
        <Content>
          <PageTitle>
            <div className="flex w-2/12 justify-center">
              <FiLock size={40} />
            </div>
            <div className="w-10/12">
              <Title>Crie uma senha!</Title>
              <HelpText>Digite uma senha para acessar a Blaze Bulls.</HelpText>
            </div>
          </PageTitle>

          <div className="flex flex-wrap flex-col md:flex-row">
            <FormBox id="hook-form" onSubmit={handleSubmit(onSubmit)}>
              <InputBox error={!!errors.email}>
                <FiLock size={30} />
                <input
                  type="text"
                  placeholder={f({ id: "password" })}
                  {...register("password")}
                />
              </InputBox>
              <InputBox error={!!errors.password} className="mt-4">
                <FiLock size={30} />
                <input
                  type="password"
                  placeholder={f({ id: "password_confirm" })}
                  {...register("password_confirm")}
                />
              </InputBox>
            </FormBox>
          </div>

          <Button variant="contained" className="mt-4">
            <div className="flex w-full h-full justify-center items-center">
              <span className="font-bold text-lg">
                <FormattedMessage id="send" />
              </span>
            </div>
          </Button>

          <div className="flex w-full h-auto absolute bottom-8 left-0 flex-col">
            <NeedHelp>
              <span className="text-white font-normal text-sm">
                <FormattedMessage id="need-help" />{" "}
                <strong className="text-red underline">
                  <FormattedMessage id="click-here" />
                </strong>
              </span>
            </NeedHelp>
            <div className="flex w-full justify-center mt-8">
              <span className=" font-light text-md text-dark-grey-three">
                Blaze Bulls - 2022
              </span>
            </div>
          </div>
        </Content>
      </Container>
    </AnimatedTransictionPage>
  );
}

export { ChangePassword };
