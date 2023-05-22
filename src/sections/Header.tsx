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

const Header = ({ title }: { title: string }) => {
  return (
    <View style={{ flexDirection: 'row' }}>
      <View style={styles.blueBar} />
      <View style={{ marginLeft: 10, marginTop: 30, width: '500px' }}>
        <View style={{ width: 150 }}>
          <Text> {title} </Text>
        </View>
      </View>
      <View style={{ marginTop: 30 }}>
        <Text>logo</Text>
      </View>
    </View>
  );
};

export default Header;
