import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.square} backgroundColor='red'>
      <Text>Square</Text>
      </View>
      <View style={styles.square} backgroundColor='orange'>
      <Text>Square</Text>
      </View>
      <View style={styles.square} backgroundColor='yellow'>
      <Text>Square</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    height:'100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
  square: {
    height: 100,
    width: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
});