import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList, Image, TouchableHighlight } from 'react-native'
// import courses from '../Helpers/courseData'
import CourseItem from '../Helpers/courseItem'
import { Avatar, Badge, Icon, withBadge } from 'react-native-elements'
import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi'
const axios = require('axios').default;

const url = "https://jsonplaceholder.typicode.com/posts/1";
const myUrl = "https://bencozem2.herokuapp.com/api/course";

let dataTr = "basic";

class Wallet extends React.Component {

    constructor(props) {
      super(props)
      this.state = { films: [] }
      this.testAxios()
    }

    testAxios =  async () => {
      try {
        await axios({
          method: 'GET',
          url: url,
          timeout: 3000,
          headers: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }
        }).then(function (response) {
          // alert(JSON.stringify(response.data));
    
          dataTr = response.data.title;
          console.log("Data ", dataTr);
    
        })
        .catch(function (error) {
          // alert(error.message);
          console.log("Error in axios", error);
          // return "error axios";
        });
          // return "ok axios";
    
      } catch (error) {
        alert(error.message);
        return "error axios";
      }
    };
    
    _loadFilms() {
      getFilmsFromApiWithSearchedText("star").then(data => this.setState({ films: data.results }));
    }

    render() {
        return (
      <View style={styles.main_container}>
        
        <View style={{ flex: 1, flexDirection: 'row'}}>
            <View style={{ flex: 6,}}>
                <Text style={styles.title}>Hello</Text> 
                <Button title='Rechercher' onPress={() => this._loadFilms()}/>
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
                    containerStyle={{ position: 'absolute', top: -4 }}
                />
            </View>
        </View>

        <View style={{ flex: 2}}>
            <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                <Text>Solde actuel</Text> 
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center'}}>
                <Text style={styles.solde}>85000 CFA</Text> 
            </View>
        </View>

        <View style={{ flex: 3, flexDirection: 'row', justifyContent: 'center'}}>
          <TouchableHighlight onPress={this.onPress}>
            <View style={styles.button_wallet1}>
              <Text style={styles.text_button}>Dépot</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight onPress={this.onPress}>
            <View style={styles.button_wallet2}>
              <Text style={styles.text_button}>Retrait</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.releve}>
          <Text style={styles.title_releve}>TRANSACTIONS RECENTES</Text>
          <Text style={styles.title_releve}>test zone : {dataTr}</Text>
          <FlatList
            style={styles.list_releve}
            data={this.state.films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <CourseItem course={item}/>}
          />
        </View>
      </View>
        )
    }
}

const styles = StyleSheet.create({
    button_wallet1: {
        margin: 10,
        backgroundColor: '#17C261',
        borderRadius: 10,
        alignItems: "center",
        padding: 30,
        width: 150
    },
    button_wallet2: {
        margin: 10,
        backgroundColor: '#FF883F',
        borderRadius: 10,
        alignItems: "center",
        padding: 30,
        width: 150
    },
    title_releve: {
        alignItems: 'center',
        marginLeft: 20,
        paddingBottom: 7,
        color: '#ffffff',
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
    solde: {
        alignItems: 'center',
        color: '#000000',
        fontWeight: 'bold',
        fontSize: 30,
        padding: 10
      },
      text_button: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18
      },
    main_container: {
        marginTop: 50,
        flex: 1
    },
    releve: {
        backgroundColor: '#022047',
        flex: 4,
        padding: 0,
        paddingTop: 30,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    textinput: {
      marginLeft: 5,
      marginRight: 5,
      height: 50,
      borderColor: '#000000',
      borderWidth: 1,
      paddingLeft: 5
  }
})

export default Wallet