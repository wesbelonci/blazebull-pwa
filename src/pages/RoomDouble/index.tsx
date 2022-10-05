import { useEffect, useRef, useCallback } from "react";
import { RoomEntries } from "../../components/modules/Entries";
import { DoubleEntries } from "../../components/modules/GameEntries/Double";
import { useLoading } from "../../hooks/LoadingContext";
import { Layout } from "../../layouts";
import { useWakeLock } from "react-screen-wake-lock";
import { Container, Content, Blaze, Iframe, Divider } from "./styles";

function RoomDouble() {
  const divRef = useRef<HTMLIFrameElement>(null);
  const { released, request, release } = useWakeLock();

  const { setLoadingVisible } = useLoading();

  const lockScreen = useCallback(() => {
    if (released === false) {
      release();
    } else {
      request();
    }
  }, [release, released, request]);

  useEffect(() => {
    setLoadingVisible(true);

    lockScreen();

    setTimeout(() => {
      setLoadingVisible(false);
    }, 2000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Layout>
      <Container>
        <Content>
          <RoomEntries room="double" />
          <Blaze id="blazeFrame">
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
