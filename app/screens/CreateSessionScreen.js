import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from "react-native";
// import { OpenAI } from 'openai';

// const { Configuration, OpenAIApi } = require('openai');

// const configuration = new Configuration({
//   apiKey: '',
// });

const sampleQuestion = [
  ({
    question: "What is the nature of God's love?",
    verses: [
      {
        title: "1 John 4:8",
        text: "Whoever does not love does not know God, because God is love.",
      },
      {
        title: "Romans 5:8",
        text: "But God demonstrates his own love for us in this: While we were still sinners, Christ died for us.",
      },
      {
        title: "Ephesians 2:4-5",
        text: "But because of his great love for us, God, who is rich in mercy, made us alive with Christ even when we were dead in transgressions—it is by grace you have been saved.",
      },
      {
        title: "Zephaniah 3:17",
        text: "The Lord your God is with you, the Mighty Warrior who saves. He will take great delight in you; in his love he will no longer rebuke you, but will rejoice over you with singing.",
      },
    ],
  },
  {
    question: "How should Christians handle worry and anxiety?",
    verses: [
      {
        title: "Philippians 4:6-7",
        text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God. And the peace of God, which transcends all understanding, will guard your hearts and your minds in Christ Jesus.",
      },
      {
        title: "Matthew 6:25-27",
        text: "Therefore I tell you, do not worry about your life, what you will eat or drink; or about your body, what you will wear. Is not life more than food, and the body more than clothes? Look at the birds of the air; they do not sow or reap or store away in barns, and yet your heavenly Father feeds them. Are you not much more valuable than they?",
      },
      {
        title: "1 Peter 5:7",
        text: "Cast all your anxiety on him because he cares for you.",
      },
      {
        title: "Psalm 55:22",
        text: "Cast your cares on the Lord and he will sustain you; he will never let the righteous be shaken.",
      },
    ],
  }),
];

// const openai = new OpenAIApi(configuration);

const CreateSessionScreen = ({ navigation }) => {
  const [groupType, setGroupType] = useState("");
  const [numberQuestions, setNumberQuestions] = useState("");
  const [numberVerses, setNumberVerses] = useState("");
  const [focusTopic, setFocusTopic] = useState("");
  const [bible, setBible] = useState("");

  const [apiResponse, setApiResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const sampleResult =
    '{question: "What is the meaning of life?", verses: [{title: "Genesis 1:1", text: "In the beginning, God created the heavens and the earth."},{title: "John 3:16", text: "For God so loved the world, that he gave his only Son, that whoever believes in him should not perish but have eternal life."}]},{question: "Why do good people suffer?", verses: [{title: "Job 1:1", text: "There was a man in the land of Uz whose name was Job, and that man was blameless and upright, one who feared God and turned away from evil."},{title: "Romans 8:28", text: "And we know that for those who love God all things work together for good, for those who are called according to his purpose."}]}';

  const handleCreateSession = async (e) => {
    e.preventDefault();
    setLoading(true);

    var currentPrompt =
      "Act as an experienced Christian Pastor. Generate " +
      numberQuestions.toString() +
      " of thought-provoking Bible Study questions for our " +
      groupType +
      ". Provide the question and " +
      numberVerses.toString() +
      " of the most relevant bible verses that help the group answer the question. Provide the bible text from the " +
      bible +
      " bible. If {{FocusTopic}} has a value, focus the questions on that specified topic. Provide the response in data array in the same format as the {{SampleResult}} but obviously customise it to have the correct number of questions and verses per question. Make sure not to add quotation marks to the variable names. Provide only the response no extra text or explanation. Provide the response as .txt code. SampleResult = (" +
      sampleResult +
      "). FocusTopic = (" +
      focusTopic +
      ")";

    //   try {
    //     const result = await openai.createCompletion({
    //       model: "text-davinci-003",
    //       messages: [{role: 'user', content: prompt}],
    //       temperature: 0.5,

    //     });
    //     console.log("response", result.data.choices[0].message);
    //     setApiResponse(result.data.choices[0].text);
    //   } catch (e) {
    //     console.log(e);
    //     setApiResponse("Something is going wrong, Please try again.");
    //    }

    console.log(currentPrompt);
    setLoading(false);

    navigation.navigate("ActiveSession", { questions: sampleQuestion });
  };

  return (
    <View style={styles.container}>
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
        inputMode="numeric"
        style={styles.input}
        onChangeText={setNumberQuestions}
        value={numberQuestions}
        placeholder="Enter Desired Number of Questions (eg. 3)"
        placeholderTextColor="grey"
      />

      <Text style={styles.inputLabel}>Number of Verses per Question</Text>
      <TextInput
        multiline
        numberOfLines={2}
        inputMode="numeric"
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
});

export default CreateSessionScreen;
