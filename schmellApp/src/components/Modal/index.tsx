import React, {FC, ReactNode} from 'react';
import {KeyboardAvoidingView, View} from 'react-native';
import {Modal, Portal} from 'react-native-paper';
import {modalShowType} from '../../types/common';
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
      <KeyboardAvoidingView
        behavior="padding"
        style={modalStyles.keyboardAvoidingView}>
        <View style={modalStyles.innerContainer}>{children}</View>
      </KeyboardAvoidingView>
    </Modal>
  </Portal>
);

export default SchmellModal;
