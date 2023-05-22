import { View, Page, StyleSheet } from '@react-pdf/renderer';
import Header from '../sections/Header';
import Summary from '../sections/summaryWithPercentage';
import TextScore from '../sections/TestScors';
// import Note from '../components/Note';
import Column from '../components/Column';

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

const myRowDef = {
  titleProps: {},
  columns: [
    {
      titleProps: { fontSize: 20 },
      fontValueColor: 'blue',
      titleFOntColor: 'black',
    },
    {
      titleProps: { fontSize: 20 },
    },
    {
      titleProps: { fontSize: 20 },
    },
  ],
};

// const defs = {
//   rows: [{ ...myRowDef }, { ...myRowDef }, { ...myRowDef }],
// };
// row.map((rowDef) => {
//   <Row rowProps={rowDef} data={chValues} />;
// });

// // inside of your row component
// rowDef.columns.map((columnDef) => {
//   <Column columnProps={columnDef} data={data} />;
// });

// // inside of your column or cell component
// const cellIndex = rowIndex * columnIndex;
// const cellDate = chValues[cellIndex];

const chValues = [
  { name: 'Subject Score', value: 100 },
  { name: 'Standard Score', value: 103 },
  { name: '% Percentile', value: '58%' },
  { name: 'Subject Score', value: 100 },
  { name: 'Standard Score', value: 103 },
  { name: '% Percentile', value: '58%' },
  { name: 'Subject Score', value: 100 },
  { name: 'Standard Score', value: 103 },
  { name: '% Percentile', value: '58%' },
];

const CognitiveHealth = ({ data }: { data: any }) => {
  const gridContent = [
    ['Subject Score', 'Standard Score', '% Percentile'],
    ['100', '103', '58%'],
  ];

  const rowStyles = [
    { fontSize: 14, width: '30%', flexDirection: 'row' },
    { fontSize: 20, width: '30%', color: '#50B2FA' },
  ];

  const tableContent = [
    ['Subject Score', 'Percentile Score', 'Rating'],
    ['>109', '>74', 'Above'],
    ['90-109', '25-74', 'Average'],
    ['80-89', '9-24', 'Low Average'],
  ];

  const tableStyles = [
    {
      fontSize: 10,
      width: '50%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    { fontSize: 10, width: '50%', backgroundColor: '#D4E9F7', opacity: '0.7' },
    { fontSize: 10, width: '50%' },
    { fontSize: 10, width: '50%' },
  ];

  const newTableContent = [
    ['', 'Target Range', 'Your Score'],
    ['Physical Reaction time', '251-361 ms', '326 (48) mx'],
    ['Audio P300 Delay', '252-367 ms', '252 ms'],
    ['Boone Brain Age', '-', '38 yrs'],
  ];

  const newTableStyles = [
    {
      fontSize: 10,
      width: '50%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    { fontSize: 10, width: '50%' },
    { fontSize: 10, width: '50%' },
    { fontSize: 10, width: '50%' },
  ];

  const secondTableContent = [
    ['Standard Score', 'Rating'],
    ['>0.75', 'Excellent'],
    ['5-0.75', 'Good'],
    ['< 0.5', 'Fair'],
  ];

  const secondTableStyles = [
    {
      fontSize: 10,
      width: '50%',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    { fontSize: 10, width: '50%' },
    { fontSize: 10, width: '50%' },
    { fontSize: 10, width: '50%' },
  ];

  const colStyles = [
    {},
    {},
    { fontSize: 10, width: '50%', backgroundColor: '#D4E9F7', opacity: '0.7' },
  ];
  return (
    <Page size="A4" style={styles.page}>
      <Header title="Cognitivd Health" />
      <View>
        <Summary title="95% Excellent" data={data} />
        <TextScore
          gridContent={gridContent}
          rowStyles={rowStyles}
          title="Composite Memory"
          numRows={gridContent.length}
          numColumns={
            gridContent.length > 0 ? secondTableContent[0].length + 1 : 0
          }
        />
        <TextScore
          gridContent={gridContent}
          rowStyles={rowStyles}
          title="Processing Speed"
          numRows={gridContent.length}
          numColumns={
            gridContent.length > 0 ? secondTableContent[0].length + 1 : 0
          }
        />
        <TextScore
          gridContent={gridContent}
          rowStyles={rowStyles}
          title="Executive Function"
          numRows={gridContent.length}
          numColumns={
            gridContent.length > 0 ? secondTableContent[0].length + 1 : 0
          }
        />

        <TextScore
          gridContent={tableContent}
          rowStyles={tableStyles}
          numRows={tableContent.length}
          numColumns={
            tableContent.length > 0 ? secondTableContent[0].length + 1 : 0
          }
        />

        <TextScore
          gridContent={newTableContent}
          rowStyles={newTableStyles}
          numRows={newTableContent.length}
          numColumns={
            newTableContent.length > 0 ? secondTableContent[0].length + 1 : 0
          }
          columnStyles={colStyles}
        />

        <TextScore
          gridContent={secondTableContent}
          rowStyles={secondTableStyles}
          numRows={secondTableContent.length}
          numColumns={
            secondTableContent.length > 0 ? secondTableContent[0].length + 1 : 0
          }
          columnStyles={colStyles}
        />
        {/* <Note /> */}
      </View>
    </Page>
  );
};

export default CognitiveHealth;
