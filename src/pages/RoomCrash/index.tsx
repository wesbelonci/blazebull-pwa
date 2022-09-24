import { useEffect, useRef } from "react";
import { RoomEntries } from "../../components/modules/Entries";
import { useLoading } from "../../hooks/LoadingContext";
import { Layout } from "../../layouts";
import { Container, Content, Blaze, Iframe } from "./styles";

function RoomCrash() {
  const divRef = useRef<HTMLIFrameElement>(null);
  // const [count, setCount] = useState(0);
  // const { setLoadingVisible } = useLoading();

  // useEffect(() => {
  //   console.log(iframe);
  //   setCount((oldValue) => oldValue + 1);
  // }, [iframe, count]);

  // useEffect(() => {
  //   let counter = count;
  //   const iframe = divRef.current;

  //   const interval = setInterval(() => {
  //     // console.log(typeof iframe);
  //     // const teste = localStorage.getItem("ACCESS_TOKEN");

  //     // console.log(teste);
  //     console.log(iframe?.contentWindow?.localStorage);
  //     setCount((count) => count + 1);
  //     counter++;
  //   }, 3000);

  //   return () => clearInterval(interval);
  // }, [count]);

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
              ref={divRef}
              id="testeIframe"
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
