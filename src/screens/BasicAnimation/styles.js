import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../constants/Colors';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  animatedView: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: Colors.red,
    alignSelf: 'center',
  },
  heading: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  subHeading: {
    marginLeft: 20,
    marginVertical: 25,
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  onClickText: {
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '700',
  },
  onButtonClick: {
    alignSelf: 'center',
    backgroundColor: 'yellow',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  animatedStyle: leftValue => ({
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: Colors.conifer,
    alignSelf: 'center',
    marginLeft: leftValue,
  }),
  animationWithOpacity: opacityValue => ({
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: Colors.royalBlue,
    alignSelf: 'center',
    opacity: opacityValue,
  }),
});

export default styles;
