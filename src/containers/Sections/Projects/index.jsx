import React from "react";
import Wrapper from "../../../components/SectionWrapper";
import Card from "../../../components/ProjectCard";

class Intro extends React.Component {
    render() {
        return (
            <Wrapper className="dark-bg full text-center" style={{ marginTop: -20 }} id="projects">
                <div>
                    <h5 className="light-blue-text title" style={{ marginBottom: 20}}>PROJECTS</h5>
                    <div className="row justify-contents-start">
                        <div className="col-md-4">
                            <Card title="IT-Dev Staff" subtitle="Feb 2018 - Dec 2018">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deserunt laudantium ab adipisci illo nostrum omnis eveniet itaque, a totam! Ratione non fugit asperiores consequuntur reiciendis quam blanditiis accusamus doloribus!
                            </Card>
                        </div>  
                        <div className="col-md-4">
                            <Card title="IT-Dev Staff" subtitle="Feb 2018 - Dec 2018">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deserunt laudantium ab adipisci illo nostrum omnis eveniet itaque, a totam! Ratione non fugit asperiores consequuntur reiciendis quam blanditiis accusamus doloribus!
                            </Card>
                        </div>  
                        <div className="col-md-4">
                            <Card title="IT-Dev Staff" subtitle="Feb 2018 - Dec 2018">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deserunt laudantium ab adipisci illo nostrum omnis eveniet itaque, a totam! Ratione non fugit asperiores consequuntur reiciendis quam blanditiis accusamus doloribus!
                            </Card>
                        </div>  
                    </div>
                </div>
            </Wrapper>
        );
    }  
}

export default Intro;