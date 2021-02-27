import React from 'react';

const Country = (props) => {
    const {name, population, region, flag} = props.country
    const handleAddCountry = props.handleAddCountry
    return (
        <div>
            <h4>{name}</h4>
            <img style= {{height:'70px'}} src={flag} alt=""/>
            <p>Population: {population}</p>
            <p><small>{region}</small></p>
            <button onClick={()=> handleAddCountry(props.country)}>Add This</button>
        </div>
    );
};

export default Country;