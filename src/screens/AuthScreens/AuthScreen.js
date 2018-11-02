import React, { Component } from 'react';
import styled from 'styled-components';
import { Image, View } from 'react-native';

import colors from '../../ui/constants/colors';
import StyledButton from '../../ui/buttons/StyledButton';
import QuestionCta from '../../ui/buttons/QuestionCta';

const AuthScreenContainer = styled.View`
  align-items: center;
  background-color: ${colors.dishPicPink};
  display: flex;
  flex: 1;
  justify-content: center;
`;

const LogoContainer = styled.View`
  align-items: center;
  display: flex;
  flex: 2;
  justify-content: center;
`;

const LoginContainer = styled.View`
  flex: 2;
  width: 100%;
  padding: 0 25px;
`;

const SignupContainer = styled.View`
  align-items: center;
  flex: 0.5;

  height: 75px;
  width: 100%;
`;

class AuthScreen extends Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <AuthScreenContainer>
        <LogoContainer marginTop={75}>
          <View marginBottom={10}>
            <Image
              style={{ maxWidth: 250, maxHeight: 170 }}
              source={require('../../assets/logos/dishpic-logo-2.png')}
            />
          </View>
        </LogoContainer>
        <LoginContainer>
          <StyledButton
            buttonText="Login"
            backgroundColor={colors.neonGreen}
            activeOpacity={0.85}
            onPress={() => this.props.navigation.navigate('login')}
          />
          <StyledButton
            buttonText="Login with Facebook"
            backgroundColor={colors.facebookBlue}
            activeOpacity={0.85}
          />
        </LoginContainer>
        <SignupContainer>
          <QuestionCta
            question="Don't have an account?"
            cta="Signup"
            ctaTextColor={colors.dishPicPurple}
            onPress={() => this.props.navigation.navigate('signup')}
          />
        </SignupContainer>
      </AuthScreenContainer>
    );
  }
}
export default AuthScreen;
