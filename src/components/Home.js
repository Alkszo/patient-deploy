import React from 'react';

const Home = () => {
    return(
     <div id="home">
         <h3>Europe, a Patient is a pan-European, non-partisan coalition of leaders in economics, politics, culture and faith.</h3>
         <p id="advocate">We advocate for:</p>
         <div id="postulates">
                <div className="postulate" onClick={() => window.open("https://www.europeapatient.com/uploads/1/3/1/7/131762106/proposal_for_zero-covid_instrument.pdf", "_blank")}>                           
                    <p><b>Additional Antipandemic Income</b></p>  
                </div>
                <div className="postulate" onClick={() => window.open("https://papers.ssrn.com/sol3/papers.cfm?abstract_id=3715344", "_blank")}> 
                    <p><b>European Job Guarantee Programs</b></p>        
                </div>
                <div className="postulate"> 
                <p><b>Accessible vaccines and public healthcare</b></p>               
                </div> 
         </div>
     </div>       
    )
}

export default Home;