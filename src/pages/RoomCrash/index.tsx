import { useEffect, useCallback, useRef } from "react";
import { RoomEntries } from "../../components/modules/Entries";
import { useLoading } from "../../hooks/LoadingContext";
import { Layout } from "../../layouts";
import { Container, Content, Blaze, Iframe } from "./styles";

function RoomCrash() {
  const { setLoadingVisible } = useLoading();

  useEffect(() => {
    setLoadingVisible(true);

    setTimeout(() => {
      setLoadingVisible(false);
    }, 2000);
  }, [setLoadingVisible]);

  return (
    <Layout>
      <Container>
        <Content>
          <RoomEntries room="crash" result={{ win: 98, loss: 2 }} />
          <Blaze id="blazeFrame" onWheel={() => console.log("teste")}>
            <Iframe
              scrolling="no"
              src="https://blaze.com/en/games/crash"
              frameBorder="0"
            />
          </Blaze>
          <div style={{ height: 800 }} className="block"></div>
        </Content>
      </Container>
    </Layout>
  );
}

export { RoomCrash };
