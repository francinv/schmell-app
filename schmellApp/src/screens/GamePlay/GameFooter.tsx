import React, {FC} from 'react';
import {View} from 'react-native';
import {useSelector} from 'react-redux';
import {GamePlusIcon} from '../../assets/icons/PlusIcon';
import IconButton from '../../components/Buttons/IconButton';
import {selectCurrentQuestion} from '../../features/selectors';
import Punishment from './Punishment';
import gamePlayStyles from './style';

interface GameFooterProps {
  handleShow: () => void;
}

const GameFooter: FC<GameFooterProps> = ({handleShow}) => {
  const currentQuestion = useSelector(selectCurrentQuestion);

  return (
    <View style={gamePlayStyles.footerContainer}>
      <Punishment currentQuestion={currentQuestion} />
      <IconButton
        handlePress={handleShow}
        additionalStyling={{marginLeft: 'auto'}}>
        <GamePlusIcon />
      </IconButton>
    </View>
  );
};

export default GameFooter;
