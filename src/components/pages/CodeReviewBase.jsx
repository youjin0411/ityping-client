import React from 'react';
import Navbar from '../Navbar';
import CodeReview from './CodeReview';


const CodeReviewBase = () => {
    return (
        <>
            <Navbar/>
            <CodeReview contents='HTML' isBase={true}/>
        </>
    )
}

export default CodeReviewBase;