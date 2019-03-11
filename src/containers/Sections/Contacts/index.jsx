import React from "react";
import Wrapper from "../../../components/SectionWrapper";

import emailLogo from "../../../icons/emailLogo.svg";
import linkedinLogo from "../../../icons/linkedin.svg";
import phoneLogo from "../../../icons/phoneLogo.svg";

class Contacts extends React.Component {
    render() {
        return (
            <Wrapper
                light
                height="50"
                id="contacts"
                align="center"
            >
                <div style={{ wordWrap: 'break-word', whiteSpace: "initial" }}>
                    <h4 className="dark-blue-text title">LET'S GET IN TOUCH WITH ME!</h4>
                    <h3 className="dark-blue-text single-string-page mainTitle" style={{fontSize: 40, marginTop:20, marginBottom:20}}>
                        Jonathan Christopher Jakub
                    </h3>
                    <span className="line-wrapped">
                        <a href="https://linkedin.com/in/jonathan-christopher-jakub-aba556164/">
                            <img
                                src={linkedinLogo}
                                alt="LinkedIn"
                                style={{ width: 25, marginRight: 5, marginLeft: 5 }}
                            />
                        </a>
                        <a href="mailto: jonathanchristopher1199@gmail.com">
                            <img
                                src={emailLogo}
                                alt="Email"
                                style={{ width: 25, marginRight: 5, marginLeft: 5 }}
                            />
                        </a>
                        <a href="tel:+6282176854180">
                            <img
                                src={phoneLogo}
                                alt="Phone"
                                style={{ width: 25, marginRight: 5, marginLeft: 5 }}
                            />
                        </a>
                    </span>
                </div>
            </Wrapper>
        );
    }
}

export default Contacts;