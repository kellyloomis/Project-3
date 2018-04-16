import React, { Component } from "react";
import { Link } from 'react-router-dom'

import {
  withStyles,
  IconButton,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Tooltip
} from "material-ui";

import { Edit, Close } from "material-ui-icons";


import PropTypes from "prop-types";

import tableStyle from "./../../variables/styles/tableStyle";

class CustomTable extends Component {
  
  handleEdit(obj) {
    console.log(obj);
  }

  render() {
    const { classes, tableHead, tableData, tableHeaderColor } = this.props;
    return (
      <div className={classes.tableResponsive}>
        <Table className={classes.table}>
          {tableHead !== undefined ? (
            <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
              <TableRow>
                {tableHead.map((prop, key) => {
                  return (
                    <TableCell
                      className={classes.tableCell + " " + classes.tableHeadCell}
                      key={key}
                    >
                      {prop}
                    </TableCell>
                  );
                })}
                <TableCell className={classes.tableCell + " " + classes.tableHeadCell}>
                  {"Available Actions"}
                </TableCell>
              </TableRow>
            </TableHead>
          ) : null}
          <TableBody>
            {tableData.map((prop, key) => {
              return (
                <TableRow key={key}>
                  {prop.map((prop, key) => {
                    return (
                      <TableCell className={classes.tableCell} key={key}>
                        {prop}
                      </TableCell>
                    );
                  })}
                  <TableCell className={classes.tableActions}>
                  <Tooltip
                    id="tooltip-top"
                    title="View Employee"
                    placement="top"
                    classes={{ tooltip: classes.tooltip }}
                  >
                    <IconButton
                      aria-label="Edit"
                      component={Link} 
                      to={{
                        pathname: "/employee-profile",
                        state: {employeeIdSelected: prop[0]}
                      }}
                      className={classes.tableActionButton}
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
                    title="Delete"
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
              );
            })}
          </TableBody>
        </Table>
      </div>
    );
  }
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray"
};

CustomTable.propTypes = {
  classes: PropTypes.object.isRequired,
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.string),
  tableData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string))
};

export default withStyles(tableStyle)(CustomTable);
