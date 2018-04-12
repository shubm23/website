//Import a library to help a component
import React from 'react';
import { View,Text, StyleSheet} from 'react-native';
//Make The Component
const Header = (props) =>{
return (
    <View style={styles.viewpoint}>
        <Text style={styles.header}>{props.headerText}</Text>

    </View>
    );
};

const styles = StyleSheet.create({
    header: {
        color:'#00bfff',
        fontSize: 20
    },
    viewpoint:{
        backgroundColor:'#f1f1f1',
        width:'100%',
        height:40,
        marginTop:20,
        justifyContent:'center',
        alignItems:'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.4,
        elevation: 2,
        position:'relative'
    }
});

//Make the Component to be available everywhere
export {Header};