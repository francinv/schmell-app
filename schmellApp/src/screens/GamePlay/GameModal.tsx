import {useRoute} from '@react-navigation/native';
import React, {FC, useEffect} from 'react';
import {Text} from 'react-native';
import {useSelector} from 'react-redux';
import {XIconModal} from '../../assets/icons/XIcon';
import IconButton from '../../components/Buttons/IconButton';
import PlayerInput from '../../components/Forms/PlayerInput';
import SchmellModal from '../../components/Modal';
import ModalTitle from '../../components/Styled/ModalTitle';
import actionDispatch from '../../features/dispatch';
import {useAppDispatch} from '../../features/hooks';
import {
  selectCurrentQuestion,
  selectCurrentQuestionIndex,
  selectGamePlayQuestions,
  selectLanguage,
  selectPlayers,
} from '../../features/selectors';
import useHint from '../../hooks/useHint';
import useLocale from '../../hooks/useLocale';
import {useLazyAddPlayerInGameQuery} from '../../services/apiService';
import {modalShowType} from '../../types/common';
import {GameRouteProp} from '../../types/navigation';
import gamePlayStyles from './style';

interface GameModalProps {
  handleShow: () => void;
  modalShow: modalShowType;
}

interface ModalContentProps {
  currentType: string;
}

const GameModal: FC<GameModalProps> = props => {
  const {handleShow, modalShow} = props;

  const route = useRoute<GameRouteProp>();

  const lang = useSelector(selectLanguage);
  const currentQuestion = useSelector(selectCurrentQuestion);
  const players = useSelector(selectPlayers);
  const currentIndex = useSelector(selectCurrentQuestionIndex);
  const editedQuestions = useSelector(selectGamePlayQuestions);

  const {setGamePlayQuestions} = actionDispatch(useAppDispatch());

  const [trigger, result] = useLazyAddPlayerInGameQuery();

  const addPlayerTitle = useLocale(lang, 'GAME_PLAYER_INPUT');

  const isTypeHint = modalShow.modalType === 'H';

  const title = isTypeHint ? currentQuestion?.type : addPlayerTitle;

  const playerAddCallback = () => {
    trigger({
      currentIndex: currentIndex,
      players: players,
      editedQuestions: editedQuestions,
      uneditedQuestions: route.params.questions,
    });
    handleShow();
  };

  useEffect(() => {
    if (result.isSuccess && result.data) {
      setGamePlayQuestions(result.data);
    }
  }, [result, setGamePlayQuestions]);

  return (
    <SchmellModal handleShow={handleShow} modalShow={modalShow}>
      <>
        <ModalTitle title={title as string} />
        <IconButton
          handlePress={handleShow}
          wantShadow={false}
          additionalStyling={gamePlayStyles.modalButton}>
          <XIconModal />
        </IconButton>
        {isTypeHint ? (
          <HintContent currentType={currentQuestion?.type} />
        ) : (
          <PlayerInput inputPlace="InGame" callback={playerAddCallback} />
        )}
      </>
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
