import React from 'react';
import teamMembers from './teamBios';

const Team = () => {

    return(
        <div className="team">
            <h1>Our Team</h1>
            {teamMembers.map(teamster => <div className="teamster-details">
                <img src={teamster.photo} alt={teamster.name}/>
                <div className="teamster-description">
                    <p>{`${teamster.name}, ${teamster.description}`}</p>
                    <p className="teamster-bio">{teamster.bio}</p>
                </div>
            </div>)}
            <p className="teamster-bio legal-note">Europe, a Patient is a registered association under the Polish law and legal name 
                Stowarzyszenie Pacjent Europa with a seat in Warsaw, Poland.</p>
        </div>
    )
}

export default Team