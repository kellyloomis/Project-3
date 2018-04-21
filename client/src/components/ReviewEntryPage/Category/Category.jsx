import React, { Component } from 'react';
import './Category.css';

class Category extends Component {
  render() {
    return (
      <div className="w3-third w3-container w3-margin-bottom">
        <div className="w3-container w3-white">
          <button
            type="button"
            className="btn btn-info btn-circle btn-xl"
            id="greenButton"
            onClick={(score,event) =>
              this.props.onClick(
                {
                  subject: this.props.title,
                  score: 3
                },
                score,
                event
              )
            }
          >
            <i className="fa fa-check" />
          </button>
          <button
            type="button"
            className="btn btn-info btn-circle btn-xl"
            id="yellowButton"
            onClick={score =>
              this.props.onClick(
                {
                  subject: this.props.title,
                  score: 2
                },
                score
              )
            }
          >
            <i className="fa fa-check" />
          </button>
          <button
            type="button"
            className="btn btn-info btn-circle btn-xl"
            id="redButton"
            onClick={score =>
              this.props.onClick(
                {
                  subject: this.props.title,
                  score: 1
                },
                score
              )
            }
          >
            <i className="fa fa-check" />
          </button>
          <br />
          <br />
          <p>
            <b>{this.props.title}</b>
          </p>
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
}

export default Category;
