import React, { Component } from 'react';
import {
  HeaderWrapper,
  BrokerName,
  SubheaderWrapper,
  SubheaderLabel,
  Subheader
} from './HeaderSection.styled.js';

class HeaderSection extends Component {
  constructor(props){
    super(props);
    this.state={};
  }

  render() {
    return (
      <HeaderWrapper>
        <BrokerName>{this.props.data.broker.name}</BrokerName>
        <SubheaderWrapper>
          <SubheaderLabel>Wesbite</SubheaderLabel>
          <Subheader>www.somecoolsite.com</Subheader>
        </SubheaderWrapper>
        <SubheaderWrapper>
          <SubheaderLabel>Summary</SubheaderLabel>
          <Subheader>{this.props.data.broker.description}</Subheader>
        </SubheaderWrapper>
      </HeaderWrapper>
    );
  }
}

export default HeaderSection;
