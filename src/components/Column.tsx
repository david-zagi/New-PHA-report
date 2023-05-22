import { View } from '@react-pdf/renderer';
import Row from './Row';

const Column = ({ width, children, colStyle }: any) => {
  return (
    <View style={{ flexDirection: 'row', width: `${width}%`, colStyle }}>
      {children}
    </View>
  );
};

export default Column;
