import { Container, Button, Content, NeedHelp } from "./styles";
import { Link } from "react-router-dom";
import { AnimatedTransictionPage } from "../../components/modules/AnimatedTransictonPage";
// import { FiArrowRight } from "react-icons/fi";

function InitialAccessPage() {
  return (
    <AnimatedTransictionPage>
      <Container>
        <Content>
          <div className="flex flex-wrap flex-col md:flex-row"></div>
          <NeedHelp>
            <span className="text-white font-normal text-sm">
              Precisa de ajuda?{" "}
              <strong className="text-red underline">Clique aqui</strong>
            </span>
          </NeedHelp>
          <Link to="/authentication">
            <Button variant="contained">
              <div className="flex w-full h-full justify-center items-center">
                <span className="font-bold text-lg">Entrar</span>
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
              Blaze Bull - 2022
            </span>
          </div>
        </Content>
      </Container>
    </AnimatedTransictionPage>
  );
}

export { InitialAccessPage };
