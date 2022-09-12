/* eslint-disable jsx-a11y/iframe-has-title */
// import { useState } from "react";
// import { useRef } from "react";
import { Layout } from "../../layouts";
import { Container, Content, Blaze } from "./styles";

function HomePage() {
  return (
    <Layout>
      <Container>
        <Content>
          <Blaze
            id="iframeTeste"
            // ref={ref}
            scrolling="no"
            src="https://blaze.com/en/games/double"
            frameBorder="0"
          />
          {/* <button onClick={() => setCount(count + 1)}>Clique aqui</button> */}
        </Content>
      </Container>
    </Layout>
  );
}

export { HomePage };
