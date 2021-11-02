import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'
import { ListItem, Avatar } from 'react-native-elements'

class CourseItem extends React.Component {
  render() {
    console.log(this.props);
    const course = this.props.course
    return (
      <View style={styles.main_container}>
          <ListItem style={styles.listItem} bottomDivider>
            <Avatar rounded style={styles.image} source={{uri: "image"}}/>
            <ListItem.Content>
              <ListItem.Title style={styles.title}>{course.clientId}</ListItem.Title>
              <ListItem.Subtitle>{course.chauffeurId}</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Chevron/>
          </ListItem>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    marginVertical: 5,
    marginHorizontal: 16,
  },
  image: {
    width: 35,
    height: 35,
    margin: 5,
    borderRadius: 200,
  },
  listItem: {
    backgroundColor: 'red',
    borderRadius: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#000000',
    flexWrap: 'wrap'
  },
  text: {
    fontWeight: '100',
    fontSize: 10,
    color: '#5F6364' 
  }
})

export default CourseItem