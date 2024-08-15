import React from 'react';
import Spline from '@splinetool/react-spline';

function Banner() {

    // const button = spline.findObjectById('d3f76d96-c072-4ebe-88a3-b7ece7a2a426');

    return (
        <div className='Spline-Background'>
            {/* <h1 className='Spline-Title'>STUDENT SOLUTION SHOP</h1> */}
            <Spline scene="https://prod.spline.design/qLIFXetuSLY7PSBn/scene.splinecode" className='FullScreenSpline' />
        </div>
    );
}

export default Banner;


