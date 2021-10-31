import React from 'react'
import { View, TextInput, Text, StyleSheet, ActivityIndicator, TouchableHighlight } from 'react-native'
import { Avatar, Badge, Icon, Image, Button } from 'react-native-elements'
import { color } from 'react-native-elements/dist/helpers'

class Home extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <View style={{ flex: 1, flexDirection: 'row'}}>
                    <View style={{ flex: 6,}}>
                        <Text style={styles.title}>Hello</Text> 
                    </View>
                    <View style={{ flex: 1,}}>
                        <Avatar
                            rounded
                            source={{
                            uri: 'https://randomuser.me/api/portraits/men/41.jpg',
                            }}
                            size="small"
                        />
                        <Badge
                            status="success"
                            containerStyle={{ position: 'absolute', top: -4,}}
                        />
                    </View>
                </View>

                <View style={{ flex: 2, paddingLeft: 20, paddingRight: 20}}>
                  <Image
                    source={{ uri: 'https://i.imgur.com/ZSJJiyX.png' }}
                    style={{ height: 125, padding: 30, borderRadius: 15}}
                    PlaceholderContent={<ActivityIndicator />}
                  />
                </View>

                <View style={{ flex: 2, flexDirection: 'row', justifyContent: 'center', margin: 30, paddingTop: 20}}>
                    <TouchableHighlight onPress={this.onPress}>
                        <View style={styles.button_wallet2}>              
                        <Icon
                        name='bus'
                        type='ionicon'
                        color='#fff'
                        />
                        <Text style={styles.text_button}>Courses</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.onPress}>
                        <View style={styles.button_wallet2}>              
                        <Icon
                        name='cash'
                        type='ionicon'
                        color='#FFF'
                        />
                        <Text style={styles.text_button}>Solde</Text>
                        </View>
                    </TouchableHighlight>
                    <TouchableHighlight onPress={this.onPress}>
                        <View style={styles.button_wallet2}>              
                        <Icon
                        name='book'
                        type='ionicon'
                        color='#fff'
                        />
                        <Text style={styles.text_button}>Relevé</Text>
                        </View>
                    </TouchableHighlight>
                </View>

                <View style={styles.releve}>
                    <Text style={styles.title_releve}>OÙ ALLEZ-VOUS?</Text>
                    <TextInput style={styles.textinput} placeholder='Départ'/>
                    <TextInput style={styles.textinput} placeholder='Arrivée'/>
                    <TextInput style={styles.textinput} placeholder='Numéro conducteur'/>
                    <Button
                    buttonStyle={styles.button1}
                    title="Démarrer une course"
                    titleStyle={styles.button_tittle}
                    iconPosition="right"
                    icon={
                        <Icon
                          name="arrow-forward"
                          size={40}
                          color="#43B129"
                        />
                    }
                    />
                </View>

            </View>
        )
    }
}

const styles = StyleSheet.create({

    main_container: {
        marginTop: 50,
        flex: 1
    },
    button_wallet2: {
        margin: 5,
        backgroundColor: '#022047',
        borderRadius: 10,
        alignItems: "center",
        padding: 25,
        width: 120,
        height: 80
    },
    title_releve: {
        alignItems: 'center',
        marginLeft: 20,
        paddingBottom: 7,
        color: '#303030',
        fontWeight: 'bold',
        fontSize: 16
    },
    title: {
        alignItems: 'center',
        marginLeft: 20,
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 20
      },
    text_button: {
        color: '#fff',
        fontWeight: '500',
        fontSize: 13
    },
    button1: {
        backgroundColor: '#022047',
        height:60,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 40
    },
    releve: {
        backgroundColor: '#D7F0FC',
        flex: 7,
        padding: 0,
        paddingTop: 25,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    textinput: {
      marginLeft: 20,
      marginRight: 20,
      marginTop: 10,
      height: 60,
      borderRadius: 15,
      paddingLeft: 5,
      backgroundColor: 'white'
  },
  button_tittle: {
      fontWeight: "bold",
      marginRight: 7
  }

})

export default Home