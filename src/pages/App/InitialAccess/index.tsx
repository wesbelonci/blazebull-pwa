import { Container, Button, Content, NeedHelp } from "./styles";
import { Link } from "react-router-dom";
import { AnimatedTransictionPage } from "../../../components/modules/AnimatedTransictonPage";
import { FormattedMessage } from "react-intl";
import { useLocale } from "../../../hooks/LocaleContext";
import { PwaInstallAlert } from "../../../components/modules/PwaInstallAlert";

function InitialAccessPage() {
  const { locale } = useLocale();

  return (
    <AnimatedTransictionPage>
      <PwaInstallAlert />
      <Container>
        <Content>
          <div className="flex flex-wrap flex-col md:flex-row"></div>
          <NeedHelp>
            <span className="text-white font-normal text-sm">
              <FormattedMessage id="need-help" />{" "}
              <Link
                to={`/${locale}/need-help`}
                className="text-red underline cursor-pointer"
              >
                <FormattedMessage id="click-here" />
              </Link>
            </span>
          </NeedHelp>
          <Link to={`/${locale}/authentication`}>
            <Button variant="contained">
              <div className="flex w-full h-full justify-center items-center">
                <span className="font-bold text-lg">
                  <FormattedMessage id="sign-in" />
                </span>
              </div>
            </Button>
          </Link>

          {/* <Button variant="contained" className="mt-4">
            <div className="flex w-full h-full justify-center items-center">
              <span className="font-semibold text-lg">Primeiro Acesso</span>
            </div>
          </Button> */}
          <div className="flex w-full justify-center mt-8">
            <span className=" font-light text-md text-dark-grey-three">
              Blaze Bulls - 2022
            </span>
          </div>
        </Content>
      </Container>
    </AnimatedTransictionPage>
  );
}

export { InitialAccessPage };
