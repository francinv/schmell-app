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
import PlayerInput from '../GameSettings/PlayerInput';
import {Modal, Portal} from 'react-native-paper';
import {useSelector} from 'react-redux';
import {selectLanguage} from '../../features/selectors';
import useLocale from '../../hooks/useLocale';
import useHint from '../../hooks/useHint';

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
  const lang = useSelector(selectLanguage);
  const modalTitle = useLocale(lang, 'GAME_PLAYER_INPUT') as string;
  const isSvv = currentQuestion?.type === 'Skal vi vedde?';
  const modalPunishmentInformation = useLocale(
    lang,
    'GAME_HINT_INFORMATION',
  ) as string;
  const questionHint = useHint(currentQuestion.type);

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
            {questionHint}
          </Text>
          <Text
            style={[
              textStyles.text_font_secondary,
              textStyles.text_16,
              colorStyles.color_secondary,
              textStyles.text_center,
              marginStyles.mb_20,
              widthStyles(0).w_max_80,
            ]}>
            {isSvv ? null : modalPunishmentInformation}
          </Text>
        </View>
      </View>
    );
  } else if (modalShow.modalType === 'P') {
    return (
      <View style={[layoutStyles.flex_center, widthStyles(0).w_p_100]}>
        <ModalTitle title={modalTitle} />
        <XModalButton
          onPress={() => handleShow({show: false, modalType: ''})}
        />
        <PlayerInput
          inputPlace="InGame"
          buttonText={''}
          setButtonText={() => console.log('must ignore')}
        />
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
