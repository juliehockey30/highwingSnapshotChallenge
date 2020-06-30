import React, { Component, Fragment } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  SectionWrapper,
  GroupWrapper,
  CategoryTitle,
  ChartWrapper,
  VisualWrapper,
  LedgendWrapper,
  SelectedData,
  LegendColorTextWrapper,
  LedgendItem,
  LegendColor,
  StyledDoughnut,
  SelectedPercent,
  SelectedPremium,
  SelectedTitle
} from './SectionData.styled.js';

class SectionData extends Component {
  constructor(props){
    super(props);
    this.state={
      selectedBrokerPremium: this.props.brokerData[0].premium,
      selectedBrokerTitle: this.props.brokerData[0].title,
      selectedBrokerPercent: this.props.brokerData[0].proportion,
      selectedCarrierPremium: this.props.carrierData[0].premium,
      selectedCarrierTitle: this.props.carrierData[0].title,
      selectedCarrierPercent: this.props.carrierData[0].proportion,
    };

    this.setSelectedDonutData = this.setSelectedDonutData.bind(this);
  }

  renderDonutChart(dataSet, group) {
    const values = [];
    dataSet.forEach(value => {
      values.push(value.proportion);
    });

    const data = {
      datasets:
        [{
          data: values,
          backgroundColor: ['#02c7b0', '#607d8b', '#30a200', '#013d40', '#006567', '#008f91', '#00afb1', '#00ce5f', '#00e833', '#01ff39#' ],
          borderWidth: 0,
        }],
    }
    const options = {
      maintainAspectRatio: false,
      cutoutPercentage: 80,
      events: []
    }

    //Round to nearest whole number
    let selectedBrokerPremium = Math.floor(this.state.selectedBrokerPremium);
    let selectedCarrierPremium = Math.floor(this.state.selectedCarrierPremium);

    //add commas to indicated every thousand
    selectedBrokerPremium = selectedBrokerPremium.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    selectedCarrierPremium = selectedCarrierPremium.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return (
      <Fragment>
        <SelectedPercent>
          {group === 'broker' ?
            `${Math.floor(this.state.selectedBrokerPercent)}%`
            : `${Math.floor(this.state.selectedCarrierPercent)}%`
          }
        </SelectedPercent>
        <Doughnut
          data={data}
          options={options}
          height={200}
          width={200}
        />
        <SelectedPremium>
          {group === 'broker' ? `$${selectedBrokerPremium}` : `$${selectedCarrierPremium}`}
        </SelectedPremium>
        <SelectedTitle>
          {group === 'broker' ? `${this.state.selectedBrokerTitle}` : `${this.state.selectedCarrierTitle}`}
        </SelectedTitle>
      </Fragment>
    )
  }

  renderLegend(dataSet, group) {
    const values = [];
    dataSet.forEach(value => {
      values.push(value);
    });

    const colors = ['#02c7b0', '#607d8b', '#30a200', '#013d40', '#006567', '#008f91', '#00afb1', '#00ce5f', '#00e833', '#01ff39#' ]

    return (
      <Fragment>
        {values.map((value, i) => (
          <LegendColorTextWrapper>
            <LegendColor color={colors[i]}/>
            <LedgendItem onClick={() => this.setSelectedDonutData(group, i)}>{value.title}</LedgendItem>
          </LegendColorTextWrapper>
        ))}
      </Fragment>
    );
  }

  setSelectedDonutData(group, i) {
    if(group === 'broker') {
      this.setState({
        selectedBrokerPercent: this.props.brokerData[i].proportion,
        selectedBrokerPremium: this.props.brokerData[i].premium,
        selectedBrokerTitle: this.props.brokerData[i].title
      });
    } else {
      this.setState({
        selectedCarrierPercent: this.props.carrierData[i].proportion,
        selectedCarrierPremium: this.props.carrierData[i].premium,
        selectedCarrierTitle: this.props.carrierData[i].title
      });
    }
  }

  render() {
    return (
      <SectionWrapper>
        <GroupWrapper>
          <CategoryTitle>{this.props.category}</CategoryTitle>
          <ChartWrapper>
            <LedgendWrapper>
              {this.renderLegend(this.props.brokerData, "broker")}
            </LedgendWrapper>
            <VisualWrapper>
              {this.renderDonutChart(this.props.brokerData, "broker")}
            </VisualWrapper>
          </ChartWrapper>
        </GroupWrapper>
        <GroupWrapper>
          <CategoryTitle>{this.props.category}</CategoryTitle>
          <ChartWrapper>
            <LedgendWrapper>
              {this.renderLegend(this.props.carrierData, "carrier")}
            </LedgendWrapper>
            <VisualWrapper>
              {this.renderDonutChart(this.props.carrierData, "carrier")}
            </VisualWrapper>
          </ChartWrapper>
        </GroupWrapper>
      </SectionWrapper>
    );
  }
}

export default SectionData;
