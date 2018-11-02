import { createStackNavigator } from 'react-navigation';
import CameraScreen from '../../screens/CoreScreens/RecommendationFlow/CameraScreen';
import RestaurantSelectionScreen from '../../screens/CoreScreens/RecommendationFlow/RestaurantSelectionScreen';
import DishDefinitionScreen from '../../screens/CoreScreens/RecommendationFlow/DishDefinitionScreen';
import FriendsListScreen from '../../screens/CoreScreens/RecommendationFlow/FriendsListScreen';
import RecommendationSentScreen from '../../screens/CoreScreens/RecommendationFlow/RecommendationSentScreen';

const RecommendationFlowRouting = createStackNavigator({
  camera: { screen: CameraScreen },
  restaurantSelection: { screen: RestaurantSelectionScreen },
  dishDefinition: { screen: DishDefinitionScreen },
  friendsList: { screen: FriendsListScreen },
  recommendationSent: { screen: RecommendationSentScreen },
});

RecommendationFlowRouting.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (navigation.state.index >= 0) {
    tabBarVisible = false;
  }

  return {
    tabBarVisible,
  };
};

export default RecommendationFlowRouting;
