import { Layout } from "../../../layouts/app";
import { Container, Content, Button } from "./styles";
import { FiMessageCircle } from "react-icons/fi";
import { FormattedMessage } from "react-intl";

function Support() {
  return (
    <Layout>
      <Container>
        <Content>
          <div className="flex w-full justify-center flex-col">
            <span className="text-white">Entre em contato pelo Telegram</span>

            <div className="">
              <a href="https://t.me/blazebullsoficial">
                <Button variant="contained" className="mt-4" type="submit">
                  <div className="flex w-full h-full justify-center items-center">
                    <FiMessageCircle size={20} />
                    <span className="font-bold text-lg">
                      <FormattedMessage id="speak-now" />
                    </span>
                  </div>
                </Button>
              </a>
            </div>
          </div>
        </Content>
      </Container>
    </Layout>
  );
}

export { Support };
