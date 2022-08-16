import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {XIconModal} from '../../assets/icons/XIcon';
import IconButton from '../../components/Buttons/IconButton';
import PlayerInput from '../../components/Forms/PlayerInput';
import SchmellModal from '../../components/Modal';
import ModalTitle from '../../components/Styled/ModalTitle';
import {selectLanguage} from '../../features/selectors';
import useHint from '../../hooks/useHint';
import useLocale from '../../hooks/useLocale';
import {carouselType, modalShowType} from '../../typings/common';
import gamePlayStyles from './style';

interface GameModalProps {
  carouselState: carouselType;
  handleShow: () => void;
  modalShow: modalShowType;
}

interface ModalContentProps {
  currentType: string;
}

const GameModal: FC<GameModalProps> = props => {
  const {carouselState, handleShow, modalShow} = props;

  const currentQuestion =
    carouselState.questionList[carouselState.currentQuestionIndex];
  const isTypeHint = modalShow.modalType === 'H';

  return (
    <SchmellModal handleShow={handleShow} modalShow={modalShow}>
      <ModalTitle title={currentQuestion?.type} />
      <IconButton
        handlePress={handleShow}
        wantShadow={false}
        additionalStyling={gamePlayStyles.modalButton}>
        <XIconModal />
      </IconButton>
      <View style={gamePlayStyles.modalContentContainer}>
        {isTypeHint ? (
          <HintContent currentType={currentQuestion?.type} />
        ) : (
          <PlayerInput inputPlace="InGame" />
        )}
      </View>
    </SchmellModal>
  );
};

const HintContent: FC<ModalContentProps> = ({currentType}) => {
  const questionHint = useHint(currentType);
  const isNotSkalViVedde = currentType !== 'Skal vi vedde?';

  const lang = useSelector(selectLanguage);

  const modalPunishmentInformation = useLocale(lang, 'GAME_HINT_INFORMATION');

  return (
    <>
      <Text style={gamePlayStyles.hintContent}>{questionHint}</Text>
      <Text style={gamePlayStyles.hintContent}>
        {isNotSkalViVedde && modalPunishmentInformation}
      </Text>
    </>
  );
};

export default GameModal;
