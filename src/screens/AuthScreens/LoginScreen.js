import React from 'react';
import Gandalf from 'gandalf-validator';
import styled from 'styled-components';
import Input from '../../ui/input/input';
import colors from '../../ui/constants/colors';
import QuestionCta from '../../ui/buttons/QuestionCta';
import StyledButtom from '../../ui/buttons/StyledButton';
import BackButton from '../../ui/buttons/BackButton';

const LoginFormContainer = styled.View`
  align-items: flex-start;
  background: ${colors.dishPicPink};
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 0 25px;
  width: 100%;
`;

const LoginHeader = styled.Text`
  color: ${colors.pearlWhite};
  font-size: 42px;
  font-weight: bold;
`;

const LoginForm = styled.View`
  flex: 0.9;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 25%;
`;

const loginFormFieldDefinitions = [
  {
    name: 'email',
    component: Input,
    validators: ['required', 'email'],
    props: {
      autoComplete: 'email',
      autoCapitalize: 'none',
      autoFocus: false,
      placeholder: 'Email',
      required: true,
      type: 'email',
    },
    debounce: 500,
  },
  {
    name: 'password',
    component: Input,
    validators: ['required'],
    props: {
      autoComplete: 'password',
      placeholder: 'Password',
      required: true,
      type: 'password',
    },
    debounce: 300,
  },
];

class LoginScreen extends Gandalf {
  static navigationOptions = {
    header: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      ...this.state,
    };
  }

  componentWillMount() {
    this.buildFields(loginFormFieldDefinitions);
  }

  render() {
    const {
      fields,
      isLoginInvalid,
      isResetRequired,
      isSessionExpired,
      isUnauthorized,
      redirectUrl,
    } = this.state;

    return (
      <LoginFormContainer>
        <BackButton
          flexPercentage={0.1}
          buttonText="Back"
          onPress={() => this.props.navigation.navigate('auth')}
        />
        <LoginForm>
          <LoginHeader>Login</LoginHeader>
          {fields.email.element}
          {fields.password.element}
          <StyledButtom
            activeOpacity={0.85}
            backgroundColor={colors.neonGreen}
            buttonText="Login"
            marginTop={10}
          />
          <QuestionCta
            question="Don't have an account?"
            cta="Signup"
            ctaTextColor={colors.dishPicPurple}
            onPress={() => this.props.navigation.navigate('signup')}
          />
        </LoginForm>
      </LoginFormContainer>
    );
  }
}

export default LoginScreen;
