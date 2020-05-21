import React from 'react';
import { Link } from 'react-router-dom'

import confLogo from '../images/badge-header.svg';

import './styles/Badges.css';
import NavBar from '../components/Navbar';
import BadgesList from '../components/BadgesList';
import api from '../api';

class Badges extends React.Component {

    constructor(props){
        //Indiica que el componente va a iniciar la carga
        super(props);

        this.state = {
            loading: true,
            error: null,
            data: [],
        };
    }

    componentDidMount(prevcProps, prevState){
        //Indica que el componente ya cargó
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({
            loading: true,
            error: null,
        })

        try{
            const data = await api.badges.list();
            this.setState({
                loading: false,
                data: data,
            });
        }catch (error){
            this.setState({
                loading: false,
                error: error,
            });
        }
    }

    componentDidUpdate(){

    }

    render(){
        
        //Indica que el componen va a cargar los siguiente
        if(this.state.loading){
            return 'loading...'
        }
        if(this.state.error){
            return `Error: ${this.state.error.message}`;
        }
        return(
            <React.Fragment>
                <div className="Badges">
                    <div className="Badges__hero"> 
                        <div className="Badges__container"> 
                            <img className="Badges_conf-logo" src={confLogo} alt="Logo" />
                        </div>
                    </div> 
                </div>    

                <div className="Badge__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Barge
                        </Link>
                    </div>
                    <div className="Badges__list">
                        <div className="Badges__container">
                            <BadgesList badgesValues={this.state.data}/>
                        </div>
                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default Badges;
