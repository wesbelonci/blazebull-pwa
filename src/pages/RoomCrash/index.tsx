import { RoomEntries } from "../../components/modules/Entries";
import { Layout } from "../../layouts";
import { Container, Content, Blaze } from "./styles";

function RoomCrash() {
  return (
    <Layout>
      <Container>
        <Content>
          <RoomEntries room="crash" result={{ win: 98, loss: 2 }} />
          <Blaze
            // ref={ref}
            scrolling="no"
            src="https://blaze.com/en/games/crash"
            frameBorder="0"
          />
        </Content>
      </Container>
    </Layout>
  );
}

export { RoomCrash };
