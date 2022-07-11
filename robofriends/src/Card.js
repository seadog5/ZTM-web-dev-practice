import PreviousMap from 'postcss/lib/previous-map';
import { React } from 'react';

const Card = (props)=>{
    const {id, name, email} = props;
    return (
        <div className='mx-8 my-8 max-w-sm bg-green-500 border-2 border-gray-600 px-4 py-6 rounded-lg transform transition duration-400 hover:scale-110'>
            {/* 100x100 adjust the size of the image */}
            <img alt='robots' src={`https://robohash.org/${id}?10x10`}/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>    
    );
}

export default Card;