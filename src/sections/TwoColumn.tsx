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

const TwoColumn = ({ children }: any) => {
  return (
    <View
      style={[
        styles.section,
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          flexFlow: 'row wrap',
        },
      ]}
    >
      {children}
    </View>
  );
};

export default TwoColumn;
