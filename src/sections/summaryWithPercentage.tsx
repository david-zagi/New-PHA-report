import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  section: {
    margin: 15,
    marignTop: 15,
    padding: 10,
  },

  blueBar: {
    top: 0,
    padding: 0,
    width: 14,
    backgroundColor: '#50B2FA',
  },
  cards: {
    width: '48%',
    marginBottom: 15,
  },
});

const Summary = ({ title, data }: { title: string; data: any }) => {
  return (
    <View style={styles.section}>
      <View style={{ marginTop: 10, fontSize: 14, color: '#242E38' }}>
        <View style={{ width: 150, fontSize: 10 }}>
          <Text> {title} </Text>
        </View>
        <View style={{ marginTop: 20 }}>
          <Text>{data.summary}</Text>
        </View>
      </View>
    </View>
  );
};

export default Summary;
