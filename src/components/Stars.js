import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity
} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Icon} from 'native-base';
import {Theme} from '../theme/AppTheme';

class Stars extends React.Component {
  render() {
    return (
      <View style={styles.pStars}>
        <Icon name="star" type="MaterialCommunityIcons" style={{color: Theme.primary, fontSize: 18}} />
        <Icon name="star" type="MaterialCommunityIcons" style={{color: Theme.primary, fontSize: 18}} />
        <Icon name="star" type="MaterialCommunityIcons" style={{color: Theme.primary, fontSize: 18}} />
        <Icon name="star-outline" type="MaterialCommunityIcons" style={{color: Theme.primary, fontSize: 18}} />
        <Icon name="star-outline" type="MaterialCommunityIcons" style={{color: Theme.primary, fontSize: 18}} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pStars: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 4
  }
});

export default Stars;