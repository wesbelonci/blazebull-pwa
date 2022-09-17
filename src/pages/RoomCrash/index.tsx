import { useEffect, useCallback } from "react";
import { RoomEntries } from "../../components/modules/Entries";
import { Layout } from "../../layouts";
import { Container, Content, Blaze } from "./styles";

function RoomCrash() {
  const blockScrollBlaze = useCallback(() => {
    function preventScroll(e: any) {
      e.preventDefault();
      e.stopPropagation();

      return false;
    }

    // document
    //   .querySelector("#blazeFrame")
    //   ?.addEventListener("wheel", preventScroll, { passive: false });

    // document
    //   .querySelector("#blazeFrame")
    //   ?.addEventListener("touchmove", blockScrollBlaze, { passive: false });
  }, []);

  useEffect(() => {
    blockScrollBlaze();
  }, [blockScrollBlaze]);

  return (
    <Layout>
      <Container>
        <Content>
          <RoomEntries room="crash" result={{ win: 98, loss: 2 }} />
          <Blaze
            style={{ overflowY: "hidden" }}
            // ref={ref}
            scrolling="no"
            src="https://blaze.com/en/games/crash"
            frameBorder="0"
          />
          <div style={{ height: 1200 }} className="block"></div>
        </Content>
      </Container>
    </Layout>
  );
}

export { RoomCrash };
