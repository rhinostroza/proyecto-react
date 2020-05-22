import React from 'react';

import api from '../api';
import PageLoading from '../components/PageLoading';
import PageError from '../components/PageError';
import BadgeDetails from '../components/BadgeDetails';


class BadgeDetailsContainer extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            loading: false,
            error: null,
            data: undefined,
            modalIsOpen: false,
        };
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({
            loading: true,error: null,});

        try{
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );
            this.setState({loading: false, data: data});
        }catch(error){
            this.setState({loading: false, error: error});
        }
    }

    handleCloseModal = e =>{
        this.setState({modalIsOpen: false})
    }

    handleOpenModal = e =>{
        this.setState({modalIsOpen: true})
    }

    handleDeleteBadge = async e =>{
        this.setState({
            loading:true,
            error: null,
        })

        try{
            await api.badges.remove(
                this.props.match.params.badgeId
            )
        }catch(error){
            this.setState({loading: false, error: error})
        }
        this.setState({loading:false, error:null})
        this.props.history.push('/badges')
    }

    render(){
        if(this.state.loading || this.state.data === undefined){
            return <PageLoading />
        }
        if(this.state.error){
            return <PageError error={this.state.error}/>
        }
  
        return(            
            <BadgeDetails 
            badge={this.state.data}
            onCloseModal={this.handleCloseModal}
            onOpenModal={this.handleOpenModal}
            modalIsOpen={this.state.modalIsOpen}
            onDeleteBadge={this.handleDeleteBadge}
            />
        );
    }
}

export default BadgeDetailsContainer;