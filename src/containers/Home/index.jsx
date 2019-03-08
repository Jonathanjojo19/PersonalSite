import React from 'react';
import LoadingScreen from 'react-loading-screen'; 

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import Footer from "../../components/Footer";
import Intro from "../Sections/Intro";
import About from "../Sections/About";
import Projects from "../Sections/Projects";
import Experiences from "../Sections/Experiences";
import Contacts from "../Sections/Contacts";
import logo from "../../icons/logo.svg";
import Navs from "../../components/Navbar";

class Home extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    greet() {
        const date = new Date();
        const hour = date.getHours();
        if (hour < 12) {
            return "Good Morning";
        } else if (hour < 18) {
            return "Good Afternoon";
        } else {
            return "Good Evening";
        }
    }
    
    componentDidMount () {
        setTimeout(() =>
            this.setState({ loading: false })
        , 2000)
    }
    
    render() {
        const {loading} = this.state;   
        return (
            <LoadingScreen
                loading={loading}
                bgColor='#000011'
                spinnerColor='#9EA8C7'
                textColor='#e6e6e6'
                logoSrc={logo}
                text={this.greet()}
            > 
                <div className="dark-bg">		
                    <Navs />
                    <Intro loading={loading}/>
                    <About/>
                    <Projects/>
                    <Experiences/>
                    <Contacts/>
                    <Footer/>
                </div>
            </LoadingScreen>
        )
    }
}

export default Home;