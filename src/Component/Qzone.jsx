import React from 'react';
import classImg from '../assets/class.png';
import playGroundImg from "../assets/playground.png";
import swimmingImg from "../assets/swimming.png"

const Qzone = () => {
    return (
        <div className='bg-base-200 p-3 mt-5'>
            <h2 className='font-bold mb-5'>Qzone</h2>
            <div className='space-y-5'>
                <img src={classImg} alt="" />
                <img src={swimmingImg} alt="" />
                <img src={playGroundImg} alt="" />
            </div>
        </div>
    );
};

export default Qzone;