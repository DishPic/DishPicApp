import React from 'react';
import styled from 'styled-components';
import { Ionicons } from '@expo/vector-icons';

const RoundButtonContainer = styled.TouchableOpacity`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props =>
    props.backgroundColor ? props.backgroundColor : 'transparent'};
  border-radius: 50;
  border: ${props => (props.border ? props.border : props.backgroundColor)};
  height: ${props => (props.height ? `${props.height}` : '100')}px;
  width: ${props => (props.width ? `${props.width}` : '100')}px
  opacity: ${props => `${props.opacity}`};
`;

const IconContainer = styled.Text`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  text-align: center;
`;

const RoundButton = ({
  backgroundColor,
  border,
  height,
  icon,
  iconColor,
  iconSize,
  imageHeight,
  imageWidth,
  opacity,
  width,
  onPress,
}) => {
  return (
    <RoundButtonContainer
      onPress={onPress}
      backgroundColor={backgroundColor}
      border={border}
      height={height}
      imageHeight={imageHeight}
      imageWidth={imageWidth}
      opacity={opacity}
      width={width}
    >
      {icon && (
        <IconContainer>
          <Ionicons name={icon} size={iconSize} color={iconColor} />
        </IconContainer>
      )}
    </RoundButtonContainer>
  );
};

export default RoundButton;
