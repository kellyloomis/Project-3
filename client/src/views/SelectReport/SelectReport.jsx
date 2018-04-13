import React, {
    Component
} from "react";
import Header from "../../components/SelectReportPage/Header/Header.jsx";
import Card from "../../components/SelectReportPage/Card/Card.jsx";
import Footer from "../../components/Common/Footer/Footer.jsx"
import cards from "../../components/SelectReportPage/Card/cards.json"

class SelectReport extends Component {
    render() {
        return ( 
            <div>
                <div>
                    <Header/>
                </div>
                <div className="w3-row-padding w3-center w3-margin-top"> 
                    {cards.data.map((item, index) => ( 
                        <Card key={index} title={item.title} text1={item.text1} text2={item.text2}/>
                    ))}
                </div> 
                <div>
                    <Footer/>
                </div>
            </div>
        );
    }
}
export default SelectReport;