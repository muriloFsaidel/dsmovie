import MovieScore from "components/MovieScore";
function MovieCard(){

    const movieDB = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div>
        <img className="dsmovie-movie-card-image" src={movieDB.image} alt={movieDB.title} />
            <div className="dsmovie-card-bottom-container">
                <h3>{movieDB.title}</h3>
                <MovieScore />
                <div className="btn btn-primary dsmovie-btn">Avaliar</div>
            </div>
        </div>
    );
}

export default MovieCard;