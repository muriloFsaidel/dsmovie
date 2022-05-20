import {ReactComponent as FullStar} from 'assets/img/FullStar.svg';
import {ReactComponent as HalfStar} from 'assets/img/HalfStar.svg';
import {ReactComponent as EmptyStar} from 'assets/img/EmptyStar.svg';

import './styles.css';

function MovieStars(){

    return (
        <div className="dsmovie-stars-container">
            <FullStar />
            <FullStar />
            <FullStar />
            <HalfStar />
            <EmptyStar />
        </div>
    );
}

export default MovieStars;