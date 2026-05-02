import { createContext, useContext, useState } from "react";
import { Text, View } from "react-native";

const UserContext = createContext("");

export const UseContext = () => {
    const [userName, setName] = useState("Văn Tin");
    return(
        <View>
            <UserContext.Provider value={userName}>
                <ProfileComponent/>
            </UserContext.Provider>
        </View>
    );
}

const ProfileComponent = () => {
    return (
        <HeaderComponent/>
    );
}

const HeaderComponent = () => {
    return (
        <AvatarComponent/>
    );
}

const AvatarComponent = () => {
    const userName = useContext(UserContext);
    return(
        <View>
            <Text>{userName}</Text>
        </View>
    )
}