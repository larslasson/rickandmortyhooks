import React from 'react';
import { Link } from 'react-router-dom';

const Character = ({ name, species, image, id, gender }) => {
    return (
        <div className="col-sm-4 character-card">
            <div className="card">
                <h3>{name}</h3>
                <img className="card-img" src={image} alt={'Character' + id} />
                <b>Species: {species}</b>
                <b>Gender: {gender}</b>
                <Link to={`/character-specific/${id}`} className="btn btn-primary">Read More</Link>
            </div>
        </div>
    )
}

export default Character;