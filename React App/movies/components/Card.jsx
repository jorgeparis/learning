import "./Card.css";

function Card({ movies }) {

    

  return (
    <>
      <div className="main-card-container">
        <div className="card-boby">
          <img src={movies.url} alt="" className="movie-poster" />
          <span className="movie-names">{movies.name}</span>
          <span className="movie-year">{movies.title}</span>
        </div>
      </div>
    </>
  );
}

export default Card;
