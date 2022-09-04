import React, {FC} from 'react';
import {Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {XIconModal} from '../../assets/icons/XIcon';
import IconButton from '../../components/Buttons/IconButton';
import PlayerInput from '../../components/Forms/PlayerInput';
import SchmellModal from '../../components/Modal';
import ModalTitle from '../../components/Styled/ModalTitle';
import {
  selectCurrentQuestion,
  selectCurrentQuestionIndex,
  selectGamePlayQuestions,
  selectLanguage,
  selectPlayers,
  selectQuestions,
} from '../../features/selectors';
import useHint from '../../hooks/useHint';
import useLocale from '../../hooks/useLocale';
import {modalShowType} from '../../typings/common';
import gamePlayStyles from './style';

interface GameModalProps {
  handleShow: () => void;
  modalShow: modalShowType;
  trigger: any;
}

interface ModalContentProps {
  currentType: string;
}

const GameModal: FC<GameModalProps> = props => {
  const {handleShow, modalShow, trigger} = props;

  const lang = useSelector(selectLanguage);
  const currentQuestion = useSelector(selectCurrentQuestion);
  const players = useSelector(selectPlayers);
  const currentIndex = useSelector(selectCurrentQuestionIndex);
  const editedQuestions = useSelector(selectGamePlayQuestions);
  const uneditedQuestions = useSelector(selectQuestions);

  const addPlayerTitle = useLocale(lang, 'GAME_PLAYER_INPUT');

  const isTypeHint = modalShow.modalType === 'H';

  const title = isTypeHint ? currentQuestion?.type : addPlayerTitle;

  const playerAddCallback = () => {
    trigger({
      currentIndex: currentIndex,
      players: players,
      editedQuestions: editedQuestions,
      uneditedQuestions: uneditedQuestions,
    });
  };

  return (
    <SchmellModal handleShow={handleShow} modalShow={modalShow}>
      <ModalTitle title={title as string} />
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
          <PlayerInput inputPlace="InGame" callback={playerAddCallback} />
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
