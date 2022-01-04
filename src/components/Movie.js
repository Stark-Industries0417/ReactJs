import propTypes from "prop-types";
import {Link} from 'react-router-dom';
import '../styles/Movie.css'

function Movie({id, coverImg, title, summary}) {
    return (
        <div className='movie'>
            <img src={coverImg} alt={title} title={title} />
            <div className='movie__data'>
                <h2 className='movie__title'>
                    <Link to={`/movie/${id}`}>{title}</Link>
                </h2>
                <p className='movie__summary'>{summary.slice(0, 180)}...</p>
            </div>
        </div>
    );
}

Movie.propTypes = {
    id: propTypes.number.isRequired,
    coverImg: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    summary: propTypes.string.isRequired,
}

export default Movie;