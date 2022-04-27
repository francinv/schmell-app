import React from 'react';
import Svg, {Text} from 'react-native-svg';

interface SubTitleProps {
  title: string;
}

const SubTitle: React.FC<SubTitleProps> = ({title}) => {
  return (
    <Svg height={28} xmlns="http://www.w3.org/2000/svg">
      <Text
        stroke="#141400"
        strokeWidth="1"
        fill="#FFD700"
        fontSize="25"
        fontFamily="CCBiffBamBoomW00-Regular"
        x="5"
        y="25">
        {title}
      </Text>
    </Svg>
  );
};

export default SubTitle;
