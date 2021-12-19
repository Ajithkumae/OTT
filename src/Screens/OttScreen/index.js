import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeartIcon from '../../Assets/Icons/Heart';
import Header from '../../Components/Header';
import ScreensName from '../../Constants/ScreensName';
import {
  addFavourite,
  getCharacters,
  RemoveFavourite,
} from '../../Redux/Action/ottAction';
import {COLORS, winWidth} from '../../Utils/theams';
import styles from './styles';

const OttScreen = props => {
  const dispatch = useDispatch();

  const {charactersList, favouriteList} = useSelector(
    state => state.ottReducer,
  );

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  const addFav = data => {
    let checkFav, removeFav;
    checkFav = favouriteList.find(item => item === data.char_id);
    removeFav = favouriteList.filter(item => item !== data.char_id);
    if (!checkFav) {
      dispatch(addFavourite(data.char_id));
    } else {
      dispatch(RemoveFavourite(removeFav));
    }
  };

  const renderItem = item => {
    let addedFav = favouriteList.find(ele => ele === item.item.char_id);
    return (
      <TouchableOpacity
        style={styles.imgCard}
        onPress={() =>
          props.navigation.navigate(ScreensName.SELECTEDSCREEN, {
            data: item.item,
            favouriteList: favouriteList,
            charactersList: charactersList,
          })
        }>
        <Image
          source={{uri: item.item?.img}}
          style={styles.imageView}
          resizeMode="cover"
          height={275}
          width={winWidth / 2 - 20}
        />
        <View style={styles.cardBottomView}>
          <View>
            <Text style={styles.chrName} numberOfLines={1}>
              {item.item.name}
            </Text>
            <Text style={styles.chrNickName} numberOfLines={1}>
              {item.item.nickname}
            </Text>
          </View>
          <TouchableOpacity onPress={() => addFav(item.item)}>
            <HeartIcon
              color={addedFav ? COLORS.lightGreen : COLORS.gray}
              clicked={addedFav}
            />
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <Header
        search={() => props.navigation.navigate(ScreensName.SEARCHSCREEN)}
        rightIcon={'Heart'}
        headtitle={'The Breaking bad'}
        rightView={() => props.navigation.navigate(ScreensName.FAVOURITESCREEN)}
      />
      <FlatList
        style={[styles.container, {paddingTop: 50}]}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={charactersList}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default OttScreen;
