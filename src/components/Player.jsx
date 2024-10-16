import { useState } from 'react';

export default function Player ({ 
    playerName,
    playerSymbol
}) {

    const [name, setName] = useState(playerName)

    const [isEditing, setisEditing] = useState(false);

    function handleEditClick () {
        setisEditing(isEditing => !isEditing)
    }

    function handleNameChange (event) {
        setName(event.target.value)
    }

    return (
        <>
            <li>
                <span className="player">
                    { 
                        isEditing ?
                            <input type="text" value={name} onChange={handleNameChange} required/>
                            :
                            <span className='player-name'>{name}</span>
                    }

                    <span className='player-symbol'>{playerSymbol}</span>
                </span>

                <button 
                    onClick={ handleEditClick}>{isEditing ? 'Save' : 'Edit'}
                </button>
            </li>
        </>
    )
}