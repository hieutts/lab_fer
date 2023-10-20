import React, { useContext, useState } from 'react';
import { ListOfFilms } from '../../share/ListOfFilms';
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../ThemeContext';
// import ArrowRightSharpIcon from '@mui/icons-material/ArrowRightSharpIcon';

export default function Presentation() {
  const [film, setFilm] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const { theme, toggle, dark } = useContext(ThemeContext);
  const nav = useNavigate();
  const handleClick = (film) => {
    setFilm(film);
    setShowPopup(true);
  };

  const hidePopup = () => {
    setShowPopup(false);
    // if (!showPopup) window.location.href = '/#';
  };
  const watchingMovie = (film) => () => {
    nav(`film/${film.id}`);
  };
  return (
    <div style={{ backgroundColor: theme.backgroundColorOut }}>
      <div
        className="films pt-2 d-flex-col"
        style={{ paddingLeft: '20px', marginLeft: '95px', marginRight: '95px' }}
      >
        {/* <a href="/#"></a> */}
        <h3 className="p-2  " style={{ color: 'rgb(217,83,79)' }}>
          NEWLY UPDATE MOVIE
        </h3>

        <div className=" d-flex flex-wrap">
          {ListOfFilms.map((film, index) => (
            <div key={index} className="  pb-3 p-2 justify-content-center  ">
              <div
                className=" card rounded  d-flex "
                style={{
                  position: 'relative',
                  width: '230px',
                  height: '400px',
                  objectFit: 'cover',
                  backgroundColor: theme.backgroundColorItem,
                  color: theme.color,
                }}
              >
                <img
                  src={film.image}
                  alt=" "
                  className="card-img-top rounded-top"
                  style={{
                    height: '310px',
                  }}
                />
                <div className="body-card px-2 py-1  d-flex justify-content-center">
                  <div className="card-title fw-bolder">{film.title}</div>
                  <a
                    href="#popup"
                    className="btn   d-flex justify-content-center text-white   "
                    style={{
                      position: 'absolute',
                      bottom: '5px',
                      backgroundColor: '#de6021',
                    }}
                    onClick={() => handleClick(film)}
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showPopup && (
          <div id="popup" className="overlay">
            <div
              className="popup d-flex"
              style={{ backgroundColor: theme.backgroundColor }}
            >
              <div className="popup-left d-flex flex-column" key={film.id}>
                <img src={film.image} alt="" />
                <div className="btn-watch rounded fw-bold  ">
                  
                    <button
                      className="  content-btn fw-bold text-white    "
                      onClick={watchingMovie(film)}
                    >
                      Watch movie
                    </button>
                  
                </div>
              </div>
              <div
                className="close p-3"
                onClick={hidePopup}
                style={{ color: theme.color }}
              >
                &times;
              </div>
              <div className="content p-2" style={{ color: theme.color }}>
                <div className="title fs-3">{film.title}</div>
                <div>Year: {film.year}</div>
                <div>Nation: {film.nation}</div>
                <div>{film.description}</div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
