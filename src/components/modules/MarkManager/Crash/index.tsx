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
  Container,
} from "./styles";
import { InputMask } from "../../../elements/InputMask";
import { useLocale } from "../../../../hooks/LocaleContext";
import { useAuth } from "../../../../hooks/AuthContext";
import { useToast } from "../../../../hooks/ToastContext";
import api from "../../../../services/api";
import { useDoubleGame } from "../../../../hooks/DoubleGameContext";

interface IMarkManagerProps {
  showModal: boolean;
  toggleModal(): void;
  entry: any | null;
}

const CrashMarkManager: React.FC<IMarkManagerProps> = ({
  showModal,
  toggleModal,
  entry,
}) => {
  const modalRef = React.useRef<HTMLDivElement>(null);
  const { user } = useAuth();
  const { addToast } = useToast();
  const { updateDoubleData } = useDoubleGame();

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
    async (data: any) => {
      const amount = parseInt(data.amount.replace(/[\D]+/g, ""));

      if (!amount) {
        addToast({
          title: "Informe o valor apostado!",
          type: "error",
        });

        return;
      }

      const formData = {
        bet: {
          crash_point: 2,
          amount: amount,
          martingale1: martingale.gale1,
          martingale2: martingale.gale2,
        },
        user_id: user?.id,
        round_id: entry?.round_id,
      };

      try {
        await api.post("/entries", formData);

        addToast({
          title: "Salvo com sucesso!",
          type: "success",
        });

        toggleModal();
        reset();
        updateDoubleData();
      } catch (err: any) {
        if (err.response.data.message === "Entry already added") {
          addToast({
            title: "Entrada já adicionada",
            type: "error",
          });

          return;
        }

        addToast({
          title: "Ocorreu um erro ao Salvar a entrada",
          type: "error",
        });
      }

      // eslint-disable-next-line react-hooks/exhaustive-deps
    },
    [
      martingale.gale1,
      martingale.gale2,
      user?.id,
      entry?.round_id,
      addToast,
      toggleModal,
      reset,
      updateDoubleData,
    ]
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
                Digite o valor apostado:
              </span>

              <div className="flex flex-col w-full justify-center mt-4 px-0 space-y-4">
                <div className="flex justify-start items-center w-full flex-row">
                  <div className="px-4">
                    <InputContainer>
                      <span className="pr-2 font-normal text-md text-white">
                        <FormattedMessage id="currency" />{" "}
                      </span>
                      <InputMask
                        type="text"
                        name="amount"
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

export { CrashMarkManager };
