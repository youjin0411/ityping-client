import React from 'react';
import SelectTheme from './SelectTheme';

const SelectThemeBase = () => {
    const contents = ['HTML', 'CSS', 'JS'];


    return (
        <SelectTheme contents={contents} isBase={true}/>
    )
}

export default SelectThemeBase;