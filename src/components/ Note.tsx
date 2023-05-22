import { View, Text, Image, StyleSheet } from '@react-pdf/renderer';
import NoteIcon from '../assets/Note.png';

const styles = StyleSheet.create({
  section: {
    margin: 15,
    marignTop: 15,
    padding: 10,
    borderRadius: '20px',
    borderColor: '#D4E9F7',
  },
});

const Note = () => {
  return (
    <View style={styles.section}>
      <Image src={NoteIcon} style={styles.image} />
      <View style={{ fontSize: '8' }}>
        <Text> Note</Text>
      </View>
    </View>
  );
};

export default Note;
