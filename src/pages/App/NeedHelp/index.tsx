import {
  Container,
  Button,
  Content,
  Header,
  PageTitle,
  Title,
  HelpText,
} from "./styles";
import { Link } from "react-router-dom";
import { AnimatedTransictionPage } from "../../../components/modules/AnimatedTransictonPage";
import { FormattedMessage } from "react-intl";
import { FiChevronLeft, FiMessageCircle } from "react-icons/fi";
import { IoLogoWhatsapp } from "react-icons/io5";
import { useLocale } from "../../../hooks/LocaleContext";
import { PwaInstallAlert } from "../../../components/modules/PwaInstallAlert";

function NeedHelp() {
  const { locale } = useLocale();

  return (
    <AnimatedTransictionPage>
      <PwaInstallAlert />
      <Container>
        <Header>
          <Link to={`/${locale}/`}>
            <FiChevronLeft size={25} />
          </Link>
        </Header>
        <Content>
          <PageTitle>
            <div className="flex w-2/12 justify-center">
              <FiMessageCircle size={40} />
            </div>
            <div className="w-10/12">
              <Title>Precisa de ajuda?</Title>
              <HelpText>Entre em contato agora mesmo pelo WhatsApp</HelpText>
            </div>
          </PageTitle>

          <div className="px-4">
            <a href="https://api.whatsapp.com/send?phone=5566996594962&text=Preciso%20de%20suporte%20no%20aplicativo%20Blaze%20Bulls">
              <Button variant="contained" className="mt-4" type="submit">
                <div className="flex w-full h-full justify-center items-center">
                  <IoLogoWhatsapp size={20} />
                  <span className="font-bold text-lg">
                    <FormattedMessage id="speak-now" />
                  </span>
                </div>
              </Button>
            </a>
          </div>
          <div className="flex w-full h-auto absolute bottom-8 left-0 flex-col">
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

export { NeedHelp };
