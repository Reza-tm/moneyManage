import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import Card from '../../../Components/Card/Card';
import Carousel from 'react-native-snap-carousel';
import {Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Transactions from '../../../Components/Transactions/Transactions';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const data = ['ali', 'reza', 'saamad'];

const renderItem = ({card}) => (
  <View style={{marginTop: 60}}>
    <Card />
  </View>
);
const monthRender = c => (
  <View style={{width: windowWidth / 2, flexDirection: 'row'}}>
    <View
      style={{
        width: 55,
        height: 55,
        backgroundColor: '#E4F2F0',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 10,
      }}>
      <Icon name="arrow-up-outline" size={24} color="#0A9D56" />
    </View>
    <View style={{justifyContent: 'space-around'}}>
      <Text style={{color: '#A5AEBE', fontWeight: '600'}}>Income</Text>
      <Text style={{color: '#183B60', fontSize: 17, fontWeight: '700'}}>
        $ 5,000
      </Text>
    </View>
  </View>
);

const changeCard = () => {};

const MainApp = () => {
  const [cardIndex, setCardIndex] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.topSections}>
        <View style={{position: 'absolute', height: 338}}>
          <Carousel
            data={data}
            renderItem={renderItem}
            sliderWidth={400}
            itemWidth={400}
            layout={'stack'}
            layoutCardOffset={290}
            onSnapToItem={e => changeCard(e)}
          />
        </View>
      </View>
      <View style={styles.botSections}>
        <View style={{width: '100%', paddingHorizontal: 20}}>
          <Text style={[styles.transText]}>This month</Text>
          <FlatList data={data} renderItem={monthRender} horizontal />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 30,
            }}>
            <Text style={[styles.transText]}>Transactions</Text>
          </View>
          <View>
            <FlatList data={data} renderItem={Transactions} />
          </View>
        </View>
      </View>
    </View>
  );
};

export default MainApp;
