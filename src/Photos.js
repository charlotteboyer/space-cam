import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const Photos = ({res, loading}) => {

    const [ liked, setLiked ] = useState(false)
    return !loading ? (
        <div className="container">
            <h2>{res.camera.full_name}</h2>
            <h3>{res.rover.name}</h3>
            <div className="image">
                <img src={res.img_src} alt={res.camera.full_name} />
            </div>
            <p>{res.earth_date}</p>
            <button
                className="likeButton"
                onClick={(e) => setLiked (!liked)}
                >
                <FontAwesomeIcon 
                icon={faHeart} 
                aria-label={"heart button"} 
                aria-required="true"
                className={liked ? "liked" : "unliked"}/>
            </button>
        </div>

    ) : (
        <div>
            <p>Loading...</p>
        </div>
    )


}

export default Photos 