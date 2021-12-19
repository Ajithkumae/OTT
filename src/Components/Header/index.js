import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import HeartIcon from '../../Assets/Icons/Heart';
import {COLORS} from '../../Utils/theams';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
/**
 *
 * @param {props} headtitle - Header title
 * @param {props callback} onBackPress - onpress goback
 * @param {props} rightView - right side view
 *
 * @returns
 */
const Header = props => {
  const {
    headtitle,
    headtitleColor,
    onBackPress,
    rightView,
    search,
    rightIcon,
    typing,
    onTextInput,
  } = props;
  return (
    <View
      style={[
        styles.continer,
        typing && {height: 100, backgroundColor: COLORS.lightgray},
      ]}>
      {onBackPress && (
        <View style={styles.icon}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onBackPress?.();
            }}>
            <Feather name="arrow-left" color={COLORS.white} size={20} />
          </TouchableOpacity>
        </View>
      )}
      <View style={[styles.headerTitleView, typing && {height: 100}]}>
        {headtitle && (
          <Text
            style={[
              styles.headerTitle,
              headtitleColor && {color: headtitleColor},
            ]}
            numberOfLines={1}>
            {headtitle}
          </Text>
        )}
        {typing && (
          <TextInput
            style={styles.textInput}
            onTextInput={val => onTextInput(val)}
            autoFocus={true}
          />
        )}
      </View>
      {search && (
        <TouchableOpacity
          onPress={() => {
            search?.();
          }}
          style={[styles.icon, {marginRight: 30}]}>
          <Feather name="search" color={COLORS.white} size={20} />
        </TouchableOpacity>
      )}
      <View style={styles.icon}>
        <TouchableOpacity
          onPress={() => {
            rightView?.();
          }}>
          {rightIcon === 'Heart' && (
            <HeartIcon color={COLORS.lightGreen} clicked />
          )}
          {rightIcon === 'search' && (
            <Feather name="search" color={COLORS.white} size={20} />
          )}
          {rightIcon === 'close' && (
            <AntDesign name="close" color={COLORS.white} size={20} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
