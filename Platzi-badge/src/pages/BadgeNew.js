import React from 'react';

import './styles/BadgeNew.css';
import header from "../images/badge-header.svg";
import NavBar from '../components/Navbar';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm'

class BadgeNew extends React.Component {

  state = {
    form: {
      firstName: '',
      lastname: '',
      email: '',
      jobtitle: '',
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

  render(){
    return(
      <div>
          <NavBar />
          <div className="BadgeNew__hero">
            <img className="img_fluid" src={header} alt="Logo" />
          </div>

          <div className="container">
              <div className="row">
                  <div className="col-6">
                    <Badge 
                      firstName={this.state.form.firstName} 
                      lastName={this.state.form.lastname}
                      avatarUrl="https://s.gravatar.com/avatar/47cb3468698c5d009196a78ab62a9745?s=80"
                      jobTitle={this.state.form.jobtitle}
                      twitter={this.state.form.twitter}
                      email={this.state.form.email}
                    />
                  </div>
                  <div className="col-6">
                    <BadgeForm 
                    onChange={this.handleChange}
                    formValues={this.state.form} />
                  </div>
              </div>
          </div>
      </div>  
    );
  }
}

export default BadgeNew;
