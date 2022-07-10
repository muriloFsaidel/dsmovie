import MovieStars from "components/MovieStars";
import './styles.css';

type Props = {
    score: number;
    count: number;
}

function MovieScore({score, count}: Props){  

    return (
        <div className="dsmovie-score-container">
                                            {/* placar é maior que 0? se sim, arredonda para 1 casa decimal, senão exibir hífen */}
            <p className="dsmovie-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>    
            <MovieStars score={score} />
            <p className="dsmovie-score-count">{count} Avaliações</p>
        </div>
    );
}

export default MovieScore;