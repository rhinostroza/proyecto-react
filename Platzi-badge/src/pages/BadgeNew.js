import React from 'react';

import './styles/BadgeNew.css';
import header from "../images/platziconf-logo.svg";
import NavBar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'
import api from '../api';
import PageLoading from '../components/PageLoading'

class BadgeNew extends React.Component {

  state = {
    loading: false,
    error: null,
    form: {
      firstName: '',
      lastName: '',
      email: '',
      jobTitle: '',
      twitter: '',
    }
  };

  handleChange = e => {
     
    this.setState({
      //Ocurre un problema, el form se esta sobre escribiendo, para que esto no ocurra.
      //obtenemos los valores generados por el primer input, luego lo descomponemos
      //En caso tenga otro nombre, se agregará al anterior atributo o reemplazará
      form:{
        ...this.state.form,
        [e.target.name]: e.target.value,
      }
    })
  }

  handleSubmit = async e =>{
    e.preventDefault();
    this.setState({loading: true, error: null})

    try{
      await api.badges.create(this.state.form)
      this.setState({loading: false, error: null})
      this.props.history.push('/badges');
    }catch(error){
      debugger
      this.setState({loading: false, error: error})
    }
  }

  render(){
    if(this.state.loading){
      return <PageLoading />
    }
    return(
      <React.Fragment>
          <div className="BadgeNew__hero">
            <img className="BadgeNew__hero-img img_fluid" src={header} alt="Logo" />
          </div>

          <div className="container">
              <div className="row">
                  <div className="col-6">
                  <h1> New Attendant </h1>
                    <Badge 
                      firstName={this.state.form.firstName || 'First Name'} 
                      lastName={this.state.form.lastName || 'Last Name'}
                      jobTitle={this.state.form.jobTitle || 'Job Title'}
                      twitter={this.state.form.twitter || 'twitter'}
                      email={this.state.form.email || 'email'}
                    />
                  </div>
                  <div className="col-6">
                    <BadgeForm 
                    onChange={this.handleChange}
                    onSubmit={this.handleSubmit}
                    formValues={this.state.form} 
                    error={this.state.error}
                    />
                  </div>
              </div>
          </div>
      </React.Fragment>
    );
  }
}

export default BadgeNew;
