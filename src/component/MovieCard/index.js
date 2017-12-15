import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import { View } from 'react-native'
import { Text, Card } from 'react-native-elements';

import style from './style';

const MovieCard = (props) => {
  const { movie: { title, poster_path }, releaseDate } = props;
  return (
    <Card
      flexDirection="row"
      wrapperStyle={style.wrapperStyle}
      containerStyle={style.containerStyle}
      image={{ uri: `https://image.tmdb.org/t/p/w185${poster_path}` }}
    >
      <View style={style.textContainer}>
        <Text style={[style.textStyle, title.length > 16 ? style.smallText : {}]}>
          {title}
        </Text>
        {releaseDate &&
          <Text style={style.secondaryText}>
            {moment(releaseDate).format('ddd, MMMM Do YYYY')}
          </Text>}
      </View>
    </Card>
  );
};

MovieCard.defaultProps = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    uri: PropTypes.string
  })
};

export { MovieCard };