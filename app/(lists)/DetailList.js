import { FlatList, Text, View } from "react-native";
const data = [
    { id: '1', title: 'Title 1' },
    { id: '2', title: 'Title 2' },
    { id: '3', title: 'Title 3' },
    { id: '4', title: 'Title 4' },
    { id: '5', title: 'Title 5' },
    { id: '6', title: 'Title 6' },
    { id: '7', title: 'Title 7' },
]

const renderItem = ({item}) => (
    <View style={{padding: 20, marginTop: 50, backgroundColor: 'blue'}}>
        <Text>{item.title}</Text>
    </View>
)

const DetailList = () => {
    return (
        <FlatList 
            data={data}
            renderItem={renderItem}
        />
    );
};

export default DetailList;
