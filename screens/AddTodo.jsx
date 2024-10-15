import * as React from "react";
import { StyleSheet, Platform, View, Text, TextInput, Switch } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { TouchableOpacity } from "react-native";

// Para la web, usa un input nativo HTML de tipo "time"
const WebTimePicker = ({ value, onChange }) => {
  const handleChange = (event) => {
    const selectedTime = event.target.value;
    const [hours, minutes] = selectedTime.split(":");
    const newDate = new Date();
    newDate.setHours(hours, minutes);
    onChange(null, newDate);
  };

  return (
    <input
      type="time"
      value={value.toTimeString().slice(0, 5)}
      onChange={handleChange}
      style={{ width: '80%', padding: 5, fontSize: 16 }}
    />
  );
};

export default function AddTodo() {
  const [name, setName] = React.useState("");
  const [date, setDate] = React.useState(new Date());
  const [isToday, setIsToday] = React.useState(false);

  return (
    <View style={styles.container}>

      <Text style={styles.title}>Add Task</Text>
      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Name</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Task"
          placeholderTextColor="#00000030"
          onChangeText={(text) => setName(text)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Hour</Text>
        {Platform.OS === "web" ? (
          // Usar el componente alternativo en web
          <WebTimePicker
            value={date}
            onChange={(event, selectedDate) => setDate(selectedDate)}
          />
        ) : (
          // Usar DateTimePicker en dispositivos móviles
          <DateTimePicker
            value={date}
            mode={"time"}
            is24Hour={true}
            onChange={(event, selectedDate) => setDate(selectedDate)}
            style={{ width: "80%" }}
          />
        )}
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.inputTitle}>Today</Text>
        <Switch
        value={isToday}
        onValueChange={(value) => {setIsToday(value)}}
        />
      </View>

      <TouchableOpacity style={styles.button}>
            <Text style={{color: 'white'}}>Done</Text>
        </TouchableOpacity>
        <Text style={{color: '#00000060'}}>If you disable today, the task will be considered as tomorrow</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f7F8FA",
    paddingHorizontal: 30,
  },
  title: {
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 35,
    marginTop: 10,
  },
  inputTitle: {
    fontSize: 20,
    fontWeight: "600",
    lineHeight: 24,
  },
  textInput: {
    borderBottomColor: "#00000030",
    borderBottomWidth: 1,
    width: "80%",
  },
  inputContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    paddingBottom: 30,
  },
  button: {
    marginTop: 30,
    marginBottom: 15,
    alignItems:'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    height: 46,
    borderRadius: 11,
  }
});
