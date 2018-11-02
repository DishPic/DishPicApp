import React from 'react';
import Gandalf from 'gandalf-validator';
import styled from 'styled-components';
import Input from '../../ui/input/input';
import colors from '../../ui/constants/colors';
import QuestionCta from '../../ui/buttons/QuestionCta';
import StyledButton from '../../ui/buttons/StyledButton';
import BackButton from '../../ui/buttons/BackButton';

const SignupFormContainer = styled.View`
  align-items: flex-start;
  background: ${colors.dishPicPink};
  display: flex;
  flex: 1;
  justify-content: center;
  padding: 0 25px;
  width: 100%;
`;

const SignupHeader = styled.Text`
  color: ${colors.pearlWhite};
  font-size: 42px;
  font-weight: bold;
`;

const SignupForm = styled.View`
  flex: 0.9;
  width: 100%;
  align-items: flex-start;
  justify-content: flex-start;
  padding-top: 20%;
`;

const signupFormFieldDefinitions = [
  {
    name: 'email',
    component: Input,
    validators: ['required', 'email'],
    props: {
      autoComplete: 'email',
      autoCapitalize: 'none',
      autoFocus: true,
      placeholder: 'Email',
      required: true,
      type: 'email',
    },
    debounce: 500,
  },
  {
    name: 'username',
    component: Input,
    validators: ['required'],
    props: {
      autoComplete: 'username',
      autoCapitalize: 'none',
      autoFocus: false,
      placeholder: 'Username',
      required: true,
      type: 'username',
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

class SignupScreen extends Gandalf {
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
    this.buildFields(signupFormFieldDefinitions);
  }
  render() {
    const { fields } = this.state;

    return (
      <SignupFormContainer>
        <BackButton
          flexPercentage={0.1}
          buttonText="Back"
          onPress={() => this.props.navigation.navigate('auth')}
        />
        <SignupForm>
          <SignupHeader>Signup</SignupHeader>
          {fields.email.element}
          {fields.username.element}
          {fields.password.element}
          <StyledButton
            activeOpacity={0.85}
            backgroundColor={colors.neonGreen}
            buttonText="Done"
            marginTop={10}
          />
          <QuestionCta
            question="Already have an account?"
            cta="Login"
            ctaTextColor={colors.dishPicPurple}
            onPress={() => this.props.navigation.navigate('login')}
          />
        </SignupForm>
      </SignupFormContainer>
    );
  }
}

export default SignupScreen;
