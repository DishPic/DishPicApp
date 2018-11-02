import React, { Component } from 'react';
import { View, Picker, Text } from 'react-native';
import styled from 'styled-components';
import colors from '../../../ui/constants/colors';

const ImageContainer = styled.View`
  flex: 1;
  margin: 10px;
`;

const InputContainer = styled.View`
  flex: 1.25;
`;

const DishImage = styled.Image`
  max-width: 100%;
  max-height: 100%;
  flex: 1;
`;

const PickerContainer = styled.Picker`
  flex: 1;
  background: yellow;
`;

class DishDefinitionScreen extends Component {
  static navigationOptions = {
    title: 'Dish Definition',
    headerStyle: {
      backgroundColor: colors.dishPicPink,
    },
    headerTintColor: colors.pearlWhite,
  };
  render() {
    const { navigation } = this.props;
    const photo = navigation.getParam('photo');

    console.log(photo);
    return (
      <View style={{ flex: 1 }}>
        <ImageContainer>
          <DishImage source={{ uri: photo }} />
        </ImageContainer>
        <InputContainer>
          <View>
            <PickerContainer>
              <Picker.Item label="Country" value="" />
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="Country" value="" />
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="Country" value="" />
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
              <Picker.Item label="Country" value="" />
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </PickerContainer>
          </View>
        </InputContainer>
      </View>
    );
  }
}

export default DishDefinitionScreen;
