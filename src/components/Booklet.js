import React, {useState, useEffect} from 'react';
import PDFViewer from './PDFViewer';
import PDFJSBackend from './PDFJs';
import doc from './booklet-patienteurope.pdf';
import banner from './conference-banner.jpg';
import mobileBanner from './conference-banner-mobile.png';

const Booklet = () => {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResizeWindow = () => setWidth(window.innerWidth);
         window.addEventListener("resize", handleResizeWindow);
         return () => {
           window.removeEventListener("resize", handleResizeWindow);
         };
    }, []);

    return (
        <>
        <img src={width > 500 ? banner : mobileBanner} className="bookletbanner" alt="cenference banner"/>
        <div className="doc-viewer">        
        <PDFViewer backend={PDFJSBackend}
        src={doc}/>
        </div>
        </>
    )
}

export default Booklet