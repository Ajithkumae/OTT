import {StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE, winWidth} from '../../Utils/theams';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  imageView: {
    borderRadius: 5,
  },
  imgCard: {
    margin: 10,
    width: winWidth / 2 - 20,
  },
  cardBottomView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: '1%',
  },
  chrName: {
    color: COLORS.white,
    fontFamily: FONT_FAMILY.Roboto_Medium,
    fontSize: FONT_SIZE.FONT_SIZE_16,
    width: winWidth / 2 - 50,
  },
  chrNickName: {
    color: COLORS.white,
    fontFamily: FONT_FAMILY.Roboto_Thin,
    fontSize: FONT_SIZE.FONT_SIZE_14,
  },
});

export default styles;
