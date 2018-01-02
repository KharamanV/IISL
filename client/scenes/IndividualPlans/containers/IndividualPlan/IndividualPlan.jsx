/* eslint-disable */
import React, { Component } from 'react';
import axios from '@/services/api';
import { baseUrl } from '@/config';
import IndividualPlanDetail from '../../components/IndividualPlanDetail';

class IndividualPlan extends Component {
  state = {
    plan: null,
  };

  componentDidMount() {
    axios(`${baseUrl}/api/individual_plans/${this.props.match.params.id}`)
      .then(res => this.setState({ plan: res.data }));
  }

  render() {
    const { plan } = this.state;

    return plan && <IndividualPlanDetail data={plan} />;
  }
}

export default IndividualPlan;
