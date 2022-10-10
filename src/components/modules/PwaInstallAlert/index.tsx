import React, { useCallback } from "react";
import { Modal, ModalContent, Button } from "./styles";
import { usePwaInstallHomeScreen } from "../../../hooks/PwaInstallHomeScreen";
import { FormattedMessage } from "react-intl";

const PwaInstallAlert: React.FC = () => {
  const { promptable, promptToInstall, isInstalled } =
    usePwaInstallHomeScreen();
  const modalRef = React.useRef<HTMLDivElement>(null);
  const [visible, setVisible] = React.useState(false);

  const OpenAndCloseModal = React.useCallback(() => {
    setVisible(!visible);

    modalRef.current?.addEventListener("click", (event) => {
      if (event.target === modalRef.current) {
        event.preventDefault();
        setVisible(false);
      }
    });
  }, [visible]);

  React.useEffect(() => {
    if (!!promptable && !isInstalled) {
      OpenAndCloseModal();
    }
  }, [promptable, isInstalled, OpenAndCloseModal]);

  console.log(promptable, isInstalled);

  const installApp = useCallback(() => {
    setVisible(!visible);
    promptToInstall();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [visible, promptToInstall]);

  return (
    <Modal ref={modalRef} show={visible}>
      <ModalContent show={visible}>
        <span className="text-white text-center">
          <FormattedMessage id="instalation-pwa" />
        </span>
        <Button variant="contained" className="mt-4" onClick={installApp}>
          <div className="flex w-full h-full justify-center items-center">
            <span className="font-semibold text-lg">
              <FormattedMessage id="install" />
            </span>
          </div>
        </Button>
      </ModalContent>
    </Modal>
  );
};

export { PwaInstallAlert };
