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
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { AnimatedTransictionPage } from "../../../components/modules/AnimatedTransictonPage";
import { FormattedMessage, useIntl } from "react-intl";
import { useLocale } from "../../../hooks/LocaleContext";
import { FiChevronLeft, FiLock } from "react-icons/fi";
import { useToast } from "../../../hooks/ToastContext";
import api from "../../../services/api";

const schema = yup
  .object({
    password: yup
      .string()
      .required("password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed more than 12 characters"),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords do not match")
      .required("password confirmation is required"),
  })
  .required();

function ChangePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { locale } = useLocale();
  const location = useLocation();
  const navigate = useNavigate();
  const { formatMessage: f } = useIntl();
  const { addToast } = useToast();

  const useQuery = (search = location.search) => {
    return React.useMemo(() => new URLSearchParams(search), [search]);
  };

  const query = useQuery();

  const token = query.get("token");

  React.useEffect(() => {
    if (errors) {
      if (errors.password?.message) {
        const message = errors.password?.message as unknown as string;

        addToast({
          title: message,
          type: "error",
        });
      } else if (errors.password_confirmation?.message) {
        const message = errors.password_confirmation
          ?.message as unknown as string;

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
        await api.post(`/password/${token}`, {
          password: data.password,
          password_confirmation: data.password_confirmation,
        });

        addToast({
          title: "Successfully updated",
          type: "success",
        });

        setTimeout(() => {
          navigate(`/${locale}/authentication`);
        }, 2000);
      } catch (err) {
        addToast({
          title: "Invalid E-mail or password",
          type: "error",
        });
      }
    },
    [addToast, locale, navigate, token]
  );

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
              <InputBox error={!!errors.password}>
                <FiLock size={30} />
                <input
                  type="password"
                  placeholder={f({ id: "password" })}
                  {...register("password")}
                />
              </InputBox>
              <InputBox error={!!errors.password_confirmation} className="mt-4">
                <FiLock size={30} />
                <input
                  type="password"
                  placeholder={f({ id: "password_confirmation" })}
                  {...register("password_confirmation")}
                />
              </InputBox>
            </FormBox>
          </div>

          <Button
            variant="contained"
            className="mt-4"
            type="submit"
            form="hook-form"
          >
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
