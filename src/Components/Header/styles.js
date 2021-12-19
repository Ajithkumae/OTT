import {StyleSheet} from 'react-native';
import {COLORS} from '../../Utils/theams';

const styles = StyleSheet.create({
  continer: {
    width: '100%',
    backgroundColor: COLORS.black,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '4%',
    paddingVertical: '8%',
    height: 45,
  },
  icon: {
    height: 20,
    width: 20,
    tintColor: COLORS.white,
  },
  headerTitle: {
    color: COLORS.white,
    fontSize: 23,
    fontWeight: '700',
  },
  headerTitleView: {
    flex: 1,
    height: 45,
    justifyContent: 'center',
  },
  rightAlingView: {
    width: 70,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
export default styles;
