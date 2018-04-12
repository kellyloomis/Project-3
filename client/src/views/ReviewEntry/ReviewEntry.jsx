import React, { Component } from "react";
import Nav from "../../components/ReviewEntryPage/Nav/Nav.jsx";
import Form from "../../components/ReviewEntryPage/Form/Form.jsx"
import Category from "../../components/ReviewEntryPage/Category/Category.jsx";
import categories from "../../components/ReviewEntryPage/Category/categories.json";

import "./ReviewEntry.css";

class ReviewEntry extends Component {
	
	render() {
		return (
			
			<div className="w3-content">
				<Nav />
				<div>
					{categories.map((item, index) => (
						<Category  key={index} title={item.title} text={item.text}/>
					))}
				</div>
				<div>
					<Form />
				</div>
			</div>
		);
	}
}

export default ReviewEntry;
