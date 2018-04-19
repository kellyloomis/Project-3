import React from "react";

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

import { goals, achieved } from "./../../variables/general";

import tasksCardStyle from "./../../variables/styles/tasksCardStyle";

class TasksCard extends React.Component {
  state = {
    value: 0
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };
  render() {
    const { classes } = this.props;
    console.log(goals);
    console.log(this.state);
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
                tasksIndexes={[0, 1]}
                tasks={goals}
              />
            </Typography>
          )}
          {this.state.value === 1 && (
            <Typography component="div">
              <Tasks
                checkedIndexes={[0,1, 2]}
                tasksIndexes={[0, 1, 2]}
                tasks={achieved}
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
