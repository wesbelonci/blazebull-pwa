/* eslint-disable jsx-a11y/iframe-has-title */
import { useEffect, useRef } from "react";
import { Layout } from "../../layouts";

function HomePage() {
  const ref = useRef<HTMLIFrameElement>(
    null
  ) as React.MutableRefObject<HTMLIFrameElement>;

  const doc = ref.current?.contentWindow?.document;

  useEffect(() => {
    console.log(doc);
  }, [doc]);

  return (
    <Layout>
      <iframe
        ref={ref}
        id="blaze"
        style={{ height: "600px" }}
        scrolling="no"
        src="https://blaze.com/en/games/crash"
        frameBorder="0"
      />
    </Layout>
  );
}

export { HomePage };
