import React from 'react';
import { Link } from 'react-router-dom'

import './styles/BadgesList.css';

class BadgesList extends React.Component {
    render(){
        
        if(this.props.badgesValues.length === 0)
        {
            return(
                <div>
                    <h3>Aún no existen Badges</h3>
                    <Link className="btn btn-primary" to="/badges/new">
                        Crea nuevo Badge
                    </Link>
                </div>
            );
        }

        return(
            <ul className="list-unstyled">
                {this.props.badgesValues.map(badge => {
                    return(
                        <li className="section" key={badge.id}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-3 container__userImage">
                                        <img className="container__userImage-logo" src={badge.avatarUrl} alt="Logo"/>
                                    </div>
                                    <div className="col-9 container__info">
                                        <p>{badge.firstName} {badge.lastName}</p>
                                        <div>
                                            <span className="container__social"></span>
                                            <span className="container__username">@{badge.twitter}</span>
                                        </div>
                                        <p>{badge.jobTitle}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        );
    }
}

export default BadgesList;
