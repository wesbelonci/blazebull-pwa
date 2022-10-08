import { useCallback, useEffect, useRef } from "react";
import { RoomEntries } from "../../components/modules/Entries";
import { CrashEntries } from "../../components/modules/GameEntries/Crash";
import { Layout } from "../../layouts";
import { useWakeLock } from "react-screen-wake-lock";
import { Container, Content, Blaze, Iframe, Divider } from "./styles";

function RoomCrash() {
  const divRef = useRef<HTMLIFrameElement>(null);

  const { isSupported, released, request, release } = useWakeLock();

  const lockScreen = useCallback(() => {
    if (isSupported) {
      if (released === false) {
        release();
      } else {
        request();
      }
    }
  }, [release, isSupported, request, released]);

  useEffect(() => {
    if (!released) {
      lockScreen();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [released]);

  return (
    <Layout>
      <Container>
        <Content>
          <RoomEntries room="crash" />
          <Blaze id="blazeFrame">
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
