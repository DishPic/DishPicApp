import React from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const Container = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const CTAContainer = styled.TouchableOpacity`
  margin: 5px 0;
`;

const CTA = styled.Text`
  color: ${props => props.ctaTextColor};
  font-weight: bold;
  font-size: 16px;
  margin-left: 10px;
`;

const QuestionText = styled.Text`
  color: ${colors.pearlWhite};
  font-size: 16px;
  font-weight: bold;
`;

const QuestionCtaComponent = ({ question, cta, ctaTextColor, onPress }) => {
  return (
    <Container marginTop={15}>
      <QuestionText>{question}</QuestionText>
      <CTAContainer onPress={onPress}>
        <CTA ctaTextColor={ctaTextColor}>{cta}</CTA>
      </CTAContainer>
    </Container>
  );
};

export default QuestionCtaComponent;
