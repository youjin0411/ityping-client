import React from 'react';
import SelectTheme from './SelectTheme'

const SelectThemePract = () => {
    const contents = ['쇼핑몰', '회사소개', '게임'];

    return (
        <SelectTheme contents={contents} isPract={true}/>
    )
}

export default SelectThemePract;