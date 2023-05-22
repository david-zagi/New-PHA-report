import { Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Header from '../sections/Header';
import TwoColumn from '../section/TwoColumn';

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

const Healthoverview = ({ data }: { data: any }) => (
  <Page size="A4" style={styles.page}>
    <Header title="Health Overview" />
    <View style={styles.section}>
      <View>
        <Text style>Score Explained</Text>
      </View>

      <View style={{ marginTop: 10, fontSize: 14, color: '#242E38' }}>
        <Text style>{data.summary}</Text>
      </View>
    </View>
    {/* next section */}
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
      {data.items.map((x: any) => (
        <View
          style={[
            styles.cards,
            {
              flexDirection: 'row',
              backgroundColor: x.color,
              opacity: '0.07',
            },
          ]}
        >
          <View
            style={{
              width: 5,
              backgroundColor: x.color,
              height: '80%',
              marginTop: '7%',
              borderBottomRightRadius: 5,
              borderTopRightRadius: 5,
              opacity: '1',
            }}
          />
          <View>
            <View style={{ margin: 20, opacity: '1' }}>
              <View
                style={{
                  flexDirection: 'row',
                  marginBottom: 10,
                  fontSize: 14,
                }}
              >
                <Text style={{ color: x.color, width: '70%' }}>{x.title}</Text>
                <Text style={{ marginLeft: '5%' }}> cirlce</Text>
              </View>
              <View style={{}}>
                <Text style={{ fontSize: 12 }}>{x.description}</Text>
              </View>
            </View>
          </View>
        </View>
      ))}
    </View>
  </Page>
);

export default Healthoverview;
