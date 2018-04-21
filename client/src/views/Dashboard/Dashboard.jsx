import React from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
import {
  Store,
  DateRange,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility
} from "material-ui-icons";
import { withStyles, Grid } from "material-ui";
import API from "./../../api/API";

import {
  StatsCard,
  ChartCard,
  ItemGrid
} from "./../../components";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "./../../variables/charts";

import dashboardStyle from "./../../variables/styles/dashboardStyle";

const MONTHS = [
      "FILLER",
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ];

class Dashboard extends React.Component {

  state = {
    start: "",
    end: "",
    monthlyGoalsData: "",
    monthlyGoalsSeries: [],
    averageReviewsSeries: []
  };

  getMonths = () => {
    if(this.state.start && this.state.end) {
      let startDateSplitArray = this.props.location.state.start.split('-');
      let endDateSplitArray = this.props.location.state.end.split('-');
      let monthCount = 0;
      if(parseInt(startDateSplitArray[1], 10) > parseInt(endDateSplitArray[1], 10)) {
        monthCount = 12 - parseInt(startDateSplitArray[1], 10) + parseInt(endDateSplitArray[1], 10);
      } else {
        monthCount = parseInt(endDateSplitArray[1], 10) - parseInt(startDateSplitArray[1], 10);
      }
      let dateInt = parseInt(startDateSplitArray[1], 10)
      console.log("Date: " + MONTHS[dateInt]);
      console.log(monthCount);
      let dateRange = [];
      for(let i = dateInt; i <= dateInt + monthCount; i++) {
        dateRange.push(MONTHS[i]);
      }
      console.log("Months to dispay:");
      console.log(dateRange);
      return dateRange;
    }
  };

  getCompletedGoals = () => {
    let seriesData = [];
    for(let i = 1; i <= 12; i++) {
      API.getAchievedWithin("2018-" + i + "-01 00:00:00", "2018-" + i + "-28 00:00:00")
        .then(res => {
          //console.log(res.data);
          seriesData.push(res.data.length);
          if(res.data.length > completedTasksChart.options.high) {
            completedTasksChart.options.high = res.data.length + 1;
          }
          if(i === 12) {
            this.setState({
              monthlyGoalsSeries: [seriesData]
            });
          }
        });
    }
  };

  getAverageReviews = () => {
    let seriesData = [];
    let averageSum = 0;
    let sumArray = [];
    let reviewCount = 0;
    /* eslint-disable */
    for(let i = 1; i <= 12; i++) {
      averageSum = 0;
      sumArray = [];
      reviewCount = 0;
      API.getReviewsWithin("2018-" + i + "-01 00:00:00", "2018-" + i + "-28 00:00:00")
        .then(res => {
          /* eslint-enable */
          console.log(res.data);
          reviewCount = res.data.length;
          sumArray = res.data.map(review => Object.keys(review).reduce((sum,key) => sum + review[key], 0));
          averageSum = sumArray.reduce((a, b) => {return a + b}, 0);
          console.log(averageSum);
          if(reviewCount > 0) {
            seriesData.push(averageSum/reviewCount);
          } else {
            seriesData.push(0);
          }
          if(i === 12) {
            this.setState({
              averageReviewsSeries: [seriesData]
            });
          }
        });
    }
  };

  componentDidMount = () => {
    this.getCompletedGoals();
    this.getAverageReviews();
  };

  componentWillMount = () => {
    if(this.props.location.state) {
      this.setState({
        start: this.props.location.state.start + " 00:00:00",
        end: this.props.location.state.end + " 00:00:00"
      });
    }
  }

  render() {
    console.log(this.props);
    completedTasksChart.data.series = this.state.monthlyGoalsSeries;
    emailsSubscriptionChart.data.series = this.state.averageReviewsSeries;
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={6}>
            <StatsCard
              icon={Store}
              iconColor="green"
              title="Selected Date"
              description={this.props.location.state.start + " to " + this.props.location.state.end}
              statIcon={DateRange}
              statText="Last 24 Hours"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={6}>
            <StatsCard
              icon={Accessibility}
              iconColor="blue"
              title="Employees"
              description="+245"
              statIcon={Update}
              statText="Just Updated"
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={dailySalesChart.data}
                  type="Line"
                  options={dailySalesChart.options}
                  listener={dailySalesChart.animation}
                />
              }
              chartColor="green"
              title="Daily Reviews"
              text={
                <span>
                  <span className={this.props.classes.successText}>
                    <ArrowUpward
                      className={this.props.classes.upArrowCardCategory}
                    />{" "}
                    55%
                  </span>{" "}
                  increase from yesterday performance.
                </span>
              }
              statIcon={AccessTime}
              statText="updated 4 minutes ago"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              }
              chartColor="orange"
              title="Average Reviews"
              text="Legend: 1 = Bad, 2 = Average, 3 = Good"
              statIcon={AccessTime}
              statText="last review submitted 2 days ago"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <ChartCard
              chart={
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              }
              chartColor="red"
              title="Completed Goals"
              text="Last Campaign Performance"
              statIcon={AccessTime}
              statText="campaign sent 2 days ago"
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(dashboardStyle)(Dashboard);
