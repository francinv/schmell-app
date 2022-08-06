import {useNavigation} from '@react-navigation/native';
import {Dispatch} from '@reduxjs/toolkit';
import React, {FC, useState} from 'react';
import {Image, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {fetchWeek, setSelectedGame} from '../../features/game/gameSlice';
import {useAppDispatch} from '../../features/hooks';
import {selectGameDetail, selectLanguage} from '../../features/selectors';
import {postDetail} from '../../features/usersettings/userSettingSlice';
import useLocale from '../../hooks/useLocale';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import heightStyles from '../../styles/height.styles';
import layoutStyles from '../../styles/layout.styles';
import marginStyles from '../../styles/margin.styles';
import paddingStyles from '../../styles/padding.styles';
import textStyles from '../../styles/text.styles';
import widthStyles from '../../styles/width.styles';
import {gameType} from '../../typings/gameTypes';
import {HomeScreenNavigationProp} from '../../typings/navigationTypes';
import {showDetailType} from '../../typings/settingsTypes';
import {getCurrentWeekNumber} from '../../utils/dateUtil';
import CallToAction from '../Buttons/CallToAction';
import Checkbox from '../Form/Checkbox';

interface Props {
  game: gameType;
}

const actionDispatch = (dispatch: Dispatch<any>) => ({
  setDetailShow: (query: {
    id: number;
    show: boolean;
    currentState: showDetailType[];
  }) => dispatch(postDetail(query)),
  selectedGame: (query: number) => dispatch(setSelectedGame(query)),
  setWeek: (query: {weekNumber: number; idGame: number}) =>
    dispatch(fetchWeek(query)),
});

const GameDetail: FC<Props> = ({game}) => {
  const {description, logo, name, id} = game;
  const {setDetailShow, selectedGame, setWeek} = actionDispatch(
    useAppDispatch(),
  );
  const showDetail = useSelector(selectGameDetail);
  const lang = useSelector(selectLanguage);
  const buttonText = useLocale(lang, 'GAME_DETAIL_GO') as string;
  const navigation = useNavigation<HomeScreenNavigationProp>();
  const [showCheckbox, setShowCheckbox] = useState(false);

  const handleClick = () => {
    setDetailShow({id: id, show: showCheckbox, currentState: showDetail});
    setWeek({weekNumber: getCurrentWeekNumber(), idGame: id});
    selectedGame(id);
    navigation.navigate('GameSettings');
  };

  const CheckBoxView = (
    <View
      style={[
        layoutStyles.flex_center,
        layoutStyles.flex_row,
        marginStyles.mt_10,
        widthStyles(0).w_p_60,
        layoutStyles.justify_evenly,
      ]}>
      <Checkbox
        isChecked={showCheckbox}
        onCheck={() => {
          setShowCheckbox(wasShown => !wasShown);
        }}
      />
      <Text
        style={[
          textStyles.text_font_secondary,
          textStyles.text_20,
          textStyles.font_500,
          colorStyles.color_tertiary,
        ]}>
        {useLocale(lang, 'GAME_DETAIL_SHOW')}
      </Text>
    </View>
  );

  return (
    <View
      style={[
        widthStyles(0).w_p_85,
        globalStyles.border_bottom_10,
        colorStyles.bg_tertiary,
        paddingStyles.p_ver_10,
        paddingStyles.pb_20,
        layoutStyles.flex_center,
      ]}>
      <Image
        source={{uri: logo}}
        style={[
          marginStyles.m_hor_auto,
          widthStyles(200).w_custom,
          heightStyles(200).h_custom,
        ]}
      />
      <Text
        style={[
          textStyles.text_30,
          textStyles.text_center,
          textStyles.text_font_primary,
          colorStyles.color_tertiary,
          widthStyles(0).w_p_90,
        ]}>
        {useLocale(lang, 'GAME_DETAIL')} {name}?
      </Text>
      <Text
        style={[
          textStyles.text_center,
          textStyles.text_font_secondary,
          colorStyles.color_tertiary,
          textStyles.text_16,
          widthStyles(0).w_p_90,
          marginStyles.mt_5,
        ]}>
        {description}
      </Text>
      {CheckBoxView}
      <CallToAction
        content={buttonText}
        handleClick={handleClick}
        customStyle={[widthStyles(0).w_p_80, heightStyles(60).h_custom]}
        customTextStyle={textStyles.text_30}
      />
    </View>
  );
};

export default GameDetail;
