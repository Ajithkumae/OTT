import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import HeartIcon from '../../Assets/Icons/Heart';
import Header from '../../Components/Header';
import {
  addFavourite,
  getCharacters,
  RemoveFavourite,
} from '../../Redux/Action/ottAction';
import {COLORS, winWidth} from '../../Utils/theams';
import styles from './styles';

const OttScreen = () => {
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
      <TouchableOpacity style={styles.imgCard}>
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
      <Header />
      <FlatList
        style={[styles.container, {paddingTop: 50}]}
        numColumns={2}
        data={charactersList}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};

export default OttScreen;
