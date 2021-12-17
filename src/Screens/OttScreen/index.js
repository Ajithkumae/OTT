import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {setLogin} from '../../Redux/Action/loginAction';

const OttScreen = () => {
  const dispatch = useDispatch();
  const {userToken} = useSelector((state) => state.loginReducer);
  const login = async () => {
    dispatch(setLogin());
  console.log('usertocken ', userToken);

  };
  return (
    <View style={{backgroundColor: 'red'}}>
      <TouchableOpacity onPress={() => login()}>
        <Text>OttScreen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OttScreen;
