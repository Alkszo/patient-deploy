import React from 'react';
import { Link } from 'react-router-dom';

const Recommendations = ({openPdf}) => {

    return(
        <>
        
        <div className="recommendations">

            <h1>Our Recommendations</h1>
            <div className="recommendation">
                <a href="https://www.youtube.com/watch?v=ecGPJXr7UfU&ab_channel=Europe%2CaPatient" target="_blank"  rel="noreferrer">Press conference with Rocco Buttiglione</a>
                <p>Autumn 2021</p>
            </div>
            <div className="recommendation">
             <Link to="/zero-covid-instrument-proposal">Zero Covid Instrument Proposal</Link>
             <p>Summer 2021</p>
            </div>
            <div className="recommendation">
             <Link to="/manifesto">Manifesto</Link>
             <p>Spring 2020</p>
            </div>
            <div className="recommendation">
                <a href="https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3715344" target="_blank"  rel="noreferrer">European Job Guarantee</a>
                <p>Autumn 2020</p>
            </div>
            <div className="recommendation">
                <a href="https://www.socialeurope.eu/work-for-all" target="_blank"  rel="noreferrer">Work for all at social Europe</a>
                <p>Autumn 2020</p>
            </div>
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