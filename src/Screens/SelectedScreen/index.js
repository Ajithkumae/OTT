import React, {useEffect, useState} from 'react';
import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../../Utils/theams';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import HeartIcon from '../../Assets/Icons/Heart';
import ScreensName from '../../Constants/ScreensName';

const SelectedScreen = props => {
  let screenData = props.route.params.data;
  let favouriteList = props.route.params.favouriteList;
  let isFavourit = favouriteList?.find(item => item === screenData.char_id);
  let charactersList = props.route.params.charactersList;

  const [randomList, setRandomList] = useState([]);
  useEffect(() => {
    generateCharList();
  }, []);
  const generateCharList = () => {
    let items = Array.from(Array(charactersList.length).keys());
    var newItems = [];
    let newRandomlist = [];
    for (var i = 0; i < 3; i++) {
      var idx = Math.floor(Math.random() * items.length);
      newItems.push(items[idx]);
      items.splice(idx, 1);
    }
    newRandomlist = charactersList.filter(({char_id: id1}) =>
      newItems.some(id2 => id2 === id1),
    );
    setRandomList(newRandomlist);
  };

  const renderItem = item => {
    return (
      <TouchableOpacity style={styles.imgCard}>
        <Image
          source={{uri: item.item?.img}}
          style={styles.innerCardImg}
          resizeMode="cover"
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
        </View>
      </TouchableOpacity>
    );
  };
  return (
    <ScrollView style={styles.continer} showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={{
          uri: screenData.img,
        }}
        resizeMode="stretch"
        style={styles.centerImgHeight}>
        <View style={styles.headerView}>
          <TouchableOpacity
            onPress={() => props.navigation.navigate(ScreensName.OTTSCREEN)}>
            <Icon name="arrowleft" color={COLORS.white} size={25} />
          </TouchableOpacity>
          <HeartIcon
            color={isFavourit ? COLORS.lightGreen : COLORS.gray}
            clicked={isFavourit}
          />
        </View>
        <LinearGradient
          colors={[COLORS.GRADIENT_1, COLORS.GRADIENT_2]}
          style={styles.linearGradient}>
          <View style={styles.topAling}>
            <Image
              source={{
                uri: screenData.img,
              }}
              resizeMode="contain"
              style={styles.charImageView}
            />
            <View style={styles.txtContainer}>
              <Text style={styles.charName}>{screenData.name}</Text>
              <Text style={styles.charNickName}>{screenData.nickname}</Text>
              <Text style={styles.charStatus}>{screenData.status}</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
      <View style={styles.detailsContainer}>
        <View style={styles.txtLeftView}>
          <View>
            <Text style={styles.decTitle}>Portrayed</Text>
            <Text style={styles.decSubTitle}>{screenData.portrayed}</Text>
          </View>
          <View style={styles.txtRightView}>
            <Text style={styles.dobTxt}>{screenData.birthday}</Text>
            <Icon name="gift" color={COLORS.white} size={15} />
          </View>
        </View>
        <View style={styles.txtLeftView2}>
          <Text style={styles.decTitle}>Occupation</Text>
          {screenData.occupation?.map((item, index) => {
            return (
              <Text style={styles.decSubTitle} key={index}>
                {item}
              </Text>
            );
          })}
        </View>
        <View style={styles.txtLeftView2}>
          <Text style={[styles.decTitle, {marginLeft: '2%'}]}>Appeared in</Text>
        </View>
      </View>

      <ScrollView
        horizontal={true}
        style={styles.marginHorizontal}
        showsHorizontalScrollIndicator={false}>
        {screenData.appearance?.map((item, index) => {
          return (
            <View style={styles.seasonList} key={index}>
              <Text>Season {item}</Text>
            </View>
          );
        })}
      </ScrollView>
      <Text style={styles.flatlistCart}>Other characters</Text>
      <FlatList
        style={styles.flatListView}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={randomList}
        renderItem={renderItem}
        keyExtractor={item => item?.name}
      />
    </ScrollView>
  );
};

export default SelectedScreen;
