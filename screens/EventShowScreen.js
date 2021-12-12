import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar,
    ImageBackground,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { useTheme } from 'react-native-paper';
import CountDown from 'react-native-countdown-component';
import { ScrollView } from 'react-native-gesture-handler';
const EventShowScreen = ({navigation,route}) => {
    const event = route.params.event;
    const _id = route.params.userId;
    
      const { colors } = useTheme();

    return (
        <ImageBackground source={{uri:event.imag}} style={styles.container}>
        <StatusBar backgroundColor='#005e66' barStyle="light-content"/>
     
      
      <CountDown
      style={{marginTop:70,marginBottom:70}}
      size={25}
      until={60 * 60 * 60 * 1 + 60 * 60 * 1 + 60 * 1}
      onFinish={() => alert('finished')}
      onPress={() => alert('hello')}
      timeLabelStyle={{color: 'white'}}
      digitStyle={{backgroundColor: '#FFF'}}
      digitTxtStyle={{color: '#000'}}
    /> 
    
        
        
      <Animatable.View 
          animation="fadeInUpBig"
          style={[styles.footer, {
              backgroundColor: colors.background
            
          }]}
      >
      <ScrollView 
      showsVerticalScrollIndicator={false}>
          <View style={styles.action}>
          <Text style={[styles.text_header, {
              color: colors.text,
              marginBottom:10
          }]}>{event.name}
              </Text>
            </View>
            
          <View style={styles.action}>
              <FontAwesome 
                  name="calendar"
                  color='#c4c8cf'
                  size={24}       
              />
              <Text>
              <Text style={[styles.text_footer1, {
              color: colors.text,
              marginBottom:50       
          }]}>{'  '} {event.startDate} - {event.endDate} </Text>

              <Text  style={[styles.text_footer2, {
           }]}> {'\n   '}  {event.startDateTime} - {event.endDateTime}
                  </Text>
              
              </Text>
          </View>
     
          <View style={styles.action}>
              <FontAwesome 
                  name="map-marker"
                  color='#c4c8cf'
                  size={30}       
              />
              <Text>
              <Text style={[styles.text_footer1, {
              color: colors.text,
              marginBottom:50       
          }]}>    Collage Number {event.selVal}</Text>

              <Text  style={[styles.text_footer2, {
           }]}>  {'\n    '}  Hall Number {event.place}
                  </Text>
              
              </Text>
          </View>

          <View style={styles.action}>
              <FontAwesome 
                  name="microphone"
                  color='#c4c8cf'
                  size={30}       
              />
              <Text>
              <Text style={[styles.text_footer1, {
              color: colors.text,
              marginBottom:50       
          }]}>   {event.speaker1}  </Text>

              <Text  style={[styles.text_footer2, {
           }]}> {'\n    '} {event.info1}
                  </Text>
              
              </Text>
          </View>

           {event.speaker2!=""&&(
               
          <View style={styles.action}>
              <FontAwesome 
                  name="microphone"
                  color='#c4c8cf'
                  size={30}       
              />
              <Text>
              <Text style={[styles.text_footer1, {
              color: colors.text,
              marginBottom:50       
          }]}>   {event.speaker2}  </Text>

              <Text  style={[styles.text_footer2, {
           }]}> {'\n    '} {event.info2}
                  </Text>
              
              </Text>
          </View>
           )}
           {event.speaker3!=""&&(
               
               <View style={styles.action}>
                   <FontAwesome 
                       name="microphone"
                       color='#c4c8cf'
                       size={30}       
                   />
                   <Text>
                   <Text style={[styles.text_footer1, {
                   color: colors.text,
                   marginBottom:50       
               }]}>   {event.speaker3}  </Text>
   
                   <Text  style={[styles.text_footer2, {
                }]}> {'\n    '} {event.info3}
                       </Text>
                   
                   </Text>
               </View>
                )}
              {event.speaker4!=""&&(
               
               <View style={styles.action}>
                   <FontAwesome 
                       name="microphone"
                       color='#c4c8cf'
                       size={30}       
                   />
                   <Text>
                   <Text style={[styles.text_footer1, {
                   color: colors.text,
                   marginBottom:50       
               }]}>   {event.speaker4}  </Text>
   
                   <Text  style={[styles.text_footer2, {
                }]}> {'\n    '} {event.info4}
                       </Text>
                   
                   </Text>
               </View>
                )}
         
              <Text style={{color: '#000', marginTop:20, fontWeight: "bold", fontSize: 17}}>About</Text>
              <Text style={{color: '#000000', marginTop:4, fontSize: 15}}>
            {event.des}
            </Text>
            <View style={styles.button}>
                <TouchableOpacity
                    style={styles.signIn}
                    onPress={()=>navigation.replace('eventPage',{userId:_id,event:event})}
                >
                <LinearGradient
                    colors={['#005e66', '#005e70']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>View Event</Text>
                </LinearGradient>
                </TouchableOpacity>

                
            </View>
            </ScrollView>
      </Animatable.View>
    </ImageBackground>
    );
};

export default EventShowScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1, 
      backgroundColor: '#005e66'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: 2.5,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 15
    },
    text_header: {
        color: '#005e66',
        fontWeight: 'bold',
        fontSize: 20,
    },
    text_footer1: {
        color: '#05375a',
        fontSize: 17,
   
     //   fontFamily: 'ZenKurenaido-Regular'


    },
    text_footer2: {
        color: '#666666',
        fontSize: 12,     
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        paddingBottom: 5,
       // borderBottomWidth: 1,
      //  borderBottomColor: '#f2f222',
      
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,

        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
    },
    errorMsg: {
        color: '#FF0000',
        fontSize: 14,
    },
    button: {
        alignItems: 'center',
        marginTop: 40
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginTop: 7,
        marginBottom:50
       
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });
