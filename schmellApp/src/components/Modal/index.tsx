import React, {FC, ReactNode} from 'react';
import {Modal, Portal} from 'react-native-paper';
import {modalShowType} from '../../typings/common';
import modalStyles from './style';

interface ModalProps {
  modalShow: modalShowType;
  handleShow: () => void;
  children: ReactNode;
}

const SchmellModal: FC<ModalProps> = ({children, handleShow, modalShow}) => (
  <Portal>
    <Modal
      visible={modalShow.show}
      onDismiss={handleShow}
      contentContainerStyle={modalStyles.container}
      style={modalStyles.content}>
      {children}
    </Modal>
  </Portal>
);

export default SchmellModal;
