import React from 'react';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import { StyleSheet, Text, View, SafeAreaView, Image,FlatList, ScrollView ,TouchableOpacity,TextInput,RefreshControl} from "react-native";
import { useState   } from "react";




const not = ({ navigation }) => {
   
    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
      setRefreshing(true);
      wait(2000).then(() => setRefreshing(false));
    }, []);
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
      }
    const Notification =[
    {
        id: 1,
        name: "Think Like a Programmer",
        people: 16,// num of att 
        commName: 'IEEE', // comm  
        photo: images.think,
    },
    {
        id: 2,
        name: "IEEE Xtreme",
        people: 15,// num of att 
        commName: 'IEEE', // comm  
        photo: images.xtreme,
    },
    {
        id: 3,
        name: "Devfest",
        people: 50,// num of att 
        commName:'GDG', // comm  
        photo: images.devfest,
    },
    {
        id: 4,
        name: "Think Like a Programmer",
        people: 16,// num of att 
        commName: 'IEEE', // comm  
        photo: images.think,
    },
    {
        id: 5,
        name: "IEEE Xtreme",
        people: 15,// num of att 
        commName: 'IEEE', // comm  
        photo: images.xtreme,
    },
    {
        id: 6,
        name: "Devfest",
        people: 50,// num of att 
        commName:'GDG', // comm  
        photo: images.devfest,
    },
    {
        id: 7,
        name: "Think Like a Programmer",
        people: 16,// num of att 
        commName: 'IEEE', // comm  
        photo: images.think,
    },
    {
        id: 8,
        name: "IEEE Xtreme",
        people: 15,// num of att 
        commName: 'IEEE', // comm  
        photo: images.xtreme,
    },
    {
        id: 9,
        name: "Devfest",
        people: 50,// num of att 
        commName:'GDG', // comm  
        photo: images.devfest,
    },

]

function renderHeader() {
    return (
        <View style={{ flexDirection: 'row', height: 50 , marginBottom:'5%',backgroundColor:'white' ,marginTop:'2%'}}>
        <TouchableOpacity
                style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
                onPress={() => navigation.goBack()}
            >
            
            <Image
                    source={icons.next}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        tintColor:COLORS.primary,
                        paddingTop :'3%',

                    }}
                />
            </TouchableOpacity>

           
        </View>
    )
}

    function renderNot() {

        const renderItem = ({ item }) => (

            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 ,
                backgroundColor:COLORS.lightGray3,
                marginLeft:'-3%',
                marginRight:'-3%',
                borderRadius:35,
                padding:'5%',
                flexDirection:'row',
                height:100,
                justifyContent:'center',
                alignContent:'center',
                borderWidth:1,
                borderColor:COLORS.secondary,
                marginBottom:'2%'
                }}
                onPress={() => navigation.navigate("eventPage", {
                    item,
                })}
            >
            
                {/* Image */}
                
                <View
                    style={{
                        //marginBottom: SIZES.padding/2,
                        flex:1,
                        justifyContent:'center',
                        alignContent:'center',
                        left:-10,
                        
                       
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: 75,
                            height: 75,
                            borderRadius: 50,
                            //flex:1,
                        }}
                    />

                </View>
                <View style={{
                    flex:3,
                    justifyContent:'center',
                    alignContent:'center',
                }}>
                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 , color:COLORS.primary , flex:2,fontWeight:'bold', flexWrap:'wrap',marginTop:'-3%'}}>{item.name} </Text>
                <Text style={{ ...FONTS.body3 ,flex:2, flexWrap:'wrap',marginTop:'-3%'}}>
                {item.people} Joined {item.commName} Community
                </Text>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={Notification}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: "30%"
                }}
            />
        )
    }
    return (

        <SafeAreaView style ={{
            backgroundColor:'white'
        }}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
        >
        {renderHeader()}
       { renderNot()}
       </ScrollView>
       </SafeAreaView>
    )}
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: COLORS.lightGray4
        },
        shadow: {
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 3,
            },
            shadowOpacity: 0.1,
            shadowRadius: 3,
            elevation: 1,
        },
       
       
    })
export default not;