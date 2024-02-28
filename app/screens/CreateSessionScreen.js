import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
console.log("Reached the point of generating an IOS log");

import axios from "axios";

const CreateSessionScreen = ({ navigation }) => {
  //Define UseState Variables
  const [groupType, setGroupType] = useState("");
  const [numberQuestions, setNumberQuestions] = useState("");
  const [numberVerses, setNumberVerses] = useState("");
  const [focusTopic, setFocusTopic] = useState("");
  const [bible, setBible] = useState("");
  const [isMounted, setIsMounted] = useState(true);

  const [apiResponse, setApiResponse] = useState("");
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  //Check component is properly mounted
  useEffect(() => {
    // Component did mount
    return () => {
      // Component will unmount
      setIsMounted(false);
    };
  }, []);

  //Function to Handle Submit
  const handleCreateSession = async () => {
    //Set Loading State
    setIsLoading(true);
    setError(null); // Reset error state before attempting the operation

    const session_focus = "";

    //Set Focus Topic
    if (focusTopic) {
      session_focus = "Focus the questions on the topic of " + focusTopic + ".";
    }

    try {
      const completion = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          messages: [
            {
              role: "system",
              content:
                "You are an experienced Christian Pastor that assists users in creating bible studies. Your job is to take the given instructions and generate relevant questions and verses and return it in JSON format",
            },
            {
              role: "user",
              content:
                "Generate 2 thought-provoking Bible Study questions for our family. Provide the question and 2 of the most relevant bible verses that help the group answer the question. Provide the bible text from the NIV bible. Focus the questions on the topic of difficult questions to answer as a christion.",
            },
            {
              role: "assistant",
              content:
                "{question: 'What is the meaning of life?', verses: [{title: 'Genesis 1:1', text: 'In the beginning, God created the heavens and the earth.'},{title: 'John 3:16', text: 'For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life.'}]},{question: 'Why do good people suffer?', verses: [{title: 'Job 1:1', text: 'There was a man in the land of Uz whose name was Job, and that man was blameless and upright, one who feared God and turned away from evil.'},{title: 'Romans 8:28', text: 'And we know that for those who love God all things work together for good, for those who are called according to his purpose.'}]}",
            },
            {
              role: "user",
              content: `Generate ${numberQuestions} thought-provoking Bible Study questions for ${groupType}. Provide the question and ${numberVerses} of the most relevant bible verses that help the group answer the question. Provide the bible text from the ${bible} bible. ${session_focus}`,
            },
          ],
          model: "gpt-4-0125-preview",
          response_format: { type: "json_object" },
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OpenAI_API_Key}`,
          },
        },
      );

      const question_data = completion.data.choices[0].message.content;

      if (isMounted) {
        navigation.navigate("ActiveSession", { questions: question_data });
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
      setError(
        "Failed to create session due to an error. Please check your network connection and try again.",
      );
      Alert.alert(
        "Error",
        "Failed to create session due to an error. Please check your network connection and try again.",
      );
    } finally {
      setIsLoading(false); // Ensure loading is stopped regardless of outcome
    }
  };

  return (
    <View style={styles.container}>
      //Error display
      {error ? <Text style={styles.errorMessage}>{error}</Text> : null}
      <Text style={styles.inputLabel}>Group Type</Text>
      <TextInput
        style={styles.input}
        onChangeText={setGroupType}
        value={groupType}
        placeholder="Enter Group Type (eg. Family)"
        placeholderTextColor="grey"
      />
      <Text style={styles.inputLabel}>Number of Questions</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setNumberQuestions}
        value={numberQuestions}
        placeholder="Enter Desired Number of Questions (eg. 3)"
        placeholderTextColor="grey"
      />
      <Text style={styles.inputLabel}>Number of Verses per Question</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        onChangeText={setNumberVerses}
        value={numberVerses}
        placeholder="Enter Desired Number of Verses per Question (eg. 5)"
        placeholderTextColor="grey"
      />
      <Text style={styles.inputLabel}>Focus Topic (Optional)</Text>
      <TextInput
        multiline
        numberOfLines={2}
        style={styles.input}
        onChangeText={setFocusTopic}
        value={focusTopic}
        placeholder="Enter Focus Topic (eg. Forgiveness) (Leave Blank for Program to Select Suitable Topic)"
        placeholderTextColor="grey"
      />
      <Text style={styles.inputLabel}>Preferred Bible</Text>
      <TextInput
        style={styles.input}
        onChangeText={setBible}
        value={bible}
        placeholder="Enter Preferred Bible (eg. NIV)"
        placeholderTextColor="grey"
      />
      <TouchableOpacity style={styles.button} onPress={handleCreateSession}>
        <Text style={styles.buttonText}>Create Session</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    padding: 10,
  },
  inputLabel: {
    fontSize: 13,
    marginTop: 10,
    marginBottom: 10,
  },
  input: {
    paddingVertical: 4,
    borderColor: "#444444",
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    color: "grey",
  },
  button: {
    backgroundColor: "#444444",
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontSize: 16,
  },
  errorMessage: {
    color: "red", // Make the error message stand out
    fontSize: 16,
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
});

export default CreateSessionScreen;
