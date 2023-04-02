import React from 'react';
import SelectTheme from './SelectTheme copy'

const SelectThemePract = () => {
    const contents = ['쇼핑몰', '회사소개', '게임'];

    return (
        <SelectTheme contents={contents} isPract={true}/>
    )
}

export default SelectThemePract;