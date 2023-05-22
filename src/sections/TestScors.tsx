import { Text, View, StyleSheet } from '@react-pdf/renderer';
import Grid from '../components/Grid';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  section: {
    margin: 15,
    marignTop: 5,
    padding: 5,
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

const TextScore = ({
  gridContent,
  rowStyles,
  title,
  numRows,
  numColumns,
  columnStyles,
}: {
  gridContent: any;
  rowStyles?: any;
  columnStyles?: any;
  title?: string;
  numRows: number;
  numColumns: number;
}) => {
  return (
    <>
      {title && (
        <Text style={{ fontSize: 12, marignLeft: 20, paddingLeft: 20 }}>
          {title}
        </Text>
      )}
      <Grid
        numRows={numRows}
        numColumns={numColumns}
        content={gridContent}
        rowStyles={rowStyles}
        columnStyles={columnStyles}
        style={[styles.section, { fontSize: 12 }]}
      />
    </>
  );
};

export default TextScore;
