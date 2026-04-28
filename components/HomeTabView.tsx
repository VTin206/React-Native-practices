import * as React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { SceneMap, TabView } from 'react-native-tab-view';

const FirstRoute = () => (
  <View style={[styles.scene, styles.firstScene]}>
    <Text>First Route</Text>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene, styles.secondScene]}>
    <Text>Second Route</Text>
  </View>
);

const initialLayout = { width: Dimensions.get('window').width };

export default function HomeTabView() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'First' },
    { key: 'second', title: 'Second' },
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  return (
    <TabView
      initialLayout={initialLayout}
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

const styles = StyleSheet.create({
  firstScene: {
    backgroundColor: 'red',
  },
  scene: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
  },
  secondScene: {
    backgroundColor: 'green',
  },
});
