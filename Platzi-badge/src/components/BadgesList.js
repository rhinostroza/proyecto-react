import React from 'react';
import { Link } from 'react-router-dom'

import Gravatar from '../components/Gravatar'
import './styles/BadgesList.css';

function useSearchBadges(badges){
    const [query, setQuery] = React.useState('');
    const [filterBadges, setFilterBadges] = React.useState(badges)
    
    React.useMemo(() => {
        const result = badges.filter(badge => {  
            return `${badge.firstName} ${badge.lastName}`
            .toLowerCase()
            .includes(query.toLowerCase())
        })
        setFilterBadges(result)
    },[badges,query])

    return {query, setQuery, filterBadges};
}

function BadgesList(props) { 

    const badges = props.badgesValues;
    
    const {query, setQuery, filterBadges} = useSearchBadges(badges)
    
    
    if(filterBadges.length === 0)
    {
        return(
            <div>
                <div className="form-group">
                    <label>Filter Badges</label>
                    {/* <input type="text"  value=""/> */}
                    <input type="text" className="form-control" 
                        value={query} 
                        onChange={ (e) => {
                        setQuery(e.target.value)
                    }}/>
                </div>

                <h3>Aún no existen Badges</h3>
                <Link className="btn btn-primary" to="/badges/new">
                    Crea nuevo Badge
                </Link>
            </div>
        );
    }

    return(
        <div className="BadgesList">
            <div className="form-group">
                <label>Filter Badges</label>
                {/* <input type="text"  value=""/> */}
                <input type="text" className="form-control" 
                    value={query} 
                    onChange={ (e) => {
                    setQuery(e.target.value)
                }}/>
            </div>

            <ul className="list-unstyled">
                {filterBadges.map(badge => {
                    return(
                        <Link className="text-reset text-decoration-none" to={`/badges/${badge.id}`}>
                            <li className="section" key={badge.id}>
                                <div className="container">
                                    <div className="row">
                                        <Gravatar 
                                        className="container__userImage-logo"
                                        email={badge.email}
                                        />
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
                        </Link>
                    )
                })}
            </ul>
        </div>
    );
}

export default BadgesList;
