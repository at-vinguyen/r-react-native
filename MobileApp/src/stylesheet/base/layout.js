import color from 'moneysaving/src/stylesheet/base/variable';
import { StyleSheet } from 'react-native';

export default layout = StyleSheet.create({
  container: {
    backgroundColor: color.white
  },
  center: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  textCenter: {
    textAlign: 'center'
  }
});
