import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import Taxonomy from './Taxonomy';

const Recommendations = ({openPdf}) => {
    const recommended = [{title: 'European Job Guarantee', time: 'Autumn 2020', link: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3715344'},
    {title: 'Work for all at social Europe', time: 'Autumn 2020', link: 'https://www.socialeurope.eu/work-for-all'},]
    return(
        <>
        
        <div className="recommendations">

            <h1>Our Recommendations</h1>
            <div className="recommendation">
             <Link to="/zero-covid-instrument-proposal">Zero Covid Instrument Proposal</Link>
             <p>Summer 2021</p>
            </div>
            <div className="recommendation">
             <Link to="/manifesto">Manifesto</Link>
             <p>Spring 2020</p>
            </div>
            {recommended.map(recommendation => <div className="recommendation">                
            <a href={recommendation.link} target="_blank">{recommendation.title}</a>
            <p>{recommendation.time}</p>
            </div>)}
            <div className="recommendation">
             <Link to="/jaka-polske-chcemy-odbudowac">Jaką Polskę chcemy odbudować za europejskie pieniądze?</Link>
             <p>Summer 2020</p>
            </div>
            <div className="recommendation">
             <Link to="/taxonomy">European Taxonomy</Link>
             <p>Winter 2020</p>
            </div>

        </div>
        </>
    )
}

export default Recommendations