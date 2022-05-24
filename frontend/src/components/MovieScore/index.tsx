import MovieStars from "components/MovieStars";
import './styles.css';
function MovieScore(){

    const score = 3.5;
    const count = 13;

    return (
        <div className="dsmovie-score-container">
                                            {/* placar é maior que 0? se sim, arredonda para 1 casa decimal, senão exibir hífen */}
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>    
            <MovieStars />
            <p className="dsmovie-score-count">{count} Avaliações</p>
        </div>
    );
}

export default MovieScore;