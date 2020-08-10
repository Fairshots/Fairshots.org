import React from "react";
import { Modal, ModalBody } from "reactstrap";

const ReusableModal = ({ Component, size, show, setShow }) => (
    <Modal isOpen={show} toggle={() => setShow(!show)} size={size}>
        <ModalBody>
            <Component />
        </ModalBody>
    </Modal>
);

export default ReusableModal;
