import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import CardView from 'react-native-cardview';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Styles } from './CardSurahList.style';

const CardSurahList = props => {
  const {
    onPress,
    surahNumber,
    surahText,
    surahName,
    surahMean,
    surahAyat,
  } = props;
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.6}>
      <CardView
        cardElevation={2}
        cardMaxElevation={2}
        cornerRadius={5}
        style={Styles.CardStyle}>
        <View style={Styles.cardContainer}>
          <View style={Styles.numberCircleContainer}>
            <View style={Styles.NumberCircle}>
              <Text style={Styles.textNumber}>{surahNumber}</Text>
            </View>
          </View>
          <View style={Styles.descContainer}>
            <Text style={Styles.descTitle}>
              {surahName} ({surahText})
            </Text>
            <Text style={Styles.descSubTitle}>Terjemahan: {surahMean}</Text>
            <Text style={Styles.descSubTitle}>Jumlah Ayat: {surahAyat}</Text>
          </View>
          <View style={Styles.goToDetailContainer}>
            <Icon
              name="keyboard-arrow-right"
              size={30}
              color="grey"
              style={Styles.expandIconStyle}
            />
          </View>
        </View>
      </CardView>
    </TouchableOpacity>
  );
};

export default CardSurahList;
