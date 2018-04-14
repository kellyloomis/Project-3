import React, { Component } from "react";
import "./Welcome.css";

import { Grid } from "material-ui";
import API from "./../../api/API";

import {
  OurHeader,
  RegularCard,
  Table,
  ItemGrid
} from "./../../components";

class Welcome extends Component {

	state = {
		user: JSON.parse(sessionStorage.getItem("user")),
		employees: "",
		data: []
	};


	componentDidMount() {
		console.log("Welcome mounted");
		if(this.state.user) {
			API.getAllEmployeeFromUser(this.state.user.id)
				.then(res => {
					this.setState({
						employees: res.data
					});
					this.createTableData();
				});
		}
	};

	createTableData() {
		// This will turn an array of object into an array of arrays
		let output = this.state.employees.map(obj => {
			return Object.keys(obj).map(key => {
				return obj[key];
			});
		});
		// Only keep the array indices we want
		output = output.map(arr => {
			return [arr[0].toString(), arr[1] + ' ' + arr[2], arr[3], arr[5]];
		});
		this.setState({
			data: output
		});
		console.log(this.state.data);
	}

	render() {
		return (
			<div className="w3-content">
				<OurHeader />
				<Grid container>
		          <ItemGrid xs={12} sm={12} md={12}>
		          {this.state.data.length !== 0 ?
		          	<RegularCard
		              headerColor="orange"
		              cardTitle="Employees Stats"
		              cardSubtitle={"Updated as of: " + new Date().toLocaleDateString('en-US')}
		              content={
		                <Table
		                  tableHeaderColor="warning"
		                  tableHead={["ID", "Name", "Manager", "Department"]}
		                  tableData={this.state.data}
		                />
		              }
		            />
		            :
		            <RegularCard
		              headerColor="orange"
		              cardTitle="No Employees To List"
		              cardSubtitle="Click Add New Employee to add an employee!"
		            />
		          }
		          </ItemGrid>
		        </Grid>
			</div>
		);
	}
}

export default Welcome;