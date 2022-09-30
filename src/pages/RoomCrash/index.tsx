import { useEffect, useRef } from "react";
import { RoomEntries } from "../../components/modules/Entries";
import { CrashEntries } from "../../components/modules/GameEntries/Crash";
import { useLoading } from "../../hooks/LoadingContext";
import { Layout } from "../../layouts";
import { Container, Content, Blaze, Iframe, Divider } from "./styles";

function RoomCrash() {
  const divRef = useRef<HTMLIFrameElement>(null);

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
          <RoomEntries room="crash" />
          <Blaze id="blazeFrame" onWheel={() => console.log("teste")}>
            <Iframe
              ref={divRef}
              id="testeIframe"
              scrolling="no"
              src="https://blaze.com/en/games/crash"
              frameBorder="0"
            />
          </Blaze>
          <Divider />
          <CrashEntries />
        </Content>
      </Container>
    </Layout>
  );
}

export { RoomCrash };
