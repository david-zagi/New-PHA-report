import { View, Page, StyleSheet, Text } from '@react-pdf/renderer';
import Row from './Row';

const styles = StyleSheet.create({
  section: {
    margin: 15,
    padding: 10,
  },
  grid: {
    display: 'flex',
    flexDirection: 'column',
  },
  row: {
    flexDirection: 'row',
    marginBottom: '5px',
  },
  column: {
    width: '10px',
    backgroundColor: '#dddddd',
  },
});

const Grid = ({
  numRows,
  numColumns,
  content,
  rowStyles,
  columnStyles,
}: any) => {
  const renderGrid = () => {
    const grid = [];
    for (let i = 0; i < numRows; i++) {
      const row = [];
      for (let j = 0; j < numColumns; j++) {
        row.push(
          <View key={j} style={[styles.row, rowStyles[i]]}>
            <Text style={{ opacity: '1', padding: '3px' }}>
              {content[i][j]}
            </Text>
          </View>
        );
      }
      grid.push(
        <View key={i} style={[styles.row]}>
          {row}
        </View>
      );
    }
    return grid;
  };

  return <View style={styles.section}>{renderGrid()}</View>;
};

export default Grid;
