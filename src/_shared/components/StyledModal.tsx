import { Modal, Button, Message, useToaster } from "rsuite";
import RemindIcon from "@rsuite/icons/legacy/Remind";
import { auth } from "../services/fireBase";
import { sendEmail } from "../services/mailService";
import { useMemo } from "react";

interface Props {
  handleClose: () => void;
  open: boolean;
}

export default function StyledModal({ handleClose, open }: Props) {
  const toaster = useToaster();

  const message = useMemo(() => {
    return (
      <Message showIcon type={"success"} closable>
        Email Successfully Sent
      </Message>
    );
  }, []);

  const errorMsg = useMemo(() => {
    return (
      <Message showIcon type={"error"} closable>
        Unable To Send Mail
      </Message>
    );
  }, []);

  const handleSent = () => {
    if (auth.currentUser) {
      const data = {
        to_name: auth.currentUser.displayName,
        message: "Protecting the environment",
        reply_to: "gracywiredu@gmail.com",
        mail_to: auth.currentUser.email,
      };
      sendEmail(
        data,
        () => toaster.push(message, { placement: "topEnd", duration: 5000 }),
        () => toaster.push(errorMsg, { placement: "topEnd", duration: 5000 })
      );
    }
    handleClose();
  };

  return (
    <>
      <Modal
        backdrop="static"
        role="alertdialog"
        open={open}
        onClose={handleClose}
        size="xs"
      >
        <Modal.Body>
          <RemindIcon style={{ color: "#ffb300", fontSize: 24 }} />
          Once a project is disabled, there will be no update on project report,
          and project members can access history data only. Are you sure you
          want to proceed ?
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose} appearance="subtle">
            Cancel
          </Button>
          <Button onClick={handleSent} appearance="primary">
            Send It
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
