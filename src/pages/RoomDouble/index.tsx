import { useEffect, useRef } from "react";
import { RoomEntries } from "../../components/modules/Entries";
import { DoubleEntries } from "../../components/modules/GameEntries/Double";
import { useLoading } from "../../hooks/LoadingContext";
// import { useSocketDouble } from "../../hooks/SocketDoubleContext";
import { Layout } from "../../layouts";
import { Container, Content, Blaze, Iframe, Divider } from "./styles";

function RoomDouble() {
  const divRef = useRef<HTMLIFrameElement>(null);
  // const {message} = useSocketDouble()

  const { setLoadingVisible } = useLoading();

  useEffect(() => {
    setLoadingVisible(true);

    setTimeout(() => {
      setLoadingVisible(false);
    }, 2000);
  }, [setLoadingVisible]);

  // console.log()

  return (
    <Layout>
      <Container>
        <Content>
          <RoomEntries room="double" />
          <Blaze id="blazeFrame" onWheel={() => console.log("teste")}>
            <Iframe
              ref={divRef}
              id="testeIframe"
              scrolling="no"
              src="https://blaze.com/en/games/double"
              frameBorder="0"
            />
          </Blaze>
          <Divider />
          <DoubleEntries />
        </Content>
      </Container>
    </Layout>
  );
}

export { RoomDouble };
