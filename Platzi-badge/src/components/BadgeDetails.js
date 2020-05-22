import React from 'react'
import DeleteBadgeModal from './DeleteBadgeModal'

import { Link } from 'react-router-dom'

import './styles/BadgeDetails.css'
import confLog from '../images/platziconf-logo.svg'
import Badge from './Badge';

function useIncreaseCount(max){
    const [ count, setCount ] = React.useState(0);

    if(count > max){
        setCount(0)
    }

    return [count, setCount]
}

function BadgeDetails(props){
    //Similar al state y serState
    // const [ count, setCount ] = React.useState(0);
    const [count, setCount] = useIncreaseCount(4);
    const badge = props.badge;

    return(
        <div>
            <div className="BadgeDetails__hero">
                <div className="container">
                    <div className="row">
                        <div className="col-6 container-image">
                            <img src={confLog} alt="Logo de la conferencia" />
                        </div>
                        <div className="col-6 container-image BadgeDetails__hero-attendant-name" >
                            <h1>{badge.firstName} {badge.lastName}</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                    <Badge 
                            firstName={badge.firstName}
                            lastName={badge.lastName}
                            email={badge.email}
                            twitter={badge.twitter}
                            jobTitle={badge.jobTitle}
                        />                          
                    </div>
                    <div className="col">
                        <h2>Actions</h2>
                        <div>
                            <div>
                                <button onClick={() => {
                                    setCount(count+1);
                                }} className="btn btn-primary mr-4">
                                    Incrementa contador {count}
                                </button>
                                <Link className="btn btn-primary mb-4" to={`/badges/${badge.id}/edit`}>
                                    Edit
                                </Link>
                            </div>
                            <div>
                                <button onClick={props.onOpenModal} className="btn btn-danger">
                                    Delete
                                </button>
                                <DeleteBadgeModal 
                                    isOpen={props.modalIsOpen} 
                                    onClose={props.onCloseModal}
                                    onDeleteBadge={props.onDeleteBadge} />
                            </div> 
                        </div> 
                    </div>                    
                </div>
            </div>
        </div>
    )
}

export default BadgeDetails