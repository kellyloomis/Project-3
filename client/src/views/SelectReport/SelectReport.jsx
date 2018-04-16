import React, {
    Component
} from "react";

import Card from "../../components/SelectReportPage/Card/Card.jsx";
import cards from "../../components/SelectReportPage/Card/cards.json"

class SelectReport extends Component {
    render() {
        return ( 
            <div className = "w3-content" >
                <div className = "w3-row-padding w3-center w3-margin-top" > 
                    {cards.data.map((item, index) => ( 
                        <Card key={index} title={item.title} text1={item.text1} text2={item.text2}/>
                    ))}
                </div> 
            </div>
        );
    }
}
export default SelectReport;