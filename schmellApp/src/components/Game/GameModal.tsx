import React, {FC} from 'react';
import {Text, View} from 'react-native';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import paddingStyles from '../../styles/padding.styles';
import textStyles from '../../styles/text.styles';
import widthStyles from '../../styles/width.styles';
import {questionType} from '../../typings/questionTypes';
import {XModalButton} from '../Buttons/IconButtons';
import PlayerInput from '../GameSettings/Components/PlayerInput';
import {Modal, Portal} from 'react-native-paper';

interface ModalProps {
  modalShow: {
    show: boolean;
    modalType: string;
  };
  currentQuestion: questionType;
  handleShow: (modalInfo: {show: boolean; modalType: string}) => void;
}

const ModalContent: FC<ModalProps> = props => {
  const {modalShow, currentQuestion, handleShow} = props;

  const ModalTitle: FC<{title: string}> = ({title}) => (
    <Text
      style={[
        textStyles.text_font_primary,
        textStyles.text_25,
        colorStyles.color_secondary,
        paddingStyles.p_5,
        textStyles.text_center,
      ]}>
      {title}
    </Text>
  );

  if (modalShow.modalType === 'H') {
    return (
      <View style={[layoutStyles.flex_center, widthStyles(0).w_p_100]}>
        <ModalTitle title={currentQuestion?.type} />
        <XModalButton
          onPress={() => handleShow({show: false, modalType: ''})}
        />
        <View style={[paddingStyles.p_10]}>
          <Text
            style={[
              textStyles.text_font_secondary,
              textStyles.text_16,
              colorStyles.color_secondary,
              textStyles.text_center,
              marginStyles.mb_20,
              widthStyles(0).w_max_80,
            ]}>
            {currentQuestion?.hint}
          </Text>
        </View>
      </View>
    );
  } else if (modalShow.modalType === 'P') {
    return (
      <View style={[layoutStyles.flex_center, widthStyles(0).w_p_100]}>
        <ModalTitle title={'Hvem kom forsent?'} />
        <XModalButton
          onPress={() => handleShow({show: false, modalType: ''})}
        />
        <PlayerInput inputPlace="InGame" />
      </View>
    );
  } else {
    return null;
  }
};

const GameModal: FC<ModalProps> = props => {
  const {modalShow, currentQuestion, handleShow} = props;

  return (
    <Portal>
      <Modal
        visible={modalShow.show}
        onDismiss={() => handleShow({show: false, modalType: ''})}
        contentContainerStyle={globalStyles.modalView}
        style={[layoutStyles.flex_center]}>
        <ModalContent
          currentQuestion={currentQuestion}
          modalShow={modalShow}
          handleShow={handleShow}
        />
      </Modal>
    </Portal>
  );
};

export default GameModal;
