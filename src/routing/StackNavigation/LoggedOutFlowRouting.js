import { createStackNavigator } from 'react-navigation';
import AuthScreen from '../../screens/AuthScreens/AuthScreen';
import SignupWithEmailScreen from '../../screens/AuthScreens/SignupWithEmailScreen';
import LoginScreen from '../../screens/AuthScreens/LoginScreen';

const LoggedOutFlowRouting = createStackNavigator({
  auth: { screen: AuthScreen },
  signup: { screen: SignupWithEmailScreen },
  login: { screen: LoginScreen },
});

export default LoggedOutFlowRouting;
