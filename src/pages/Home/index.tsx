import { useEffect } from "react";
import { useLoading } from "../../hooks/LoadingContext";
import { Layout } from "../../layouts";
import {
  Container,
  Content,
  Blaze,
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
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();
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
          <Rooms>
            <span>Salas de sinais</span>
            <Crash onClick={() => navigate("/room-crash")}>
              <Live>
                <span>Ao vivo</span>
              </Live>
              <RoomStats>
                <div className="flex w-auto h-auto flex-row items-center justify-center">
                  <RoomStatsWin>
                    <span>Win</span>
                    <FiArrowUp size={15} />
                    <Badge type="win" className="badge">
                      98
                    </Badge>
                  </RoomStatsWin>
                  <DividerStats>
                    <span>x</span>
                  </DividerStats>
                  <RoomStatsLoss>
                    <Badge type="loss" className="badge">
                      2
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
                    <strong className="text-lime-green font-bold">98%</strong>
                  </span>
                </Rate>
              </RoomStats>
            </Crash>
            <Double onClick={() => navigate("/room-double")}>
              <Live>
                <span>Ao vivo</span>
              </Live>
              <RoomStats>
                <div className="flex w-auto h-auto flex-row items-center justify-center">
                  <RoomStatsWin>
                    <span>Win</span>
                    <FiArrowUp size={15} />
                    <Badge type="win" className="badge">
                      98
                    </Badge>
                  </RoomStatsWin>
                  <DividerStats>
                    <span>x</span>
                  </DividerStats>
                  <RoomStatsLoss>
                    <Badge type="loss" className="badge">
                      2
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
                    <strong className="text-lime-green font-bold">98%</strong>
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
