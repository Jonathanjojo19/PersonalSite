import React from "react";
import experiences from "./experiences";

class AccordionItem extends React.Component {
    constructor() {
        super();
        this.state = {
            active: false
        };
        this.toggle = this.toggle.bind(this);
    }

    toggle() {
        this.setState({
            active: !this.state.active,
            className: "acc-active"
        });
    }
    
    render() {
        const activeClass = this.state.active ? "acc-active" : "acc-inactive";
        const item = this.props.contents;
        return (
            <div className={activeClass} onClick={this.toggle}>
                <span className="acc-title">{item.title}</span>
                <span>{item.period}</span>
                <span className="folding-pannel acc-content">{item.content}</span>
            </div>
        );
    }
}
  
class Accordion extends React.Component {
    constructor() {
        super();
        this.state = {
            contents: experiences,
        };
        this.renderContents = this.renderContents.bind(this);
    }

    renderContents(key) {
        return <AccordionItem key={key} index={key} contents={this.state.contents[key]} />
    }

    render() {
        return(
            <div className="accordion-container">
                {Object.keys(this.state.contents).map(this.renderContents)}
            </div>
        )
    }
}


export default Accordion;