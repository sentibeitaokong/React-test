import React, {Component,useContext} from 'react';
import {UserContext,ThemeContext} from "../App";

export default function ContextHook() {
    const user=useContext(UserContext)
    const theme=useContext(ThemeContext)
    return (
        <div>
            <div>{user.name}</div>
            <div>{theme.color}</div>
        </div>
    )
}
