import * as React from "react";
import TodoList from "../components/TodoList";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { todosData } from "../data/todos";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
    const [localData, setLocalData] = React.useState(
        todosData.sort((a, b) => { return a.isCompleted - b.isCompleted })
    );
    const [isHidden, setIsHidden] = React.useState(false);
    const navigation = useNavigation();

    const handLeHidePress = () => {
        if (isHidden) {
            setIsHidden(false)
            setLocalData(todosData.sort((a, b) => { return a.isCompleted - b.isCompleted }))
            return;
        }
        setIsHidden(!isHidden)
        setLocalData(localData.filter(todo => !todo.isCompleted))
    }

    return (
        <View style={styles.container}>
            <Image
                source={{ uri: "https://i.etsystatic.com/14746444/r/il/abd3a2/1765475722/il_fullxfull.1765475722_57ft.jpg" }}
                style={styles.pic}
            />
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <Text style={styles.title}>Today</Text>
                <TouchableOpacity onPress={handLeHidePress}>
                    <Text style={{ color: '#3478f6' }}>{isHidden ? "Show Completed" : "Hide Completed"}</Text>
                </TouchableOpacity>
            </View>

            <TodoList todosData={localData.filter(todo => todo.isToday)} />

            <Text style={styles.title}>Tomorrow</Text>
            <TodoList todosData={todosData.filter(todo => !todo.isToday)} />

            <TouchableOpacity onPress={() => navigation.navigate("Add")} style={styles.button}>
                <Text style={styles.plus}>+</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 70,
        paddingHorizontal: 15
    },
    pic: {
        width: 42,
        height: 42,
        borderRadius: 21,
        alignSelf: 'flex-end'
    },
    title: {
        fontSize: 34,
        fontWeight: 'bold',
        marginBottom: 35,
        marginTop: 10,
    },
    button: {
        width: 42,
        height: 42,
        borderRadius: 21,
        backgroundColor: '#000',
        position: 'absolute',
        bottom: 50,
        right: 35,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 5,
        shadowRadius: 5,
        elevation: 5,
    },
    plus: {
        fontSize: 40,
        color: '#fff',
        position: 'absolute',
        top: -9,
        left: 7,
    }
});
