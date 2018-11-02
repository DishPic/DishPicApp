import React, { Component } from 'react';
import { Text, View, ImageBackground } from 'react-native';
import styled from 'styled-components';
import { Camera, Permissions } from 'expo';
import colors from '../../../ui/constants/colors';
import RoundButton from '../../../ui/buttons/RoundButton';
import RightArrow from '../../../assets/icons/right-arrow.png';

const CaptureButtonContainer = styled.View`
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 50px;
`;

const ProceedContainer = styled.View`
  align-items: flex-end;
  display: flex;
  flex: 6;
  flex-direction: column;
  justify-content: flex-end;
  width: 100%;
  padding: 50px 20px;
`;
const CancelContainer = styled.View`
  align-items: flex-start;
  display: flex;
  flex: 2;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 50px 20px;
`;

class CameraScreen extends Component {
  static navigationOptions = {
    header: null,
  };

  constructor() {
    super();
    this.state = {
      photoTaken: false,
      photo: '',
    };
  }

  state = {
    hasCameraPermission: null,
    type: Camera.Constants.Type.back,
  };

  async componentWillMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  }

  takePicture = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      this.setState({ photoTaken: true, photo: `${photo.uri}` });
    }
  };

  cancelPicture = () => {
    this.setState({ photoTaken: false });
  };

  render() {
    const { hasCameraPermission, photoTaken, photo } = this.state;

    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          {photoTaken ? (
            <ImageBackground source={{ uri: photo }} style={{ flex: 1 }}>
              <CancelContainer>
                <RoundButton
                  backgroundColor={colors.dishPicPink}
                  height={40}
                  icon="ios-close"
                  iconColor={colors.pearlWhite}
                  iconSize={30}
                  onPress={() => this.cancelPicture()}
                  src={RightArrow}
                  width={40}
                />
              </CancelContainer>
              <ProceedContainer>
                <RoundButton
                  backgroundColor={colors.neonGreen}
                  height={60}
                  icon="ios-arrow-round-forward"
                  iconColor={colors.pearlWhite}
                  iconSize={50}
                  onPress={() =>
                    this.props.navigation.navigate('dishDefinition', {
                      photo,
                    })
                  }
                  src={RightArrow}
                  width={120}
                />
              </ProceedContainer>
            </ImageBackground>
          ) : (
            <Camera
              style={{ flex: 1, justifyContent: 'flex-end' }}
              ref={ref => {
                this.camera = ref;
              }}
              type={this.state.type}
            >
              <CaptureButtonContainer>
                <RoundButton
                  backgroundColor={colors.charcoal}
                  border="5px solid white"
                  onPress={() => this.takePicture()}
                  opacity={0.65}
                />
              </CaptureButtonContainer>
            </Camera>
          )}
        </View>
      );
    }
  }
}

export default CameraScreen;
