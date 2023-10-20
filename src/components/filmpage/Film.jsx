import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ListOfFilms } from '../../share/ListOfFilms';

export default function Film() {
  const { id } = useParams();
  const [film, setFilm] = useState(null);
  useEffect(() => {
    const selectedFilm = ListOfFilms.find((f) => f.id == id);
    setFilm(selectedFilm);
  }, [id]);

  // console.log(film);
  return (
    <div className='d-flex justify-content-center p-4'>
      {/* <p>{JSON.stringify(film)}</p> */}
      {film && (
        <iframe
          width="50%"
          height="600px"
          src={film.url}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
  
}
