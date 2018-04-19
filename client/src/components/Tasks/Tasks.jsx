import React from "react";
import API from "./../../api/API";

import {
  withStyles,
  Checkbox,
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Tooltip,
  FormControl,
  Input,
  InputLabel,
  InputAdornment
} from "material-ui";
import { Edit, Close, Check, Done } from "material-ui-icons";

import PropTypes from "prop-types";

import tasksStyle from "./../../variables/styles/tasksStyle.jsx";

class Tasks extends React.Component {
  state = {
    checked: this.props.checkedIndexes,
    editValue: "",
    editing: false,
    currentId: "",
    currentGoal: ""
  };
  // Handles updating component state when the user types into the input field
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };
  handleToggle = value => () => {
    const { checked } = this.state;
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    this.setState({
      checked: newChecked
    });
    console.log(this.state);
  };
  handleEdit = value => () => {
    let id = this.props.ids[value];
    this.setState({
      editValue: value,
      editing: true,
      currentId: id,
      currentGoal: this.props.tasks[value]
    });
  };
  handleChangeGoal = () => {
    if(this.props.disable) {
      console.log("Changing Achieved ID: " + this.state.currentId + " into " + this.state.currentGoal);
    } else {
      console.log("Changing Goal ID: " + this.state.currentId + " into " + this.state.currentGoal);
      API.updateGoal(this.state.currentId, {
        goals: this.state.currentGoal
      })
        .then(res => {
          this.setState({
            editing: false
          });
          this.props.taskUpdate();
        });
    }
  };
  componentDidMount() {
    console.log(this.state);
  }
  render() {
    const { classes, tasksIndexes, tasks, disable } = this.props;
    return (
      <Table className={classes.table}>
        <TableBody>
          {tasksIndexes.map(value => (
            <TableRow key={value} className={classes.tableRow}>
              <TableCell className={classes.tableCell}>
                <Checkbox
                  checked={this.state.checked.indexOf(value) !== -1}
                  tabIndex={-1}
                  onClick={this.handleToggle(value)}
                  checkedIcon={<Check className={classes.checkedIcon} />}
                  icon={<Check className={classes.uncheckedIcon} />}
                  disabled={disable}
                  classes={{
                    checked: classes.checked
                  }}
                />
              </TableCell>
              <TableCell className={classes.tableCell}>
                {this.state.editing && this.state.editValue === value ? 
                  <FormControl className={classes.margin + " " + classes.textField}>
                    <InputLabel htmlFor="goal-textbox">Goal</InputLabel>
                    <Input
                      id="goal-textbox"
                      type={'text'}
                      name="currentGoal"
                      onChange={this.handleInputChange}
                      value={this.state.currentGoal || tasks[value]}
                      endAdornment={
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                             onClick={this.handleChangeGoal}
                          >
                            <Done />
                          </IconButton>
                        </InputAdornment>
                      }
                    />
                  </FormControl>
                  : tasks[value]}
              </TableCell>
              <TableCell className={classes.tableActions}>
                <Tooltip
                  id="tooltip-top"
                  title="Edit"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    aria-label="Edit"
                    className={classes.tableActionButton}
                    onClick={this.handleEdit(value)}
                  >
                    <Edit
                      className={
                        classes.tableActionButtonIcon + " " + classes.edit
                      }
                    />
                  </IconButton>
                </Tooltip>
                <Tooltip
                  id="tooltip-top-start"
                  title="Remove"
                  placement="top"
                  classes={{ tooltip: classes.tooltip }}
                >
                  <IconButton
                    aria-label="Close"
                    className={classes.tableActionButton}
                  >
                    <Close
                      className={
                        classes.tableActionButtonIcon + " " + classes.close
                      }
                    />
                  </IconButton>
                </Tooltip>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    );
  }
}

Tasks.propTypes = {
  classes: PropTypes.object.isRequired,
  tasksIndexes: PropTypes.arrayOf(PropTypes.number),
  tasks: PropTypes.arrayOf(PropTypes.node)
};

export default withStyles(tasksStyle)(Tasks);
