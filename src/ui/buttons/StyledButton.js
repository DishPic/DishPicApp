import React from 'react';
import styled from 'styled-components';
import { Text } from 'react-native';

const ButtonContainer = styled.View`
  width: 100%;
`;

const Button = styled.TouchableOpacity`
  align-items: center;
  display: flex;
  background-color: ${props => props.backgroundColor};
  border-radius: 5px;
  height: 75px;
  justify-content: center;
  width: 100%;
`;
const StyledButton = ({
  activeOpacity,
  onPress,
  backgroundColor,
  buttonText,
}) => {
  return (
    <ButtonContainer marginTop={15}>
      <Button
        onPress={onPress}
        backgroundColor={backgroundColor}
        activeOpacity={activeOpacity}
      >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>
          {buttonText}
        </Text>
      </Button>
    </ButtonContainer>
  );
};

export default StyledButton;
