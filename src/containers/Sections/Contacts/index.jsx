import React from "react";
import Wrapper from "../../../components/SectionWrapper";

class Contacts extends React.Component {
    render() {
        return (
            <Wrapper className="light-bg h50" id="contacts" >
                <div style={{wordWrap: 'break-word', whiteSpace: "initial"}}>
                    <h4 className="dark-blue-text title">LET'S GET IN TOUCH WITH ME!</h4>
                    <h1 className="dark-blue-text bolder" style={{whiteSpace: "initial"}}>
                        jonathan<wbr/>christopher<wbr/>1199<wbr/>@gmail.com
                    </h1>                   
                </div>
            </Wrapper>
        );
    }  
}

export default Contacts;