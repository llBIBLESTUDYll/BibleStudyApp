import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const BibleStudySessionScreen = ({ route }) => {
  const { questions } = route.params;
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [expandedVerseIndex, setExpandedVerseIndex] = useState(null);

  const handleVersePress = (index) => {
    if (expandedVerseIndex === index) {
      setExpandedVerseIndex(null);
    } else {
      setExpandedVerseIndex(index);
    }
  };

  return (
    <View style={styles.container}>

      {/* Header */}
      <Text style={styles.header}>
        QUESTION {currentQuestionIndex + 1}/{questions.length}
      </Text>

      {/* Current Question */}
      <View style={styles.questionBox}>
        <Text style={styles.questionText}>
          {questions[currentQuestionIndex].question}
        </Text>
      </View>

      {/* Verses List */}
      {questions[currentQuestionIndex].verses.map((verse, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.verseBox}
          onPress={() => handleVersePress(index)}
        >
          <Text style={styles.verseTitle}>
            {verse.title}
          </Text>
          {expandedVerseIndex === index && (
            <Text style={styles.verseText}>
              {verse.text}
            </Text>
          )}
        </TouchableOpacity>
      ))}

      {/* Navigation Buttons */}
      <View style={styles.navigationButtons}>
        <TouchableOpacity 
          style={styles.navButton}
          disabled={currentQuestionIndex === 0}
          onPress={() => setCurrentQuestionIndex(currentQuestionIndex - 1)}
        >
          <Text style={styles.navButtonText}>Previous</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={styles.navButton}
          disabled={currentQuestionIndex === questions.length - 1}
          onPress={() => setCurrentQuestionIndex(currentQuestionIndex + 1)}
        >
          <Text style={styles.navButtonText}>Next</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 16,
  },
  header: {
    fontSize: 12,
    color: '#444444',
    fontWeight: 'bold',
    marginBottom: 16,
    paddingLeft: 4,
  },
  questionBox: {
    backgroundColor: '#ccc1b4',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  questionText: {
    color: '#444444',
    fontWeight: 'bold',
  },
  verseBox: {
    backgroundColor: '#e8ebe9',
    borderRadius: 8,
    padding: 16,
    marginBottom: 8,
  },
  verseTitle: {
    color: '#444444',
    fontWeight: 'bold',
  },
  verseText: {
    color: '#444444',
    marginTop: 8,
  },
  navigationButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  navButton: {
    padding: 12,
    backgroundColor: '#444444',
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  navButtonText: {
    color: 'white',
  },
});

export default BibleStudySessionScreen;