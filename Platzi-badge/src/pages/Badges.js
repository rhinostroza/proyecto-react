import React from 'react';
import { Link } from 'react-router-dom'

import confLogo from '../images/badge-header.svg';

import './styles/Badges.css';
import NavBar from '../components/Navbar';
import BadgesList from '../components/BadgesList';
import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import MiniLoader from '../components/MiniLoader';

class Badges extends React.Component {

    

    constructor(props){
        //Indiica que el componente va a iniciar la carga
        super(props);

        this.state = {
            loading: true,
            error: null,
            data: undefined,
        };
    }

    componentDidMount(prevcProps, prevState){
        //Indica que el componente ya cargó
        this.fetchData();

        // this.idInterval = setInterval(this.fetchData,5000)

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

    componentWillUnmount(){
        clearInterval(this.idInterval);
    }

    render(){
        //Indica que el componen va a cargar los siguiente
        if(this.state.loading === true && !this.state.data){ // y cuando no hay datos
            return <PageLoading />
        }
        if(this.state.error){
            return <PageError error={this.state.error}/>
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

                            {this.state.loading && <MiniLoader />}
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default Badges;
