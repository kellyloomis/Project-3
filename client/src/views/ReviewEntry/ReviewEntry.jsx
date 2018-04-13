import React, { Component } from "react";
import Category from "../../components/ReviewEntryPage/Category/Category.jsx";
import categories from "../../components/ReviewEntryPage/Category/categories.json";

import "./ReviewEntry.css";

class ReviewEntry extends Component {
	
	render() {
		return (
			
			<div className="w3-content">
				<div className="w3-dropdown-hover">
				  <button className="w3-button">Select Employee</button>
				  <div className="w3-dropdown-content w3-bar-block w3-border">
				    <a href="{#}" class="w3-bar-item w3-button">Link 1</a>
				    <a href="{#}" class="w3-bar-item w3-button">Link 2</a>
				    <a href="{#}" class="w3-bar-item w3-button">Link 3</a>
				  </div>
				</div>
				<div>
					{categories.data.map((item, index) => (
						<Category  key={index} title={item.title} text={item.text}/>
					))}
				</div>
				<div>
					<button className="w3-btn w3-blue">Submit</button>
				</div>
			</div>
		);
	}
}

export default ReviewEntry;
