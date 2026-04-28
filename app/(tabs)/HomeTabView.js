import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

const firstRoute = () => (
    <View style={[styles.sence, {backgroundColor: 'red'}]}>
        <Text>First Route</Text>
    </View>
);

const secondRoute = () => (
    <View style={[styles.sence, {backgroundColor: 'green'}]}>
        <Text>Second Route</Text>
    </View>
);

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabView = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'first', title: 'First'},
        {key: 'second', title: 'Second'}
    ]);
    const renderScene = SceneMap({
        first: firstRoute,
        second: secondRoute
    })
    return (
        <TabView 
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={initialLayout}
        />
    )
}

export default HomeTabView;

const styles = StyleSheet.create({
    sence: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});
