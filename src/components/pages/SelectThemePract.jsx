import React from 'react';
import Navbar from '../Navbar';
import SelectTheme from './SelectTheme'

const SelectThemePract = () => {
    const contents = ['쇼핑몰', '회사소개', '게임'];

    return (
        <>
            <Navbar />
            <SelectTheme contents={contents} isPract={true}/>
        </>
    )
}

export default SelectThemePract;