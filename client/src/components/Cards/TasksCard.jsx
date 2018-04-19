import React from "react";
import API from "./../../api/API";

import {
  withStyles,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Tabs,
  Tab
} from "material-ui";
import { Code, Cloud } from "material-ui-icons";

import { Tasks } from "./../../components";

// import { goals, achieved } from "./../../variables/general";

import tasksCardStyle from "./../../variables/styles/tasksCardStyle";

class TasksCard extends React.Component {
  constructor(props) {
    super();
    console.log("TASKS");
    console.log(props);
    this.state = {
      value: 0,
      employeeId: props.employee,
      goals: [],
      goalIndex: [],
      goalIds: [],
      achieved: [],
      achieveIndex: [],
      achievedIds: []
    };
    this.updateTaskCard = this.updateTaskCard.bind(this);
    if(this.state.employeeId) {
      API.getEmployeeGoals(this.state.employeeId)
        .then(res => {
          console.log("Got Goals!");
          let goalArray = res.data.map(goal => {
            return goal.goals;
          });
          let goalIndexes = [];
          for(let i = 0; i < goalArray.length; i++) {
            goalIndexes.push(i);
          }
          let goalIdArray = res.data.map(goal => {
            return goal.id;
          });
          console.log("INDEX");
          console.log(goalIndexes);
          console.log("ARRAY");
          console.log(goalArray);
          this.setState({
            goals: goalArray,
            goalIndex: goalIndexes,
            goalIds: goalIdArray 
          });
        });

        API.getEmployeeAchieved(this.state.employeeId)
        .then(res => {
          console.log("Got Achieved Goals!");
          console.log(res);
          let achievedArray = res.data.map(achieved => {
            return achieved.description;
          });
          let achievedIndexes = [];
          for(let i = 0; i < achievedArray.length; i++) {
            achievedIndexes.push(i);
          }
          let achievedIdArray = res.data.map(achieved => {
            return achieved.id;
          });
          console.log("INDEX");
          console.log(achievedIndexes);
          console.log("ARRAY");
          console.log(achievedArray);
          this.setState({
            achieved: achievedArray,
            achieveIndex: achievedIndexes,
            achievedIds: achievedIdArray
          });
        });
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };
  updateTaskCard() {
    if(this.state.employeeId) {
      API.getEmployeeGoals(this.state.employeeId)
        .then(res => {
          console.log("Got Goals!");
          let goalArray = res.data.map(goal => {
            return goal.goals;
          });
          let goalIndexes = [];
          for(let i = 0; i < goalArray.length; i++) {
            goalIndexes.push(i);
          }
          let goalIdArray = res.data.map(goal => {
            return goal.id;
          });
          console.log("INDEX");
          console.log(goalIndexes);
          console.log("ARRAY");
          console.log(goalArray);
          this.setState({
            goals: goalArray,
            goalIndex: goalIndexes,
            goalIds: goalIdArray 
          });
        });

        API.getEmployeeAchieved(this.state.employeeId)
        .then(res => {
          console.log("Got Achieved Goals!");
          console.log(res);
          let achievedArray = res.data.map(achieved => {
            return achieved.description;
          });
          let achievedIndexes = [];
          for(let i = 0; i < achievedArray.length; i++) {
            achievedIndexes.push(i);
          }
          let achievedIdArray = res.data.map(achieved => {
            return achieved.id;
          });
          console.log("INDEX");
          console.log(achievedIndexes);
          console.log("ARRAY");
          console.log(achievedArray);
          this.setState({
            achieved: achievedArray,
            achieveIndex: achievedIndexes,
            achievedIds: achievedIdArray
          });
        });
    }
  }
  render() {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardHeader
          classes={{
            root: classes.cardHeader,
            title: classes.cardTitle,
            content: classes.cardHeaderContent
          }}
          title="Tasks:"
          action={
            <Tabs
              classes={{
                flexContainer: classes.tabsContainer
              }}
              value={this.state.value}
              onChange={this.handleChange}
              indicatorClassName={classes.displayNone}
              textColor="inherit"
            >
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  rootLabelIcon: classes.labelIcon,
                  label: classes.label,
                  rootInheritSelected: classes.rootInheritSelected
                }}
                icon={<Code className={classes.tabIcon} />}
                label={"Goals"}
              />
              <Tab
                classes={{
                  wrapper: classes.tabWrapper,
                  rootLabelIcon: classes.labelIcon,
                  label: classes.label,
                  rootInheritSelected: classes.rootInheritSelected
                }}
                icon={<Cloud className={classes.tabIcon} />}
                label={"Achieved"}
              />
            </Tabs>
          }
        />
        <CardContent>
          {this.state.value === 0 && (
            <Typography component="div">
              <Tasks
                checkedIndexes={[]}
                tasksIndexes={this.state.goalIndex}
                tasks={this.state.goals}
                ids={this.state.goalIds}
                taskUpdate={this.updateTaskCard}
              />
            </Typography>
          )}
          {this.state.value === 1 && (
            <Typography component="div">
              <Tasks
                checkedIndexes={this.state.achieveIndex}
                tasksIndexes={this.state.achieveIndex}
                tasks={this.state.achieved}
                ids={this.state.achievedIds}
                disable={true}
              />
            </Typography>
          )}
        </CardContent>
      </Card>
    );
  }
}

export default withStyles(tasksCardStyle)(TasksCard);
