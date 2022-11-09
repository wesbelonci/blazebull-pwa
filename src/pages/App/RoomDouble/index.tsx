import { useEffect, useRef, useCallback, useState } from "react";
import { RoomEntries } from "../../../components/modules/Entries";
import { DoubleEntries } from "../../../components/modules/GameEntries/Double";
import { Layout } from "../../../layouts/app";
import { useWakeLock } from "react-screen-wake-lock";
import { Container, Content, Blaze, Iframe, Divider } from "./styles";
import { MarkManager } from "../../../components/modules/MarkManager";

function RoomDouble() {
  const divRef = useRef<HTMLIFrameElement>(null);
  const [modalManagerIsVisible, setModalManagerIsVisible] = useState(false);
  const [entry, setEntry] = useState(null);
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

  const selectEntryManager = useCallback((data: any) => {
    setModalManagerIsVisible(true);
    setEntry(data);
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
          <DoubleEntries selectEntry={selectEntryManager} />
          <MarkManager
            showModal={modalManagerIsVisible}
            entry={entry}
            toggleModal={() => setModalManagerIsVisible(false)}
          />
        </Content>
      </Container>
    </Layout>
  );
}

export { RoomDouble };
