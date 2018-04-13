import React, { Component } from "react";
import "./Welcome.css";

import { Grid } from "material-ui";

import {
  OurHeader,
  RegularCard,
  Table,
  ItemGrid
} from "./../../components";

class Welcome extends Component {

	render() {
		return (
			<div className="w3-content">
				<OurHeader />
				<Grid container>
		          <ItemGrid xs={12} sm={12} md={12}>
		            <RegularCard
		              headerColor="orange"
		              cardTitle="Employees Stats"
		              cardSubtitle="New employees on 7th April, 2018"
		              content={
		                <Table
		                  tableHeaderColor="warning"
		                  tableHead={["ID", "Name", "Salary", "Country"]}
		                  tableData={[
		                    ["1", "John Doe", "$36,738", "Niger"],
		                    ["2", "Jane Hope", "$23,789", "Curaçao"],
		                    ["3", "Han Solo", "$56,142", "Netherlands"],
		                    ["4", "Luke Skywalker", "$38,735", "Korea, South"]
		                  ]}
		                />
		              }
		            />
		          </ItemGrid>
		        </Grid>
			</div>
		);
	}
}

export default Welcome;