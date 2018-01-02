/* eslint-disable */
import React, { Component } from 'react';
import axios from '@/services/api';
import { baseUrl } from '@/config';
import IndividualCardDetail from '../../components/IndividualCardDetail';

class IndividualCard extends Component {
  state = {
    card: null,
  };

  componentDidMount() {
    axios(`${baseUrl}/api/speech_cards/${this.props.match.params.id}`)
      .then(res => this.setState({ card: res.data }));
  }

  render() {
    const { card } = this.state;

    return card && <IndividualCardDetail data={card} />;
  }
}

export default IndividualCard;
