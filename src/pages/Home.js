import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { HEROKU_BYPASS_CORS, CHARACTER_API } from '../constants/constants';
import Character from './../components/character-cards';

export default function RickandMorty() {
  const [characters, setCharacters] = useState(undefined);
  const [isLoading, setIsLoading] = useState(true);
  const [isResultsFiltered, setIsResultsFiltered] = useState(false);
  const [filteredResults, setfilteredResults] = useState([]);
  const [searchPhrase, setSearchPhrase] = useState('');

  useEffect(() => {
    axios.get(HEROKU_BYPASS_CORS + CHARACTER_API)
      .then((result) => {
        setCharacters(result.data.results);
        setIsLoading(false)
      })
  }, [])

  const handleFiltering = (input) => {
    let filteredCharacterPosts = characters.filter((value) => {
      return value.name.toLowerCase().includes((input.target.value).toLowerCase())
    })
    setfilteredResults(filteredCharacterPosts)
    setSearchPhrase(input.target.value)
    setIsResultsFiltered(true)
  }

  return (
    (isLoading) ?
      <div className="col-sm-12 text-center">
        <img src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/1f430a36197347.57135ca19bbf5.gif" alt="loading" />
      </div> :
      <div className="App">
        <h1>Welcome to my Rick and Morty</h1>
        <img src="https://i2.wp.com/ramenswag.com/wp-content/uploads/2019/03/Rick-and-Morty-HD-Wallpapers-and-Backgrounds-3.jpg?fit=1920%2C1080&ssl=1" alt="intro" className="img-fluid" />
        <div className="row">
          <div className="col-sm-12">
            <h2>Rick and Morty characters</h2>
          </div>
          <div className="col-sm-12">
            <form>
              <p>Search for a name</p>
              <input type='text'
                name='username'
                onChange={handleFiltering}
                className="form-control"
                placeholder="Search..."
              />
              <br />
              <br />
            </form>
          </div>
        </div>
        <div className="row">
          {
            (isResultsFiltered) ?
              <>
                <h1 className="col-sm-12">Filtered Results for {searchPhrase}</h1>
                {
                  (filteredResults.length > 0) ?
                    filteredResults.map((value, index) => {
                      return <Character key={index}
                        id={value.id}
                        name={value.name}
                        image={value.image}
                        species={value.species}
                        gender={value.gender}
                        origin={value.origin}
                      />
                    }) :
                    <div>No Results</div>
                }
              </> :
              <>
                {
                  (characters !== undefined) ?
                    characters.map((value, index) => {
                      return <Character key={index}
                        id={value.id}
                        name={value.name}
                        image={value.image}
                        species={value.species}
                        gender={value.gender}
                        origin={value.origin}
                      />
                    }) :
                    <div>No Data for the characters yet</div>
                }
              </>
          }
        </div>
      </div>
  )
}