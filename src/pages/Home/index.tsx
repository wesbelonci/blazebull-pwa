/* eslint-disable jsx-a11y/iframe-has-title */
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Layout } from "../../layouts";

function HomePage() {
  const ref = useRef<HTMLIFrameElement>(null);
  const [count, setCount] = useState(0);

  // const doc = ref.current?.contentWindow?.document;
  const teste = ref.current?.contentWindow?.document.body;

  useEffect(() => {
    console.log(count);
    // console.log(document.getElementById("mobile-nav"));
    let iframe = document.getElementById("iframeTeste") as HTMLIFrameElement;
    let innerDoc = iframe?.contentDocument || iframe.contentWindow?.document;

    console.log(innerDoc?.getElementById("mobile-nav"));
    console.log(iframe.contentWindow?.document);
    console.log(iframe?.contentDocument);
    // console.log(teste);
    // console.log(
    //   ref.current?.contentWindow?.document.getElementById("mobile-nav")
    // );

    // console.log(iframe.conten)

    // console.log(ref.current);
    // console.log(ref.current?.contentWindow);
    // console.log(doc);
    // console.log(document.getElementById("mobile-nav"));
    // console.log(ref.current?.contentWindow?.document);
    // console.log(ref.current);
    // console.log(doc);
    // console.log(document.getElementById("mobile-nav"));
    // const teste = ref.current?.contentWindow;
    // const iframe = document.getElementById("myIframe");
    // console.log(teste?.document.getElementsByTagName("mobile-nav")[0]);
    // console.log(iframe);
    // console.log(doc);
    // console.log(document.getElementById("mobile-nav"));
  }, [count, teste]);

  return (
    <Layout>
      <iframe
        id="iframeTeste"
        // ref={ref}
        style={{ height: "600px" }}
        scrolling="no"
        src="https://blaze.com/en/games/double"
        frameBorder="0"
      />
      <button onClick={() => setCount(count + 1)}>Clique aqui</button>
    </Layout>
  );
}

export { HomePage };
