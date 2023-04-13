import React from 'react';
import Navbar from '../Navbar';
import SelectTheme from './SelectTheme';

const SelectThemeBase = () => {
    const contents = ['HTML', 'CSS', 'JS'];


    return (
        <>
            <Navbar />
            <SelectTheme contents={contents} isBase={true}/>
        </>
    )
}

export default SelectThemeBase;