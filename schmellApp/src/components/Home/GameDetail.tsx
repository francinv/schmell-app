import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Image, SafeAreaView, Text, TouchableOpacity, View} from 'react-native';
import {useSelector} from 'react-redux';
import {selectedGame} from '../../features/selectors';
import CallToAction from '../Buttons/CallToAction';
import layoutStyles from '../../styles/layout.styles';
import widthStyles from '../../styles/width.styles';
import marginStyles from '../../styles/margin.styles';
import heightStyles from '../../styles/height.styles';
import textStyles from '../../styles/text.styles';
import colorStyles from '../../styles/color.styles';
import globalStyles from '../../styles/global.styles';
import paddingStyles from '../../styles/padding.styles';

interface GameDetailProps {
  handleShow: () => void;
}

const GameDetail: React.FC<GameDetailProps> = ({handleShow}) => {
  const game = useSelector(selectedGame);
  const navigation = useNavigation();

  const handleClick = () => {
    navigation.navigate('GameSettings');
  };

  return (
    <SafeAreaView style={[layoutStyles.flex_column, layoutStyles.align_center]}>
      <View
        style={[
          widthStyles(0).w_p_90,
          marginStyles.m_hor_auto,
          heightStyles(0).h_p_50,
        ]}>
        <TouchableOpacity
          onPress={handleShow}
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
          <Image
            source={{uri: game.logo}}
            style={[
              heightStyles(0).h_p_75,
              marginStyles.m_hor_auto,
              widthStyles(0).w_p_90,
              marginStyles.mt_10,
            ]}
          />
        </TouchableOpacity>
      </View>
      <View
        style={[
          widthStyles(0).w_p_100,
          heightStyles(0).h_p_50,
          colorStyles.bg_quaternary,
          globalStyles.border_top_start_30,
          globalStyles.border_top_end_30,
          paddingStyles.p_hor_5,
        ]}>
        <CallToAction
          handleClick={handleClick}
          content="Let's play"
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
          Hva er i dette spillet?
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
      </View>
    </SafeAreaView>
  );
};

export default GameDetail;
