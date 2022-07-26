import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Animated, SafeAreaView, Text, TouchableOpacity} from 'react-native';
import {useSelector} from 'react-redux';
import {selectedGame, selectLanguage} from '../../features/selectors';
import CallToAction from '../Buttons/CallToAction';
import layoutStyles from '../../styles/layout.styles';
import widthStyles from '../../styles/width.styles';
import marginStyles from '../../styles/margin.styles';
import heightStyles from '../../styles/height.styles';
import textStyles from '../../styles/text.styles';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import paddingStyles from '../../styles/padding.styles';
import {HomeScreenNavigationProp} from '../../typings/navigationTypes';
import useLocale from '../../hooks/useLocale';

interface GameDetailProps {
  handleShow: () => void;
}

const GameDetail: React.FC<GameDetailProps> = ({handleShow}) => {
  const game = useSelector(selectedGame);
  const lang = useSelector(selectLanguage);
  const [opacityAnim] = useState(new Animated.Value(0));
  const [moveInAnim] = useState(new Animated.Value(500));
  const navigation = useNavigation<HomeScreenNavigationProp>();

  const handleClick = () => {
    navigation.navigate('GameSettings');
  };

  function closeOverlay() {
    Animated.timing(opacityAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false,
    }).start();
    Animated.timing(moveInAnim, {
      toValue: 500,
      duration: 2000,
      useNativeDriver: false,
    }).start();
    setTimeout(handleShow, 2000);
  }

  useEffect(() => {
    Animated.timing(opacityAnim, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: false,
    }).start();
    Animated.timing(moveInAnim, {
      toValue: 0,
      duration: 2000,
      useNativeDriver: false,
    }).start();
  }, [moveInAnim, opacityAnim]);

  return (
    <SafeAreaView style={[layoutStyles.flex_column, layoutStyles.align_center]}>
      <Animated.View
        style={[
          widthStyles(0).w_p_90,
          marginStyles.m_hor_auto,
          heightStyles(0).h_p_50,
          {opacity: opacityAnim},
        ]}>
        <TouchableOpacity
          onPress={closeOverlay}
          style={[widthStyles(0).w_p_100, heightStyles(0).h_p_100]}>
          <Text
            style={[
              textStyles.text_font_primary,
              textStyles.text_shadow,
              colorStyles.color_primary,
              textStyles.text_40,
              textStyles.text_center,
              marginStyles.mt_20,
            ]}>
            {game.name}
          </Text>
          <Animated.Image
            source={{uri: game.logo}}
            style={[
              heightStyles(0).h_p_75,
              marginStyles.m_hor_auto,
              widthStyles(0).w_p_90,
              marginStyles.mt_10,
              {opacity: opacityAnim},
            ]}
          />
        </TouchableOpacity>
      </Animated.View>
      <Animated.View
        style={[
          widthStyles(0).w_p_100,
          heightStyles(0).h_p_50,
          colorStyles.bg_septenary,
          globalStyles.border_top_start_30,
          globalStyles.border_top_end_30,
          paddingStyles.p_hor_5,
          {transform: [{translateY: moveInAnim}]},
        ]}>
        <CallToAction
          handleClick={handleClick}
          content={useLocale(lang, 'GAME_DETAIL_GO') as string}
          customStyle={[
            layoutStyles.top_min_20,
            layoutStyles.pos_rel,
            marginStyles.mt_0,
          ]}
        />
        <Text
          style={[
            textStyles.text_font_primary,
            colorStyles.color_tertiary,
            textStyles.text_30,
            marginStyles.mt_10,
            textStyles.text_center,
          ]}>
          {useLocale(lang, 'GAME_DETAIL')}
        </Text>
        <Text
          style={[
            textStyles.text_font_secondary,
            colorStyles.color_tertiary,
            marginStyles.mt_15,
            textStyles.text_center,
            textStyles.text_20,
          ]}>
          {game.description}
        </Text>
      </Animated.View>
    </SafeAreaView>
  );
};

export default GameDetail;
