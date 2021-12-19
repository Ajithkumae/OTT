import {StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE, winWidth} from '../../Utils/theams';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.darkBlack,
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
  txtNote: {
    color: COLORS.lightGreen,
    fontFamily: FONT_FAMILY.Roboto_Bold,
    fontSize: FONT_SIZE.FONT_SIZE_24,
  },
  txtSubNote: {
    color: COLORS.white,
    fontFamily: FONT_FAMILY.Roboto_Thin,
    fontSize: FONT_SIZE.FONT_SIZE_24,
  },
  txtContainer: {
    justifyContent: 'center',
    marginLeft: 20,
    marginTop: 50,
  },
});

export default styles;
