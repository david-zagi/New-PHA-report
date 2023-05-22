import React from 'react';
import Healthoverview from './pages/Healthoverview';
import CognitiveHealth from './pages/CognitiveHealth';
import { data } from './utils/mockData';
import './App.css';
import ProgressOverTime from './pages/ProgressOverTime';
import { Page, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';

// Create styles
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

// Create Document Component
export default function App() {
  return (
    <PDFViewer width="100%" height="800">
      <Document>
        <ProgressOverTime />
        <Healthoverview data={data} />
        <CognitiveHealth data={data} />
      </Document>
    </PDFViewer>
  );
}
