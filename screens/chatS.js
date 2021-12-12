import React from 'react';
import { icons, images, SIZES, COLORS, FONTS } from '../constants'
import { Text, View, SafeAreaView, Image,FlatList, ScrollView ,TouchableOpacity,TextInput,RefreshControl} from "react-native";
import { useState   } from "react";


const chat = ({ navigation , route }) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [search, setSearch] = useState("");

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
        name: "IEEE",
        photo: images.ieee,
    },
    {
        id: 2,
        name: "Ala Saqa", 
        photo: images.ala,
    },
    {
        id: 3,
        name: "Oula Mardawi",
        photo: images.oula,
    },
    {
        id: 4,
        name: "Wala Saqa",
        photo: images.wala,
    },
    {
        id: 5,
        name: "GDG",
        photo: images.gdg,
    },
    {
        id: 6,
        name: "Layan Saqa",
        photo: images.layan,
    },
    {
        id: 7,
        name: "DSC",
        photo: images.dsc,
    },

]

function renderHeader() {
    return (
        <View style={{ flexDirection: 'row', height: 50 , marginBottom:'5%',backgroundColor:'white',marginTop:'2%' }}>
      
            <TouchableOpacity
                style={{
                    width: 50,
                    paddingLeft: SIZES.padding * 2,
                    justifyContent: 'center'
                }}
                onPress={() => navigation.replace("not",route.params)}
            >
            
            <Image
                    source={icons.bell}
                    resizeMode="contain"
                    style={{
                        width: 30,
                        height: 30,
                        tintColor:COLORS.primary,
                        paddingTop :'3%',

                    }}
                />
            </TouchableOpacity>

            
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' , flexDirection:'row'}}>
                    <View
                        style={{
                            width: '95%',
                            height: "85%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            borderRadius: SIZES.radius,
                            marginTop:"3%",
                            marginLeft:'3%',
                            flexDirection:'row',
                            marginBottom:"3%",
                            flex:1,
                           
                        }}
                    >
                        
                        <TextInput
                        style={{ ...FONTS.body3 , color:'#005e66' , paddingLeft:'3%',flex:4 }}
                        placeholder=" search "
                        placeholderTextColor="#005e66"
                        onChangeText={(search) => setSearch(search)}
                        />
                        <TouchableOpacity style={{alignSelf:'flex-end',
                        //backgroundColor:'gray',
                        width:40,height:40,borderRadius:25,alignContent:'center',justifyContent:'center',marginRight:'1%'}}
                        onPress={()=>navigation.replace('search',{item :route.params._id,s:search,type:'student'})}
                        >
                        <Image
                            source={icons.search}
                            resizeMode="contain"
                            style={{
                                width: 23,
                                height: 23,
                                tintColor: COLORS.primary,
                                alignSelf:'center'
                            }}
                        />
                        </TouchableOpacity>
                    </View>
                </View>
        </View>
    )
}

    function renderNot() {

        const renderItem = ({ item }) => (

            <TouchableOpacity
                style={{ //marginBottom: SIZES.padding * 2 ,
                backgroundColor:COLORS.white,
                borderTopWidth:1,
                borderColor:COLORS.secondary,
               // marginBottom:'2%',
               // padding:'5%',
                flexDirection:'row',
                height:100,
                justifyContent:'center',
                alignContent:'center'

                }}
                onPress={() => navigation.replace("conversation", {
                    item,
                })}
            >
            
                {/* Image */}
                
                <View
                    style={{
                        //marginBottom: SIZES.padding/2,
                        flex:1,
                        justifyContent:'center',
                        alignContent:'center'
                       
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
                    marginTop:'5%',
                    marginLeft:'10%',
                    flex:3,
                    justifyContent:'center',
                    alignContent:'center',
                }}>
                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 , color:COLORS.primary , flex:2,fontWeight:'bold', flexWrap:'wrap',marginTop:'-3%'}}>{item.name} </Text>
                <Text style={{ ...FONTS.body3 ,flex:2, flexWrap:'wrap',marginTop:'-3%',color:COLORS.secondary}}>
                Talk with {item.name}
                </Text>
                </View>
                <Image
                        source={icons.conversation}
                        resizeMode="contain"
                        style={{
                            width: 23,
                            height: 23,
                            tintColor: COLORS.primary,
                            marginTop:'5%',
                            flex:1,
                            
                        }}
                    />
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
        <View style={{
            flex:1,
            backgroundColor:COLORS.white
        }}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
        <SafeAreaView style ={{
            backgroundColor:'white'
        }}>
        {renderHeader()}
       { renderNot()}
       </SafeAreaView>
       </ScrollView>
       <View style={{
                backgroundColor:COLORS.transparent,
                width:'100%',
                height:45,
                alignContent:'center',
                justifyContent:'center',
                alignSelf:'center',
                alignItems:'center',
                margin:5,
                flexDirection:'row'

            
            }}>

<TouchableOpacity style={{
                    flex:2,
                    alignSelf:'center'
                }}
                onPress={()=>navigation.navigate('Home',route.params)}
                >
                    <Image
                            source={icons.homes}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor:COLORS.secondary,
                                alignSelf:'center'
                            }}
                        />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flex:2,
                    alignSelf:'center'
                }}
                onPress={()=>navigation.replace('communities',route.params)}
                >
                    <Image
                            source={icons.comms}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor:COLORS.secondary,
                                alignSelf:'center'
                            }}
                        />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flex:2,
                    alignSelf:'center'
                }}
                onPress={()=>navigation.replace('star',route.params)}
                >
                    <Image
                            source={icons.star}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor:COLORS.secondary,
                                alignSelf:'center'
                            }}
                        />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flex:2,
                    alignSelf:'center'
                }}
                onPress={()=>navigation.replace('eventwait',route.params)}
                >
                    <Image
                            source={icons.eventtime}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor:COLORS.secondary,
                                alignSelf:'center'
                            }}
                        />
                </TouchableOpacity>
                
                <TouchableOpacity style={{
                    flex:2,
                    height:55,
                    alignSelf:'center',
                    borderRadius:100,
                    //borderTopRightRadius:25,
                    alignContent:'center',
                    justifyContent:'center',
                  //  backgroundColor:COLORS.lightGray3
                }}>
                <Image
                            source={icons.conversation}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor:COLORS.primary,
                                alignSelf:'center'
                            }}
                        />
                </TouchableOpacity>
                <TouchableOpacity style={{
                    flex:2,
                    alignSelf:'center'
                }}
                onPress={()=>navigation.replace('studentProfile',route.params)}
                >
                    <Image
                            source={icons.user}
                            resizeMode="contain"
                            style={{
                                width: 25,
                                height: 25,
                                tintColor:COLORS.secondary,
                                alignSelf:'center'
                            }}
                        />
                </TouchableOpacity>
             </View>
</View>
       
    )}

export default chat;