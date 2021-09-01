import React from 'react';
import supporters from './Supporters';
import blank from './img/supporters/blank.JPG'
let economics, scienceAndCulture, faith, socialMovOrg, politics
[economics, scienceAndCulture, faith, socialMovOrg, politics] = supporters

const Support = () => {
    console.log(supporters)
    return(
        <div className="support">
            <h1>We are supported by leaders in</h1>
            <div className="supporters econ-support">
                <h3>Economics</h3>
                {economics.map(supporter => <div className="supporter-details">
                <img src={supporter.photo ? supporter.photo : blank} />
                <p>{`${supporter.name}, ${supporter.description}`}</p>
                </div>)}
            </div>
            <div className="supporters sci-cult-support">
                <h3>Science and Culture</h3>
                {scienceAndCulture.map(supporter => <div className="supporter-details">
                <img src={supporter.photo ? supporter.photo : blank} />
                <p>{`${supporter.name}, ${supporter.description}`}</p>
                </div>)}
            </div>
            <div className="supportesr faith-support">
                <h3>Faith</h3>
                {faith.map(supporter => <div className="supporter-details">
                <img src={supporter.photo ? supporter.photo : blank} />
                <p>{supporter.description ? `${supporter.name}, ${supporter.description}` : supporter.name}</p>
                </div>)}
            </div>
            <div className="supportesr social-support">
                <h3>Social movements and organisations</h3>
                {socialMovOrg.map(supporter => <div className="supporter-details">
                <img src={supporter.photo ? supporter.photo : blank} />
                <p>{supporter.description ? `${supporter.name}, ${supporter.description}` : supporter.name}</p>
                </div>)}
            </div>
            <div className="supportesr polit-support">
                <h3>Politics</h3>
                {politics.map(supporter => <div className="supporter-details">
                <img src={supporter.photo ? supporter.photo : blank} />
                <p>{supporter.description ? `${supporter.name}, ${supporter.description}` : supporter.name}</p>
                </div>)}
            </div>
        </div>

    )
}

export default Support
