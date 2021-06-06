import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Card.styles';

const Card = props => {
  return (
    <TouchableOpacity style={styles.container} onLongPress={props.remove}>
      <Text style={styles.text}>{props.todo}</Text>
    </TouchableOpacity>
  );
};

export default Card;
