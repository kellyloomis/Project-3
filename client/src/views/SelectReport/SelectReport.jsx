import React, { Component } from 'react';

import Card from '../../components/SelectReportPage/Card/Card.jsx';

class SelectReport extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="w3-content">
        <div className="w3-row-padding w3-center w3-margin-top">
          <Card
              title="Individual Employee"
              text1="View progress of an individual"
              employees={this.props.location.state.employees}
            />
            <Card
              title="All Employees"
              text1="View progress of all employees"
              text2="Click Submit to process report which will display data for all of your employees"
            />
        </div>
      </div>
    );
  }
}
export default SelectReport;
