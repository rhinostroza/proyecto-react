import React from 'react';
import md5 from 'md5'

function Gravatar(props){
    const email = props.email;
    const hash = md5(email);

    return (
        <div className="col-3 container__userImage">
            <img className={props.className} src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} alt="Avatar"/>
        </div>
    );

}

export default Gravatar;