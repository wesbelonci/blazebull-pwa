import React, { useCallback, useState, useRef } from "react";
import { Layout } from "../../layouts";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FormattedMessage, useIntl } from "react-intl";
import {
  Container,
  Content,
  BankInfo,
  BankInfoText,
  BankInfoValue,
  BankEditButton,
  Modal,
  ModalContent,
  Form,
  InputContainer,
  Button,
  ManagerContainer,
} from "./styles";
import { FiEdit } from "react-icons/fi";
import { InputMask } from "../../components/elements/InputMask";
import { useLocale } from "../../hooks/LocaleContext";
import { useBank } from "../../hooks/BankContext";
import { useToast } from "../../hooks/ToastContext";

function BankManagerPage() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const { formatMessage: f } = useIntl();
  const { locale } = useLocale();
  const { updateBank, bank } = useBank();
  const { addToast } = useToast();

  const schema = yup
    .object({
      value: yup
        .string()
        .required(`${f({ id: "value" })} ${f({ id: "is-required" })}`),
    })
    .required();

  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  React.useEffect(() => {
    if (errors) {
      if (errors.value?.message) {
        const message = errors.value?.message as unknown as string;
        addToast({ type: "error", title: message });
      }
    }
  }, [addToast, errors]);

  const onSubmit = useCallback((data: any) => {
    const currency = parseInt(data.value.replace(/[\D]+/g, ""));

    updateBank(currency);
    setModalIsVisible(false);
    reset();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const OpenModalAndInput = useCallback(() => {
    setModalIsVisible(!modalIsVisible);

    modalRef.current?.addEventListener("click", (event) => {
      if (event.target === modalRef.current) {
        event.preventDefault();
        setModalIsVisible(false);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [modalIsVisible, onSubmit, handleSubmit]);

  return (
    <Layout>
      <Container>
        <Content>
          <div className="flex flex-row px-8 justify-center space-x-2 mt-6">
            <BankInfo className="space-x-2">
              <BankInfoText className="text-lg">
                <FormattedMessage id="total-bankroll" />
              </BankInfoText>
              <BankInfoValue className="text-lg">
                <FormattedMessage id="currency" />{" "}
                {bank?.total
                  ? new Intl.NumberFormat(
                      locale === "en"
                        ? "en-US"
                        : locale === "pt"
                        ? "pt-BR"
                        : "es-ES"
                    ).format(bank.total)
                  : "0"}
              </BankInfoValue>
            </BankInfo>
            <BankEditButton onClick={OpenModalAndInput}>
              <FiEdit size={24} />
            </BankEditButton>
          </div>
          <ManagerContainer className="mt-10 py-6">
            <span className="text-white font-normal text-2xl">
              <FormattedMessage id="win-loss-manager" />
              {/* Gerenciador de <strong className="text-lime-green">Win</strong> e{" "}
              <strong className="text-red">Loss</strong> */}
            </span>

            <div className="bg-separator rounded-md mt-6 px-8 py-2">
              <span className="text-lime-green font-semibold text-xl">
                <FormattedMessage id="bank-of-the-day" />:{" "}
                <strong className="text-white font-light">
                  <FormattedMessage id="currency" />{" "}
                  {bank?.total
                    ? new Intl.NumberFormat(
                        locale === "en"
                          ? "en-US"
                          : locale === "pt"
                          ? "pt-BR"
                          : "es-ES"
                      ).format(bank.total * 0.1)
                    : "0"}
                  {/* {Number(bank?.total ? bank.total * 0.1 : 0).toFixed(2)} */}
                </strong>
              </span>
            </div>
            <div className="flex flex-col justify-start mt-10 w-full h-full px-4">
              <div className="flex flex-row space-x-2 justify-start w-full">
                <span className="text-lime-green text-2xl font-normal">
                  Stop Win
                </span>
                <img
                  src="/assets/objects/checkmark-circle-green.svg"
                  alt="Green"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex w-full justify-end h-auto mt-2">
                <span className="text-sm text-lime-green mr-2  mb-1">
                  15% <FormattedMessage id="from-the-bank" />
                </span>
              </div>
              <div className="bg-separator flex flex-row items-center w-full h-10 rounded-md px-2">
                <span className="text-white text-xl mr-2">
                  <FormattedMessage id="stop-when-profit" />:{" "}
                </span>
                <span className="text-lime-green text-xl mr-2">
                  <FormattedMessage id="currency" />{" "}
                  {bank?.stop_win
                    ? new Intl.NumberFormat(
                        locale === "en"
                          ? "en-US"
                          : locale === "pt"
                          ? "pt-BR"
                          : "es-ES"
                      ).format(bank.stop_win)
                    : "0"}
                  {/* {bank?.stop_win
                    ? Number(bank?.stop_win ? bank.stop_win : 0).toFixed(2)
                    : "0"} */}
                </span>
              </div>
            </div>

            <div className="flex flex-col justify-start mt-10 w-full h-full px-4">
              <div className="flex flex-row space-x-2 justify-start w-full">
                <span className="text-red text-2xl font-normal">Stop Loss</span>
                <img
                  src="/assets/objects/checkmark-circle-red.svg"
                  alt="Green"
                  width={24}
                  height={24}
                />
              </div>
              <div className="flex w-full justify-end h-auto mt-2 mb-1">
                <span className="text-sm text-red mr-2">
                  10% <FormattedMessage id="from-the-bank" />
                </span>
              </div>
              <div className="bg-separator flex flex-row items-center w-full h-10 rounded-md px-2">
                <span className="text-white text-xl mr-2">
                  <FormattedMessage id="stop-when-lose" />:{" "}
                </span>
                <span className="text-red text-xl mr-2">
                  <FormattedMessage id="currency" />{" "}
                  {bank?.stop_loss
                    ? new Intl.NumberFormat(
                        locale === "en"
                          ? "en-US"
                          : locale === "pt"
                          ? "pt-BR"
                          : "es-ES"
                      ).format(bank.stop_loss)
                    : "0"}
                  {/* {bank?.stop_win
                    ? Number(bank?.stop_loss ? bank.stop_loss : 0).toFixed(2)
                    : "0"} */}
                </span>
              </div>
            </div>

            <div className="flex w-full justify-center items-center flex-col mt-12">
              <span className="text-white text-xl font-normal">
                <FormattedMessage id="entries-recommendation" />:
              </span>
              <div className="flex w-full justify-center px-8">
                <div className="flex w-full bg-separator justify-center mt-2 py-2 rounded-md">
                  <span className="text-white text-3xl">
                    <FormattedMessage id="currency" />{" "}
                    {bank?.total
                      ? new Intl.NumberFormat(
                          locale === "en"
                            ? "en-US"
                            : locale === "pt"
                            ? "pt-BR"
                            : "es-ES"
                        ).format(bank.total * 0.01)
                      : "0"}
                    {/* {Number(bank?.total ? bank.total * 0.01 : 0).toFixed(2)} */}
                  </span>
                </div>
              </div>
            </div>
          </ManagerContainer>
        </Content>
        <Modal ref={modalRef} show={modalIsVisible}>
          <ModalContent show={modalIsVisible}>
            <Form id="hook-form" onSubmit={handleSubmit(onSubmit)}>
              <InputContainer>
                <span className="pr-2 font-semibold text-lg text-white">
                  <FormattedMessage id="currency" />{" "}
                </span>
                <InputMask
                  autoFocus
                  type="text"
                  name="value"
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
            </Form>
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
          </ModalContent>
        </Modal>
      </Container>
    </Layout>
  );
}

export { BankManagerPage };
