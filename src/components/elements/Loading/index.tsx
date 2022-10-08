import { useLoading } from "../../../hooks/LoadingContext";
import { Container, Content, LogoBox, LoadingBox } from "./styles";
import Stack from "@mui/material/Stack";
import CircularProgress from "@mui/material/CircularProgress";

function Loading() {
  const { isLoading } = useLoading();
  return (
    <Container show={isLoading}>
      <Content>
        <LogoBox>
          <img src="/assets/images/logo.svg" alt="Logo Blaze Bull" />
        </LogoBox>
        <LoadingBox>
          <Stack sx={{ color: "grey.500" }} spacing={2} direction="row">
            <CircularProgress color="red" />
          </Stack>
        </LoadingBox>
        <div className="flex w-full justify-center mt-60 fixed bottom-10 left-0">
          <span className="font-light text-md text-dark-grey-three">
            Blaze Bull - 2022
          </span>
        </div>
      </Content>
    </Container>
  );
}

export { Loading };
