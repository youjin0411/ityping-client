import React from 'react';
import { useHistory } from 'react-router-dom';
import SelectTheme from './SelectTheme'

const SelectThemePract = (props) => {
    const history = useHistory();
    
    const handler1 = () => {
        history.push('/select-themeBase');
    }

    const handler2 = () => {
        history.push('/select-themePract');
    }
    
    const moveTyping = () => {
        history.push('/typing');
    }

    return (
        <SelectTheme handler1={handler1} handler2={handler2} moveTyping={moveTyping}/>
    )
}

export default SelectThemePract;