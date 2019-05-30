import React from "react";
import experiences from "../../containers/Sections/Experiences/experiences";

const CompleteAccordion = () => (
    <Accordion data={experiences}/>
);
  
class Accordion extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            accordionItems: []
        }

        this.click = this.click.bind(this)
    }

    componentWillMount() {
        let accordion = [];
    
        this.props.data.forEach((i) => {
            accordion.push({
                title: i.title, 
                content: i.content, 
                period: i.period,
                open: false
            });
        });

        this.setState({
            accordionItems: accordion
        })
    }
    
    click (i) {
        const newAccordion = this.state.accordionItems.slice();
        const index = newAccordion.indexOf(i);
        newAccordion[index].open = !newAccordion[index].open;
        this.setState({accordionItems: newAccordion});
    }
    
    render () {
        const sections = this.state.accordionItems.map((i) => (
            <div 
                key={this.state.accordionItems.indexOf(i)}
            >
                <div 
                    className={"acc-title " + (i.open ? "light-blue-text" : "dark-grey-text")}
                    onClick={this.click.bind(null, i)}
                >
                    <div className="arrow-wrapper">
                        <i className={i.open 
                            ? "fa fa-angle-down fa-rotate-180" 
                            : "fa fa-angle-down"}
                        ></i>
                    </div>
                    <h5 className="acc-title-text">
                        {i.title}
                    </h5>
                    <p className="acc-title-text light-grey-text">
                        {i.period}
                    </p>
                </div>
                <div className={i.open 
                    ? "content content-open" 
                    : "content"}
                >
                    <div className={i.open 
                        ? "content-text content-text-open" 
                        : "content-text"}
                    > 
                        <h6>{i.content}</h6>
                    </div>
                </div>
            </div>
        ));
        
        return (
            <div className="accordion">
                {sections}
            </div>
        );
    }
}
  
export default CompleteAccordion;