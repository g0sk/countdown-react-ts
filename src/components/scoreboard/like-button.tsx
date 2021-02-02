import {useState, useEffect } from 'react';
import './likeStyles.css';
import { ReactComponent as Heart } from 'heart.svg';

export const LikeButton = () => {

    const [like, setLike] = useState(false);
    const [label, setLabel ] = useState('Te queso');
    const [likedDate, setLikedDate] = useState(new Date);

    const canLike = (): Boolean => {
        if(!like && likedDate.getTime() !== new Date().getTime()){
            return true;
        }
        return false;
    }

    const setLikes = () => {
        if(canLike()){
            setLike(true);
            setLikedDate(new Date());
            setLabel('Te queso mucho');
        }

        //Mostrar mensaje no puedes enviar más
    }

    useEffect( () => {
        
    }, [like]);

    return (
        <div className="like-content">
            <button className="btn-secondary like-review" onClick={() => setLikes()}>
                <i className="fa fa-heart" aria-hidden="true"></i>
                <p>{label}</p>
            </button>
        </div>
    );
}