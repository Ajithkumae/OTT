import {StyleSheet} from 'react-native';
import {COLORS, FONT_FAMILY, FONT_SIZE} from '../../Utils/theams';

const styles = StyleSheet.create({
  linearGradient: {
    height: '100%',
  },
  charName: {
    color: COLORS.white,
    fontFamily: FONT_FAMILY.Roboto_Medium,
    fontSize: FONT_SIZE.FONT_SIZE_31,
  },
  charNickName: {
    color: COLORS.white,
    fontFamily: FONT_FAMILY.Roboto_Thin,
    fontSize: FONT_SIZE.FONT_SIZE_14,
  },
  charStatus: {
    color: COLORS.red,
    fontFamily: FONT_FAMILY.Roboto_Medium,
    fontSize: FONT_SIZE.FONT_SIZE_14,
  },
  decTitle: {
    color: COLORS.lightGreen,
    fontFamily: FONT_FAMILY.Roboto_Medium,
    fontSize: FONT_SIZE.FONT_SIZE_14,
  },
  decSubTitle: {
    color: COLORS.white,
    fontFamily: FONT_FAMILY.Roboto_Thin,
    fontSize: FONT_SIZE.FONT_SIZE_14,
  },
  dobTxt: {
    color: COLORS.white,
    fontFamily: FONT_FAMILY.Roboto_Thin,
    fontSize: FONT_SIZE.FONT_SIZE_14,
    marginRight: 10,
  },
  cardBottomView: {
    marginTop: 10,
  },
  chrName: {
    color: COLORS.white,
    fontFamily: FONT_FAMILY.Roboto_Medium,
    fontSize: FONT_SIZE.FONT_SIZE_16,
  },
  chrNickName: {
    color: COLORS.white,
    fontFamily: FONT_FAMILY.Roboto_Thin,
    fontSize: FONT_SIZE.FONT_SIZE_14,
  },
  imgCard: {
    paddingHorizontal: 10,
    marginHorizontal: 10,
  },
  innerCardImg: {
    height: 212,
    borderRadius: 5,
    width: 159,
  },
  continer: {
    flex: 1,
    backgroundColor: 'black',
  },
  centerImgHeight: {height: 500},
  headerView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: '6%',
    marginHorizontal: '6%',
  },
  topAling: {marginTop: 100},
  charImageView: {height: 250, borderRadius: 5},
  txtContainer: {alignItems: 'center', marginTop: 40},
  detailsContainer: {marginHorizontal: '4%'},
  marginHorizontal: {marginHorizontal: '2%'},
  txtLeftView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 40,
  },
  txtRightView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  txtLeftView2: {
    justifyContent: 'space-between',
    marginTop: 40,
  },
  seasonList: {
    backgroundColor: COLORS.lightgray,
    margin: 10,
    paddingHorizontal: 15,
    paddingVertical: 3,
    borderRadius: 5,
  },
  flatListView: {flex: 1},
  flatlistCart: {
    color: COLORS.white,
    fontFamily: FONT_FAMILY.Roboto_Bold,
    fontSize: FONT_SIZE.FONT_SIZE_23,
    paddingTop: 50,
    paddingBottom: 20,
    marginLeft: '4%',
  },
});

export default styles;
