import { Page, Text, Image, View, StyleSheet } from '@react-pdf/renderer';
import Header from '../sections/Header';
import TwoColumn from '../sections/TwoColumn';
import heartIcon from '../assets/Vector.png';
import Chart from '../assets/example.png';
import Arrowup from '../assets/Shape.png';

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

const ProgressOverviewTime = () => (
    <Page size="A4" style={styles.page}>
        <Header title="Health Overview" />
        {/* next section */}
        <div>
            <View
                style={[
                    styles.section,
                    {
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: "98%",
                        height: 'auto',
                        borderRadius: '20px',
                        border: 1,
                        borderColor: '#d4e9f7',
                    },
                ]}
            >



                <div style={{ flexDirection: 'column', borderRight: 0.5, borderColor: '#d4e9f7' }}>
                    <div style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: "start", flexWrap: 'wrap', marginBottom: 30 }}>
                        <div style={{ flexDirection: 'row', justifyContent: 'start', alignItems: "center" }}>
                            <Image src={heartIcon} style={{ width: '8%', height: 'auto', marginRight: 10 }} />
                            <Text style={{ width: '40%', color: '#000', fontSize: '14px' }}>Cardiovascular Health </Text>
                        </div>
                        <div style={{ flexDirection: 'row', alignItems: "start", flexWrap: 'wrap', width: '20%' }}>
                            <Image src={Arrowup} style={{ width: '8%', height: 'auto', marginRight: 10, fontSize: '10px' }} />
                            <Text style={{ fontSize: '10px', color: '#58C17B', overflow: 'hidden', flexWrap: 'nowrap' }}>Improving</Text>
                        </div>
                    </div>
                    <Image style={{
                        width: "98%", height: "auto"
                    }} src={Chart} />
                </div>

                <div style={{
                    width: "55%",
                }}>
                    <Text style={{ fontSize: "14px", marginLeft: "10px" }}>Top 4 Biomarker</Text>
                    <div style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        flexFlow: 'row wrap',
                        marginTop: 30
                    }}>

                        <div style={{ width: "50%", height: "auto" }}>
                            <Image src={Chart} />
                            <Text style={{ fontSize: "8px", margin: 10 }}>Blood Pressure (Systolic/Diastolic)</Text>
                        </div>
                        <div style={{ width: "50%", height: "auto" }}>
                            <Image src={Chart} />
                            <Text style={{ fontSize: "8px", margin: 10 }}>Blood Pressure (Systolic/Diastolic)</Text>
                        </div>
                        <div style={{ width: "50%", height: "auto" }}>
                            <Image src={Chart} />
                            <Text style={{ fontSize: "8px", margin: 10 }}>Blood Pressure (Systolic/Diastolic)</Text>
                        </div>
                        <div style={{ width: "50%", height: "auto" }}>
                            <Image src={Chart} />
                            <Text style={{ fontSize: "8px", margin: 10 }}>Blood Pressure (Systolic/Diastolic)</Text>
                        </div>
                    </div>
                </div>
            </View>
        </div>
    </Page>
);

export default ProgressOverviewTime;
