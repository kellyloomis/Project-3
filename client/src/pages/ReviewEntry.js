import React, { Component } from "react";
import Nav from "../components/ReviewEntryPage/Nav/Nav.js";
import Form from "../components/ReviewEntryPage/Form/Form.js"
import Category from "../components/ReviewEntryPage/Category/Category.js";
import Footer from "../components/Common/Footer/Footer.js";
import categories from "../components/ReviewEntryPage/Category/categories.json";

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
				<Footer />
			</div>
		);
	}
}

export default ReviewEntry;
