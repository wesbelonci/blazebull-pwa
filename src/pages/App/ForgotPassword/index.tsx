import * as React from "react";
import {
  Container,
  Button,
  Content,
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
import { FiChevronLeft, FiMail, FiLock } from "react-icons/fi";
import { useToast } from "../../../hooks/ToastContext";
import api from "../../../services/api";

function ForgotPassword() {
  const { formatMessage: f } = useIntl();

  const schema = yup
    .object({
      email: yup
        .string()
        .email(f({ id: "email_is_not_valid" }))
        .required(f({ id: "email_required" })),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });
  const { locale } = useLocale();
  // const location = useLocation();
  // const navigate = useNavigate();
  const { addToast } = useToast();

  React.useEffect(() => {
    if (errors) {
      if (errors.email?.message) {
        const message = errors.email?.message as unknown as string;

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
        await api.post(`/password?email=${data.email}`);

        addToast({
          title: "Check your email",
          type: "success",
        });
      } catch (err) {
        addToast({
          title: "Invalid E-mail or password",
          type: "error",
        });
      }
    },
    [addToast]
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
              <Title>Esqueceu sua senha?</Title>
              <HelpText>Altere sua senha de acesso</HelpText>
            </div>
          </PageTitle>

          <div className="flex flex-wrap flex-col">
            <div className="flex mt-4 px-2">
              <span className="text-sm text-white">
                Para recuperar sua senha, é necessário que informe seu email
                para o envio do código de confirmação...
              </span>
            </div>
            <FormBox id="hook-form" onSubmit={handleSubmit(onSubmit)}>
              <InputBox error={!!errors.email}>
                <FiMail size={30} />
                <input
                  type="text"
                  placeholder={f({ id: "email" })}
                  {...register("email")}
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
            {/* <NeedHelp>
              <span className="text-white font-normal text-sm">
                <FormattedMessage id="need-help" />{" "}
                <strong className="text-red underline">
                  <FormattedMessage id="click-here" />
                </strong>
              </span>
            </NeedHelp> */}
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

export { ForgotPassword };
