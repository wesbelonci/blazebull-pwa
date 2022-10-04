import { Layout } from "../../layouts";
import {
  Container,
  Content,
  Rooms,
  Crash,
  Double,
  RoomStats,
  RoomStatsWin,
  RoomStatsLoss,
  Badge,
  Title,
  Rate,
  DividerStats,
  Live,
} from "./styles";
import { FiArrowUp, FiArrowDown } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import { useCrashGame } from "../../hooks/CrashGameContext";
import { useDoubleGame } from "../../hooks/DoubleGameContext";
// import { FormattedMessage, useIntl } from "react-intl";

function HomePage() {
  const navigate = useNavigate();
  const { lang } = useParams();
  const { daily: dataCrash } = useCrashGame();
  const { daily: dataDouble } = useDoubleGame();

  return (
    <Layout>
      <Container>
        <Content>
          <Rooms>
            <span>Salas de sinais</span>
            <Crash onClick={() => navigate(`/${lang}/room-crash`)}>
              <Live>
                <span>Ao vivo</span>
              </Live>
              <RoomStats>
                <div className="flex w-auto h-auto flex-row items-center justify-center">
                  <RoomStatsWin>
                    <span>Win</span>
                    <FiArrowUp size={15} />
                    <Badge type="win" className="badge">
                      {dataCrash.win}
                    </Badge>
                  </RoomStatsWin>
                  <DividerStats>
                    <span>x</span>
                  </DividerStats>
                  <RoomStatsLoss>
                    <Badge type="loss" className="badge">
                      {dataCrash.loss}
                    </Badge>
                    <FiArrowDown size={15} />
                    <span>Loss</span>
                  </RoomStatsLoss>
                </div>
                <div className="text-white mt-1">
                  <span>Nas últimas 24h</span>
                </div>
                <Title className="flex items-center h-20">
                  <span className="text-2xl">Sala Crash</span>
                </Title>
                <Rate className="">
                  <span>Taxa de acertos:</span>
                  <span className="text-lime-green">
                    <strong className="text-lime-green font-bold">
                      {dataCrash.win === 0
                        ? 0
                        : Number(
                            ((dataCrash.loss / dataCrash.win) * 100 - 100) * -1
                          ).toFixed(2)}
                      %
                    </strong>
                  </span>
                </Rate>
              </RoomStats>
            </Crash>
            <Double onClick={() => navigate(`/${lang}/room-double`)}>
              <Live>
                <span>Ao vivo</span>
              </Live>
              <RoomStats>
                <div className="flex w-auto h-auto flex-row items-center justify-center">
                  <RoomStatsWin>
                    <span>Win</span>
                    <FiArrowUp size={15} />
                    <Badge type="win" className="badge">
                      {dataDouble.win}
                    </Badge>
                  </RoomStatsWin>
                  <DividerStats>
                    <span>x</span>
                  </DividerStats>
                  <RoomStatsLoss>
                    <Badge type="loss" className="badge">
                      {dataDouble.loss}
                    </Badge>
                    <FiArrowDown size={15} />
                    <span>Loss</span>
                  </RoomStatsLoss>
                </div>
                <div className="text-white mt-1">
                  <span>Nas últimas 24h</span>
                </div>
                <Title className="flex items-center h-20">
                  <span className="text-2xl">Sala Double</span>
                </Title>
                <Rate className="">
                  <span>Taxa de acertos:</span>
                  <span className="text-lime-green">
                    <strong className="text-lime-green font-bold">
                      {dataDouble.win === 0
                        ? 0
                        : Number(
                            ((dataDouble.loss / dataDouble.win) * 100 - 100) *
                              -1
                          ).toFixed(2)}
                      %
                    </strong>
                  </span>
                </Rate>
              </RoomStats>
            </Double>
          </Rooms>
        </Content>
      </Container>
    </Layout>
  );
}

export { HomePage };
