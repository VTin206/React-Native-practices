import { Store } from "@/store";
import { Button, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./slices/counterSlice";

export const CounterExample = () => {
    const count = useSelector((state: Store) => state.counter.value);
    const dispatch = useDispatch();
    return (
        <View>
            <Text style={{fontSize: 30}}>{count}</Text>
            <Button
                title='+'
                onPress={() => dispatch(increment())}
            />
            <Button
                title='-'
                onPress={() => dispatch(decrement())}
            />
        </View>
    );

}