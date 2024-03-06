import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';

// a react compnent that is a ToolBar with a input text.

interface ToolBarProps {
  text: string;
  setText: (text: string) => void;
}

export default function ToolBar({text, setText}: ToolBarProps) {
  return (
    <View style={styles.toolbar}>
      <TextInput
        style={styles.input}
        placeholder={text}
        onChangeText={setText}
        // value={text}
      />
    </View>
  );
}

// styles
const styles = StyleSheet.create({
  toolbar: {
    padding: 20,
    backgroundColor: 'coral',
  },
  input: {
    height: 40,
    padding: 10,
    backgroundColor: '#fff',
  },
});
