import { createBottomTabNavigator } from 'react-navigation';
import HomeScreen from '../../screens/CoreScreens/HomeScreen';
import RecommendationsScreen from '../../screens/CoreScreens/RecommendationsScreen';
import RecommendationFlowRouting from '../StackNavigation/RecommendationFlowRouting';

const MainFlowRouting = createBottomTabNavigator({
  home: { screen: HomeScreen },
  camera: {
    screen: RecommendationFlowRouting,
    tabBarOptions: {
      activeTintColor: '#e91e63',
      labelStyle: {
        fontSize: 12,
      },
      style: {
        backgroundColor: 'blue',
      },
    },
  },
  recommendations: { screen: RecommendationsScreen },
});

export default MainFlowRouting;
