import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import HeartIcon from '../../Assets/Icons/Heart';
import {COLORS} from '../../Utils/theams';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
/**
 *
 * @param {props} headtitle - Header title
 * @param {props callback} onBackPress - onpress goback
 * @param {props} rightView - right side view 
 * 
 * @returns
 */
const Header = props => {
  const {headtitle, onBackPress, rightView} = props;
  return (
    <View style={styles.continer}>
      {onBackPress && (
        <View style={styles.icon}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              onBackPress?.();
            }}></TouchableOpacity>
        </View>
      )}
      <View style={styles.headerTitleView}>
        <Text style={styles.headerTitle}>{headtitle} The Breaking bad</Text>
      </View>
      <View style={styles.rightAlingView}>
        <TouchableOpacity style={[styles.icon]}>
          <Feather name="search" color={COLORS.white} size={20} />
        </TouchableOpacity>

        <View style={styles.icon}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              rightView?.();
            }}>
            <HeartIcon
              width={50}
              height={60}
              color={COLORS.lightGreen}
              clicked
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Header;
