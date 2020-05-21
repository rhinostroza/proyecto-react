import React from 'react';

import './styles/BadgesList.css';

class BadgesList extends React.Component {
    render(){
        return(
            <ul className="list-unstyled">
                {this.props.badgesValues.map(badge => {
                    return(
                        <li className="section">
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
