import React, { Component, Fragment } from 'react';
import {
  ToggleBar,
  ToggleItem,
  BodyWrapper,
  FilterWrapper,
  FilterButton,
  GroupHeadingWrapper,
  GroupHeader
} from './BodySection.styled.js';
import SectionData from './sectionData/SectionData.js';

class BodySection extends Component {
  constructor(props){
    super(props);
    this.state={
      currentView: 'snapshot',
      showPremiumRange: true,
      showMarkets: false,
      showIndustries: true,
      showProducts: false,
    };

    this.setCurrentView = this.setCurrentView.bind(this);
    this.premiumRangeOnClick = this.premiumRangeOnClick.bind(this);
    this.marketsOnClick = this.marketsOnClick.bind(this);
    this.industriesOnClick = this.industriesOnClick.bind(this);
    this.productsOnClick = this.productsOnClick.bind(this);
  }

  setCurrentView(view) {
    this.setState({currentView: view})
  }

  premiumRangeOnClick() {
    const previousState = this.state.showPremiumRange;
    this.setState({ showPremiumRange: !previousState });
  }

  marketsOnClick() {
    const previousState = this.state.showMarkets;
    this.setState({ showMarkets: !previousState });
  }

  industriesOnClick() {
    const previousState = this.state.showIndustries;
    this.setState({ showIndustries: !previousState });
  }

  productsOnClick() {
    const previousState = this.state.showProducts;
    this.setState({ showProducts: !previousState });
  }

  render() {
    return (
      <Fragment>
        <ToggleBar>
          <ToggleItem
            onClick={() => this.setCurrentView('snapshot')}
            selected={this.state.currentView === 'snapshot'}
          >SNAPSHOT</ToggleItem>
          <ToggleItem
            onClick={() => this.setCurrentView('trends')}
            selected={this.state.currentView === 'trends'}
          >TRENDS</ToggleItem>
        </ToggleBar>
        {this.state.currentView === 'trends' ? <div>Sorry Come Back Soon!</div> :
          <BodyWrapper>
            <FilterWrapper>
              <FilterButton
              selected={this.state.showPremiumRange}
              onClick={this.premiumRangeOnClick}
              >Premium Range</FilterButton>
              <FilterButton
                selected={this.state.showMarkets}
                onClick={this.marketsOnClick}
              >Markets</FilterButton>
              <FilterButton
                selected={this.state.showIndustries}
                onClick={this.industriesOnClick}
              >Industries</FilterButton>
              <FilterButton
                selected={this.state.showProducts}
                onClick={this.productsOnClick}
              >Products</FilterButton>
            </FilterWrapper>
            <GroupHeadingWrapper>
              <GroupHeader>Broker Book</GroupHeader>
              <GroupHeader>Carrier Placement</GroupHeader>
            </GroupHeadingWrapper>
            {this.state.showPremiumRange ?
              <SectionData
                category='Premium Range'
                brokerData={this.props.data.brokerSlice.premiumRange}
                carrierData={this.props.data.carrierSlice.premiumRange}
              /> : null}
              {this.state.showMarkets ?
                <SectionData
                  category='Markets'
                  brokerData={this.props.data.brokerSlice.brokerDivision}
                  carrierData={this.props.data.carrierSlice.brokerDivision}
                /> : null}
              {this.state.showIndustries ?
                <SectionData
                  category='Industries'
                  brokerData={this.props.data.brokerSlice.industries}
                  carrierData={this.props.data.carrierSlice.industries}
                /> : null}
              {this.state.showProducts ?
                <SectionData
                  category='Products'
                  brokerData={this.props.data.brokerSlice.products}
                  carrierData={this.props.data.carrierSlice.products}
                /> : null}
          </BodyWrapper>
        }
      </Fragment>
    );
  }
}

export default BodySection;
