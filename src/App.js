import React, { Component } from 'react';
import { AppWrapper } from './App.styled.js'
import HeaderSection from './components/headerSection/HeaderSection.js';
import BodySection from './components/bodySection/BodySection.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: true
    };

    this.data = {};

  }

  componentWillMount() {
    const queryString = `query {
      mostRecentSnapshot {
        broker {
          name
          description
        }
        brokerSlice {
          premiumRange {
            premium
            proportion
            title
          }
          industries {
            premium
            proportion
            title
          }
          products {
            premium
            proportion
            title
          }
          brokerDivision {
            premium
            proportion
            title
          }
        }
        carrierSlice {
          premiumRange {
            premium
            proportion
            title
          }
          industries {
            premium
            proportion
            title
          }
          products {
            premium
            proportion
            title
          }
          brokerDivision {
            premium
            proportion
            title
          }
        }
      }
    }`

    fetch(`https://hw-fe-challenge-api.herokuapp.com/graphql?query=${queryString}`, {method: 'POST'})
    .then(resp => resp.json())
    .then((resp) => {
      this.data = resp.data.mostRecentSnapshot;
      this.setState({loading: false})
      console.log("this.data is now: ", this.data);
    })
    .catch((e) => {
      console.error("Error fetching data");
      console.error(e);
    })
  }

  render() {
    return (
      <AppWrapper>
        {this.state.loading ? <div> LOADING DATA</div> :
          <div>
            <HeaderSection data={this.data}/>
            <BodySection data={this.data}/>
          </div>
        }
      </AppWrapper>
    );
  }
}

export default App;
