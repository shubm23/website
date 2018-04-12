import React from 'react';
import {Text,View,StyleSheet} from 'react-native';

const Card = (props) =>{
    return(
        <View style={styles.cardcontainer}>
            <Text>{props.children}</Text>
        </View>
    );
    
}
const styles = StyleSheet.create({
    cardcontainer: {
      borderWidth: 1,
      borderRadius: 2,
      borderColor: '#ddd',
      borderBottomWidth: 0,
      shadowColor: '#000',
      shadowOffset: {width: 0,height: 1},
      shadowOpacity:0.1,
      shadowRadius:2,
      elevation: 1,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 10,
      
      }
});
export {Card};