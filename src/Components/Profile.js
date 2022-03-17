import React from "react";
import PropTypes from "prop-types";

function Profile (props){
        return (
            
                <div className="card rounded" style={{width: "24rem", border:"solid 1px"}}>
                {props.children}
                        <div className="card-body">
                            <h5 className="card-title">{props.name} </h5>
                            <p className="card-text">{props.bio}</p>
                            <p className="card-text">{props.profession}</p>
                            <button onClick={props.data}>Click me !</button>
                        </div>
                </div>
           
        
        );
}

Profile.propTypes = {
    name: PropTypes.string.isRequired,
    bio: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
};

export default Profile;
