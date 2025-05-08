import React, { useState } from 'react'

const LanguageCard = (props) => {

    const { title, description } = props;




    return (
        <div className="card">
            <h2>{title}</h2>
            <div className="content">
                {description}
            </div>
        </div>
    )
}

export default LanguageCard
