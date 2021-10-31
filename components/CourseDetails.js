import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class Home extends React.Component {
    render() {
        return(
            <View style={styles.main_container}></View>
        )
    }
}

const styles = StyleSheet.create({
    main_container: {
        marginTop: 50,
        flex: 1
    },
})

export default CourseDetails