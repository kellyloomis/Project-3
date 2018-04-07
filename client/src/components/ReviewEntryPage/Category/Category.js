import React, { Component } from "react";
import "./Category.css"

class Category extends Component {
	render() {
		return (
			<div className="w3-third w3-container w3-margin-bottom" key={this.props.key}>
				<div className="w3-container w3-white">
					<button type="button" class="btn btn-info btn-circle btn-xl" id="greenButton"><i class="fa fa-check"></i></button>
					<button type="button" class="btn btn-info btn-circle btn-xl" id="yellowButton"><i class="fa fa-check"></i></button>
					<button type="button" class="btn btn-info btn-circle btn-xl" id="redButton"><i class="fa fa-check"></i></button>
					<br/><br/>
					<p><b>{this.props.title}</b></p>
					<p>{this.props.text}</p>
				</div>
			</div>
		);
	} 
}

export default Category;
