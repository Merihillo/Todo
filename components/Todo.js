import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native-web';
import CheckBox from './Checkbox';

export default function Todo({
    id,
    text,
    isCompleted,
    isToday,
    hour
}) {
    return (
        <View style={styles.container}>
            <CheckBox
                id={id}
                text={text}
                isCompleted={isCompleted}
                isToday={isToday}
                hour={hour}
            />
            <View>
                <Text style={
                    isCompleted
                        ? [styles.text, {
                            textDecorationLine: 'line-through',
                            color: '#73737370'
                        }]
                        : styles.text
                }>{text}</Text>
                <Text style={
                    isCompleted
                        ? [styles.time, {
                            textDecorationLine: 'line-through',
                            color: '#73737370'
                        }]
                        : styles.time
                }>{hour}</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        /*  justifyContent: 'space-between', */
    },
    text: {
        fontSize: 15,
        fontWeight: '500',
        color: '#737373'
    },
    time: {
        fontSize: 13,
        fontWeight: 'a3a3a3',
        color: '#737373'
    }
})