import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';

type DetailItem = {
  id: string;
  title: string;
};

const data: DetailItem[] = [
  { id: '1', title: 'Title 1' },
  { id: '2', title: 'Title 2' },
  { id: '3', title: 'Title 3' },
  { id: '4', title: 'Title 4' },
  { id: '5', title: 'Title 5' },
  { id: '6', title: 'Title 6' },
  { id: '7', title: 'Title 7' },
];

const renderItem: ListRenderItem<DetailItem> = ({ item }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{item.title}</Text>
  </View>
);

export default function DetailList() {
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'blue',
    marginBottom: 12,
    padding: 20,
  },
  list: {
    padding: 16,
    paddingTop: 50,
  },
  title: {
    color: 'white',
  },
});
