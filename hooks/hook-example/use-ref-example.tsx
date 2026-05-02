import { useEffect, useRef, useState } from "react";
import { Text, TextInput, View } from "react-native";
export const UseRef = () => {
    const [inputValue, setInputValue] = useState("");
    const count = useRef(0);
    useEffect(() => {
        count.current += 1;
    }, [inputValue]);
    return (
        <View>
            <Text>{count.current}</Text>
            <TextInput
                value={inputValue}
                onChangeText={(val) => {setInputValue(val)}}
            />
        </View>
    );
}