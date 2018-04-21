import React from 'react';
// react plugin for creating charts
import ChartistGraph from 'react-chartist';
import {
  Description,
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
} from './../../variables/charts';

import dashboardStyle from './../../variables/styles/dashboardStyle';

class Dashboard extends React.Component {

  state = {
    monthlyGoalsData: "",
    monthlyGoalsSeries: [],
    averageReviewsSeries: [],
    performanceTrendSeries: [],
    employeeName: "",
    employeeCount: ""
  };

  getCompletedGoals = () => {
    let seriesData = [];
    for(let i = 1; i <= 12; i++) {
      API.getAchievedWithin("2018-" + i + "-01 00:00:00", "2018-" + i + "-28 00:00:00")
        .then(res => {
          //console.log(res.data);
          seriesData[i-1] = (res.data.length);
          if(res.data.length >= completedTasksChart.options.high) {
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

  getCompletedGoalsEmployee = (employeeId) => {
    let seriesData = [];
    for(let i = 1; i <= 12; i++) {
      API.getAchievedWithinByEmployee("2018-" + i + "-01 00:00:00", "2018-" + i + "-28 00:00:00", employeeId)
        .then(res => {
          //console.log(res.data);
          seriesData[i-1] = (res.data.length);
          if(res.data.length >= completedTasksChart.options.high) {
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

  getEmployeeName = (employeeId) => {
    API.getEmployee(employeeId)
      .then(res => {
        this.setState({
          employeeName: res.data.firstname + " " + res.data.lastname
        });
      });
  };

  getEmployeeCount = () => {
    API.getAllEmployee()
      .then(res => {
        this.setState({
          employeeCount: res.data.length
        });
      });
  }

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
          sumArray = res.data.map(review => {
            console.log(review);
            return (
                  (review.appearance) + 
                  (review.attendance) + 
                  (review.communication) + 
                  (review.professionalism) + 
                  (review.quality) + 
                  (review.taskcompletion)
                  ) / 6;
          });
          console.log(sumArray);
          averageSum = sumArray.reduce((a, b) => {return a + b}, 0);
          console.log(averageSum);
          if(reviewCount > 0) {
            seriesData[i-1] = (averageSum/reviewCount);
          } else {
            seriesData[i-1] = (0);
          }
          if(i === 12) {
            this.setState({
              averageReviewsSeries: [seriesData]
            });
          }
        });
    }
  };

  getAverageReviewsEmployee = (employeeId) => {
    let seriesData = [];
    let averageSum = 0;
    let sumArray = [];
    let reviewCount = 0;
    /* eslint-disable */
    for(let i = 1; i <= 12; i++) {
      averageSum = 0;
      sumArray = [];
      reviewCount = 0;
      API.getReviewsWithinByEmployee("2018-" + i + "-01 00:00:00", "2018-" + i + "-28 00:00:00", employeeId)
        .then(res => {
          /* eslint-enable */
          console.log(res.data);
          reviewCount = res.data.length;
          sumArray = res.data.map(review => {
            console.log(review);
            return (
                  (review.appearance) + 
                  (review.attendance) + 
                  (review.communication) + 
                  (review.professionalism) + 
                  (review.quality) + 
                  (review.taskcompletion)
                  ) / 6;
          });
          console.log(sumArray);
          averageSum = sumArray.reduce((a, b) => {return a + b}, 0);
          console.log(averageSum);
          console.log(reviewCount);
          if(reviewCount > 0) {
            seriesData[i-1] = (averageSum/reviewCount);
          } else {
            seriesData[i-1] = (0);
          }
          if(i === 12) {
            console.log(seriesData);
            this.setState({
              averageReviewsSeries: [seriesData]
            });
          }
        });
    }
  };

  getPerformanceTrend = () => {
    API.getAllReviews()
      .then(res => {
        console.log(res);
        if(res.data.length === 0) {
          return;
        } 
        let review = res.data[0];
        this.setState({
          performanceTrendSeries: [[review.appearance, review.attendance, review.communication, review.professionalism, review.quality, review.taskcompletion]]
        });
      });
  };

  getPerformanceTrendEmployee = (employeeId) => {
    API.getEmployeeReviews(employeeId)
      .then(res => {
        console.log(res);
        if(res.data.length === 0) {
          return;
        } 
        let review = res.data[0];
        this.setState({
          performanceTrendSeries: [[review.appearance, review.attendance, review.communication, review.professionalism, review.quality, review.taskcompletion]]
        });
      });
  };

  componentWillMount = () => {
    if(this.props.location.state.id) {
      console.log("Getting Employee Data");
      this.getPerformanceTrendEmployee(this.props.location.state.id);
      this.getAverageReviewsEmployee(this.props.location.state.id);
      this.getCompletedGoalsEmployee(this.props.location.state.id);
      this.getEmployeeName(this.props.location.state.id);
    } else {
      console.log("Getting All Data");
      this.getCompletedGoals();
      this.getAverageReviews();
      this.getPerformanceTrend();
      this.getEmployeeCount();
    }
  }

  render() {
    console.log(this.props);
    completedTasksChart.data.series = this.state.monthlyGoalsSeries;
    emailsSubscriptionChart.data.series = this.state.averageReviewsSeries;
    dailySalesChart.data.series = this.state.performanceTrendSeries;
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={6} md={6}>
            <StatsCard
              icon={Description}
              iconColor="purple"
              title="Selected Reports"
              description={this.props.location.state.id ? "Individual Employee" : "All Employees"}
              statIcon={DateRange}
              statText="Last 24 Hours"
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={6} md={6}>
            <StatsCard
              icon={Accessibility}
              iconColor="blue"
              title="Employee(s) Shown"
              description={this.state.employeeName || this.state.employeeCount + " Employees"}
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
              title="Performance Trend"
              text={
                <span>
                  <span className={this.props.classes.successText}>
                    <ArrowUpward
                      className={this.props.classes.upArrowCardCategory}
                    />{' '}
                    55%
                  </span>{" "}
                  increase from last reviewed performance.
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
              statText="last goal completed 2 days ago"
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

export default withStyles(dashboardStyle)(Dashboard);
