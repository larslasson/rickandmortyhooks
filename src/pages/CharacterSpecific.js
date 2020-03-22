import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { CHARACTER_API } from './../constants/constants';

export default function CharacterSpecific(props) {
    const [charResult, setcharResult] = useState(undefined);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios.get(CHARACTER_API + props.match.params.id)
            .then((result) => {
                setcharResult(result.data);
                setIsLoading(false)
            })
    }, [props])

    return (
        (isLoading) ?
            <div className="col-sm-12 text-center">
                <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1f430a36197347.57135ca19bbf5.gif" alt="loading" />
            </div> :
            <div className="row">
                <div className="col-sm-12">
                    {
                        (charResult !== undefined) ?
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <h1 className="card-title">{charResult.name}</h1>
                                        <img className="card-img" src={charResult.image} alt={charResult.name} />
                                        <br /><br />
                                        <p className="card-text">Origin: {charResult.origin.name}</p>
                                        <p className="card-text">Location: {charResult.location.name}</p>
                                        <p className="card-text">Created: {charResult.created}</p>
                                    </div>
                                </div>
                            </div> :
                            <div>No data</div>
                    }
                </div>
            </div>
    )
}