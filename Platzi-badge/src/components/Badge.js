import React from 'react';
import './styles/Badge.css';
import conLogo from '../images/badge-header.svg';
import Gravatar from './Gravatar';


class Badge extends React.Component {
    render(){

        return(
            <div className="Badge">
                <div className="Badge__header">
                    <img src={conLogo} alt="Logo de la conferencia"/>
                </div>

                <div className="Badge__section-name">
                    <Gravatar 
                    className="container__userImage-logo"
                    email={this.props.email}
                    />
                    <h1>{this.props.firstName} <br/> {this.props.lastName} </h1>
                </div>

                <div className="Badge__section-info">
                    <div>{this.props.jobTitle}</div>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="Badge__footer">#PlatziConf</div>

            </div>
        );
    }
}

export default Badge;
