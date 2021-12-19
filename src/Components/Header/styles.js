import {StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../../Utils/theams';

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
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: COLORS.darkBlack,
  },
  textInput: {
    fontFamily: FONT_FAMILY.Roboto_Thin,
    fontSize: FONT_SIZE.FONT_SIZE_33,
  },
});
export default styles;
