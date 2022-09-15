import { useEffect } from "react";
import { useLoading } from "../../hooks/LoadingContext";
import { Layout } from "../../layouts";
import { Container, Content, Blaze } from "./styles";

function HomePage() {
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
        {/* <Content>
          <Blaze
            id="iframeTeste"
            // ref={ref}
            scrolling="no"
            src="https://blaze.com/en/games/double"
            frameBorder="0"
          />
        </Content> */}
      </Container>
    </Layout>
  );
}

export { HomePage };
