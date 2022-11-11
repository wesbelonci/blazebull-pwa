import React, { useCallback, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormattedMessage } from "react-intl";
import {
  Modal,
  ModalContent,
  Button,
  Form,
  InputContainer,
  CustomSwitch,
  GameActive,
  Container,
} from "./styles";
import { InputMask } from "../../elements/InputMask";
import { useLocale } from "../../../hooks/LocaleContext";
// import { useAuth } from "../../../hooks/AuthContext";
import { useToast } from "../../../hooks/ToastContext";

interface IMarkManagerProps {
  showModal: boolean;
  toggleModal(): void;
  entry: any | null;
}

const MarkManager: React.FC<IMarkManagerProps> = ({
  showModal,
  toggleModal,
  entry,
}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  // const { user } = useAuth();
  const { addToast } = useToast();
  const [colorActive, setColorActive] = useState({
    black: false,
    white: false,
    red: false,
  });
  const [martingale, setMartingale] = useState({
    gale1: false,
    gale2: false,
  });

  const { locale } = useLocale();
  // const { formatMessage: f } = useIntl();

  const schema = yup
    .object({
      red: yup.string(),
      white: yup.string(),
      black: yup.string(),
    })
    .required();

  const { control, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = useCallback(
    (data: any) => {
      const red = parseInt(data.red.replace(/[\D]+/g, ""));
      const black = parseInt(data.black.replace(/[\D]+/g, ""));
      const white = parseInt(data.white.replace(/[\D]+/g, ""));

      if (!red && !black && !white) {
        addToast({
          title: "Informe o valor de pelo menos uma das cores!",
          type: "error",
        });

        return;
      }

      // const formData = {
      //   bet: {
      //     red: red || undefined,
      //     black: black || undefined,
      //     white: white || undefined,
      //     gale1: martingale.gale1,
      //     gale2: martingale.gale2,
      //   },
      //   user_id: user?.id,
      //   round_id: entry?.round_id,
      // };

      toggleModal();
      reset();

      addToast({
        title: "Salvo com sucesso!",
        type: "success",
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [toggleModal, reset, addToast]
  );

  useEffect(() => {
    modalRef.current?.addEventListener("click", (event) => {
      if (event.target === modalRef.current) {
        event.preventDefault();
        reset();
        toggleModal();
      }
    });
  }, [reset, toggleModal]);

  return (
    <Container show={showModal}>
      <Modal ref={modalRef} show={showModal}>
        <ModalContent show={showModal}>
          <Form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
            <div className="w-full px-2">
              <span className="text-sm text-white">
                Selecione a cor apostada:
              </span>

              <div className="flex flex-col w-full justify-between mt-4 px-0 space-y-4">
                <div className="flex justify-start items-center w-full flex-row">
                  <GameActive
                    active={colorActive.red}
                    onClick={() =>
                      setColorActive((oldValue) => {
                        return { ...oldValue, red: !oldValue.red };
                      })
                    }
                  >
                    <img
                      src="/assets/objects/double-red.svg"
                      alt="Red Color"
                      width={40}
                    />
                  </GameActive>
                  <div className="px-4">
                    <InputContainer active={colorActive.red}>
                      <span className="pr-2 font-normal text-md text-white">
                        <FormattedMessage id="currency" />{" "}
                      </span>
                      <InputMask
                        type="text"
                        name="red"
                        label=""
                        control={control}
                        mask={`${
                          locale === "en"
                            ? "money-en"
                            : locale === "pt"
                            ? "money-pt-BR"
                            : "money-en"
                        }`}
                      />
                    </InputContainer>
                  </div>
                </div>

                <div className="flex justify-start items-center w-full flex-row">
                  <GameActive
                    active={colorActive.white}
                    onClick={() =>
                      setColorActive((oldValue) => {
                        return { ...oldValue, white: !oldValue.white };
                      })
                    }
                  >
                    <img
                      src="/assets/objects/double-white.svg"
                      alt="Red Color"
                      width={40}
                    />
                  </GameActive>
                  <div className="px-4">
                    <InputContainer active={colorActive.white}>
                      <span className="pr-2 font-normal text-md text-white">
                        <FormattedMessage id="currency" />{" "}
                      </span>
                      <InputMask
                        type="text"
                        name="white"
                        label=""
                        control={control}
                        mask={`${
                          locale === "en"
                            ? "money-en"
                            : locale === "pt"
                            ? "money-pt-BR"
                            : "money-en"
                        }`}
                      />
                    </InputContainer>
                  </div>
                </div>

                <div className="flex justify-start items-center w-full flex-row">
                  <GameActive
                    active={colorActive.black}
                    onClick={() =>
                      setColorActive((oldValue) => {
                        return { ...oldValue, black: !oldValue.black };
                      })
                    }
                  >
                    <img
                      src="/assets/objects/double-black.svg"
                      alt="Red Color"
                      width={40}
                    />
                  </GameActive>
                  <div className="px-4">
                    <InputContainer active={colorActive.black}>
                      <span className="pr-2 font-normal text-md text-white">
                        <FormattedMessage id="currency" />{" "}
                      </span>
                      <InputMask
                        type="text"
                        name="black"
                        label=""
                        control={control}
                        mask={`${
                          locale === "en"
                            ? "money-en"
                            : locale === "pt"
                            ? "money-pt-BR"
                            : "money-en"
                        }`}
                      />
                    </InputContainer>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mt-6 px-2">
              <span className="text-white text-sm">
                Marque a opção caso tenha entrado no Martingale.
              </span>
            </div>
            <div className="w-full flex flex-row">
              <div className="w-full flex flex-row items-center mt-4">
                <CustomSwitch
                  name="gale1"
                  checked={martingale.gale1}
                  onChange={() =>
                    setMartingale((oldValue) => {
                      return { ...oldValue, gale1: !oldValue.gale1 };
                    })
                  }
                />
                <span className="text-white text-sm">Entrei no 1º</span>
              </div>
              <div className="w-full flex flex-row items-center mt-4">
                <CustomSwitch
                  name="gale2"
                  checked={martingale.gale2}
                  onChange={() =>
                    setMartingale((oldValue) => {
                      return { ...oldValue, gale2: !oldValue.gale2 };
                    })
                  }
                />
                <span className="text-white text-sm">Entrei no 2º</span>
              </div>
            </div>

            <Button
              variant="contained"
              className="mt-4"
              type="submit"
              form="hook-form"
            >
              <div className="flex w-full h-full justify-center items-center">
                <span className="font-semibold text-lg">
                  <FormattedMessage id="save" />
                </span>
              </div>
            </Button>
          </Form>
        </ModalContent>
      </Modal>
    </Container>
  );
};

export { MarkManager };
