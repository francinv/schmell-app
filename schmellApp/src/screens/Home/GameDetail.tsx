import React, {FC, useState} from 'react';
import {Animated, Image, Text, View} from 'react-native';
import {Dispatch} from '@reduxjs/toolkit';
import {gameType} from '../../typings/gameTypes';
import {showDetailType} from '../../typings/settingsTypes';
import {postDetail} from '../../features/usersettings/userSettingSlice';
import {fetchWeek, setSelectedGame} from '../../features/game/gameSlice';
import {useAppDispatch} from '../../features/hooks';
import {selectGameDetail, selectLanguage} from '../../features/selectors';
import useLocale from '../../hooks/useLocale';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {HomeScreenNavigationProp} from '../../typings/navigationTypes';
import {getCurrentWeekNumber} from '../../utils/dateUtil';
import homeStyle from './style';
import Checkbox from '../../components/Forms/Checkbox';
import SchmellButton from '../../components/Buttons/SchmellButton';

interface GameDetailProps {
  game: gameType;
  opacityAnim: Animated.Value;
}

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setDetailShow: (query: {
    id: number;
    show: boolean;
    currentState: showDetailType[];
    update: boolean;
  }) => dispatch(postDetail(query)),
  selectedGame: (query: number) => dispatch(setSelectedGame(query)),
  setWeek: (query: {weekNumber: number; idGame: number}) =>
    dispatch(fetchWeek(query)),
});

const GameDetail: FC<GameDetailProps> = ({game, opacityAnim}) => {
  const {description, logo, name, id} = game;

  const {setDetailShow, selectedGame, setWeek} = actionDispatch(
    useAppDispatch(),
  );

  const showDetail = useSelector(selectGameDetail);
  const lang = useSelector(selectLanguage);

  const buttonText = useLocale(lang, 'GAME_DETAIL_GO') as string;

  const navigation = useNavigation<HomeScreenNavigationProp>();

  const [showCheckbox, setShowCheckbox] = useState(false);

  const handlePress = () => {
    if (!showDetail.some(e => e.id === id)) {
      setDetailShow({
        id: id,
        show: showCheckbox,
        currentState: showDetail,
        update: false,
      });
    } else {
      setDetailShow({
        id: id,
        show: showCheckbox,
        currentState: showDetail,
        update: true,
      });
    }

    setWeek({weekNumber: getCurrentWeekNumber(), idGame: id});
    selectedGame(id);
    navigation.navigate('GameSettings');
  };

  const opacityStyle = {opacity: opacityAnim};

  return (
    <Animated.View style={[opacityStyle, homeStyle.detailView]}>
      <Image source={{uri: logo}} style={homeStyle.detailImg} />
      <Text style={homeStyle.detailTitle}>
        {useLocale(lang, 'GAME_DETAIL')} {name}?
      </Text>
      <Text style={homeStyle.detailDescription}>{description}</Text>
      <View style={homeStyle.checkBoxView}>
        <Checkbox
          isChecked={showCheckbox}
          onCheck={() => {
            setShowCheckbox(wasShown => !wasShown);
          }}
        />
        <Text style={homeStyle.checkBoxText}>
          {useLocale(lang, 'GAME_DETAIL_SHOW')}
        </Text>
      </View>
      <SchmellButton
        content={buttonText}
        handlePress={handlePress}
        type="M"
        wantShadow={true}
      />
    </Animated.View>
  );
};

export default GameDetail;
