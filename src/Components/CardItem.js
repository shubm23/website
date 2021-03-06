import React from 'react';
import {View,StyleSheet} from 'react-native';

const CardItem = (props) =>{
    return(
        <View style={styles.cardcontainer}>
        {props.children}
        </View>
    );
}
const styles = StyleSheet.create({
    cardcontainer: {
        borderBottomWidth:1,
        padding:5,
        backgroundColor:'#fff',
        width: 400,
        flexDirection:'row',
        borderColor:'#ddd',
       position:'relative'
    }
});

export {CardItem};