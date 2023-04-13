import React from 'react';
import CodeReview from './CodeReview';
import Navbar from '../Navbar';

const CodeReviewPract = () => {
    return (
        <>
            <Navbar/>
            <CodeReview contents='쇼핑몰' isPract={true}/>
        </>
    )
}

export default CodeReviewPract;