import React, {FC} from 'react';
import {Modal, Text, View} from 'react-native';
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

interface ModalProps {
  modalShow: {
    show: boolean;
    modalType: string;
  };
  currentQuestion: questionType;
  handleShow: (modalInfo: {show: boolean; modalType: string}) => void;
}

const ModalWrapper: FC = ({children}) => (
  <View style={[layoutStyles.flex_1, layoutStyles.flex_center]}>
    <View style={globalStyles.modalView}>{children}</View>
  </View>
);

const ModalContent: FC<ModalProps> = props => {
  const {modalShow, currentQuestion, handleShow} = props;

  const ModalTitle: FC<{title: string}> = ({title}) => (
    <Text
      style={[
        textStyles.text_font_primary,
        textStyles.text_25,
        colorStyles.color_secondary,
        paddingStyles.p_5,
        marginStyles.m_hor_auto,
        marginStyles.m_hor_14,
      ]}>
      {title}
    </Text>
  );

  if (modalShow.modalType === 'H') {
    return (
      <View style={[layoutStyles.flex_column, layoutStyles.flex_center]}>
        <View
          style={[
            layoutStyles.flex_row,
            layoutStyles.align_center,
            marginStyles.mb_10,
            widthStyles(400).w_min_custom,
          ]}>
          <Text style={[colorStyles.color_primary, marginStyles.mr_auto]}>
            text
          </Text>
          <ModalTitle title={currentQuestion?.type} />
          <XModalButton
            onPress={() => handleShow({show: false, modalType: ''})}
          />
        </View>
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
      <View
        style={[
          layoutStyles.flex_column,
          layoutStyles.flex_center,
          paddingStyles.pb_20,
        ]}>
        <View
          style={[
            layoutStyles.flex_row,
            layoutStyles.align_center,
            marginStyles.mb_10,
            widthStyles(400).w_min_custom,
          ]}>
          <Text style={[colorStyles.color_primary, marginStyles.mr_auto]}>
            text
          </Text>
          <ModalTitle title={'Hvem kom forsent?'} />
          <XModalButton
            onPress={() => handleShow({show: false, modalType: ''})}
          />
        </View>
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
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalShow.show}
      onRequestClose={() => handleShow({show: false, modalType: ''})}
      supportedOrientations={['landscape']}>
      <ModalWrapper>
        <ModalContent
          currentQuestion={currentQuestion}
          modalShow={modalShow}
          handleShow={handleShow}
        />
      </ModalWrapper>
    </Modal>
  );
};

export default GameModal;
