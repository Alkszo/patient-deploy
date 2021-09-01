import PDFViewer from './PDFViewer';
import PDFJSBackend from './PDFJs';
import doc from './ZeroCovidInstrument.pdf';
import { useEffect } from 'react';

const ZeroCovid = ({openPdf}) => {
    useEffect(() => {
        openPdf(true)
      });
    return (
        <PDFViewer backend={PDFJSBackend}
        src={doc}/>
    )
}

export default ZeroCovid;

/*
    useEffect(() => {
        openPdf(true)
      });
*/