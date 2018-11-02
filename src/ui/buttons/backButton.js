import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const BackButtonContainer = styled.TouchableOpacity`
  flex: ${props => props.flexPercentage};
  height: 100%;
  justify-content: flex-end;
`;
const BackButtonText = styled.Text`
  color: ${colors.pearlWhite};
  font-size: 14px;
  font-weight: bold;
`;
const BackButton = ({ buttonText, onPress, flexPercentage }) => {
  return (
    <BackButtonContainer onPress={onPress} flexPercentage={flexPercentage}>
      <BackButtonText>{buttonText}</BackButtonText>
    </BackButtonContainer>
  );
};

export default BackButton;
