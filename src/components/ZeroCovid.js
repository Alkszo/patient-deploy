import PDFViewer from './PDFViewer';
import PDFJSBackend from './PDFJs';
import doc from './ZeroCovidInstrument.pdf';

const ZeroCovid = () => {
    return (
        <PDFViewer backend={PDFJSBackend}
        src={doc}/>
    )
}

export default ZeroCovid;