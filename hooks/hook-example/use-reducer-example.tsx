import { useReducer } from "react";
import { Button, Text, View } from "react-native";

const initialTodos = [
    {
        id: 1,
        title: "todo 1",
        complete: true
    },
    {
        id: 2,
        title: "todo 2",
        complete: false
    },
    {
        id: 3,
        title: "todo 3",
        complete: true
    },
    {
        id: 4,
        title: "todo 4",
        complete: false
    },
]

const reducer = (state: any, action: any) => {
    switch(action.type) {
        case "COMPLETE":
            return (state.map((t: any) => {
                if(action.id === t.id) {
                    return {...t, complete: !t.complete}
                } else {
                    return t;
                }
            }))
        default:
            return state;
    }
}
export const UseReducer = () => {
    const [todos, dispatch] = useReducer(reducer ,initialTodos);
    const handleComplete = (todo: any) => {
        dispatch({type: "COMPLETE", id: todo.id})
                // let newTodo = todos.map((t: any) => {
                //     if(todo.id === t.id) {
                //         return {...t, complete: !todo.complete}
                //     } else {
                //         return t;
                //     }
                // })
                // setTodos(newTodo);
    }
    return(
        <View>
            {
            todos.map((todo: any) => (
                <View key={todo.id} style={{backgroundColor: todo.complete ? 'green' : 'red', flexDirection:'row'}}>
                    
                    <View style={{width: '10%'}}>
                        <Button
                        title={todo.complete?"Uncomplete":"Complete"}
                        onPress={() => {
                            handleComplete(todo);
                        }}
                        />
                    </View>
                    <Text>{todo.title}</Text>
                </View>
            ))
            }
        </View>
    )
}