import React, { useEffect, useState } from 'react';

export const EffectDemo = () => {
    //State
    const [fullName, setFullName] = useState({ name: 'name', familyName: 'family' });
    const [title, setTitle] = useState('useEffect() in Hooks');

    //useEffect
    useEffect(() => {
        console.log('useEffect has been called!');
        setFullName({ name: 'Chris P.', familyName: 'Bacon' });
    });

    return (
        <div>
            <h1>Title: {title}</h1>
            <h3>Name: <i>{fullName.name}</i></h3>
            <h3>Family Name: <i>{fullName.familyName}</i></h3>
            <hr/>
            <h4>Welcome, {fullName.name} {fullName.familyName}</h4>
        </div>
    );
};