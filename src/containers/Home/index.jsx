import React from 'react';
import Footer from "../../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Navs from '../../components/Navbar';
import Intro from "../Sections/Intro";
import About from "../Sections/About";
import Projects from "../Sections/Projects";
import Experiences from "../Sections/Experiences";
import Contacts from "../Sections/Contacts";

class Home extends React.Component {
    render() {
        return (
            <div>		
                <Navs />                	
                <Intro />
                <About />
                <Projects />
                <Experiences />
                <Contacts />
                <Footer />
            </div>
        )
    }
}

export default Home;