import React, { useContext, useEffect, useState } from "react";
import { IMovie } from "../entities/IMovie";
import { ThemeContext } from "../hooks/ThemeContext";
import { createRepository } from "../services/repository/MovieRepository";
import { AiOutlineYoutube } from "react-icons/ai";
import { SiImdb } from "react-icons/si";
import './Movie.scss';

const Movie = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);

  useEffect(() => {
    createRepository().then((res: IMovie | any) => {
      setMovies(res);

    }).catch(err => {
      console.log(err);
    })
  }, []);
  const { theme } = useContext(ThemeContext);
  const { darkMode } = theme;
  return (
    <div className={`bg-${darkMode ? '#18181b' : 'light'}`}>
      <div className={`bg-${darkMode ? '#18181b' : 'light'} ml-14`}>
        <br />

        <p className={`${darkMode ? 'text-white' : 'text-black'} text-center text-3xl`}>These are my movie recommendations</p>
        {movies.map((res) => (
          <div className="movie_card" id="bright" key={res.ID}>
            <div className="info_section">
              <div className="movie_header">
                <img
                  className="locandina"
                  src={res.Image}
                  alt={res.Title}
                />
                <h1 id='movie_title'>{res.Title}</h1>
                <h4 id='directorHeader'>
                  {res.Director}, {res.ReleaseDate}
                </h4>
                <div id='header2'>
                  <span className="minutes">{res.Minute} min</span>
                  <p className="type">{res.Genre}</p>
                </div>
              </div>
              <div className="movie_desc">
                <div className="text" id='synopsisText'>{res.Synopsis}</div>
              </div>
              <div id='icon_design_position'>
                <p className="icon_design">
                  <a href={res.Youtube} target="_blank" className="float-left mr-5">
                    <AiOutlineYoutube
                      size={40}
                      color='white'
                    />
                  </a>
                  <a href={res.Imdb} target="_blank">
                    <SiImdb
                    size={40}
                    color='white'
                    />
                  </a>
                  <span id="star">★</span>
                  <span id="score">{res.Rating}/10</span>
                </p>
              </div>
            </div>
          </div>

        ))}
        <br />

      </div>
    </div>
  );
};

export default Movie;
