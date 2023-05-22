import { View, Page, StyleSheet } from '@react-pdf/renderer';
import Column from './Column';

const Row = ({
  columnWidths,
  rowHeight,
  children,
  rowStyle,
  colStyle,
}: any) => {
  return (
    <div style={{ flexDirection: 'row', height: rowHeight, rowStyle }}>
      {columnWidths.map((columnWidth: any, columnIndex: any) => (
        <Column key={columnIndex} width={columnWidth} style={{ colStyle }}>
          {children}
        </Column>
      ))}
    </div>
  );
};

export default Row;
