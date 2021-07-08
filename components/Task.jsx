import React from 'react'
import {View , Text , StyleSheet } from 'react-native'



const  Task = ({text}) => {


    return (
        <View style={styles.todos}>
            <View style={styles.left}>
                <View style={styles.box}></View>
                <Text style={styles.title}>{text}</Text>
            </View>
            <View style={styles.circle}>

            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    todos:{
        backgroundColor:"#fff",
        padding:15,
        borderRadius:10,
        flexDirection : "row",
        alignItems: 'center',
        justifyContent:"space-between",
        marginBottom:20,
    },
    left:{
        flexDirection:'row',
        alignItems:'center',
        flexWrap: 'wrap',
    },
    box:{
        width: 24,
        height: 24,
        backgroundColor:'#55BCF6',
        opacity: 0.4,
        marginRight: 15,
        borderRadius: 5,        
    },
    title:{
        maxWidth:'80%',

    },
    circle:{
        width: 14,
        height: 14,
        borderColor:'#55BCF6',
        borderWidth:2,
        borderRadius:5,
    },
})



export default Task


    