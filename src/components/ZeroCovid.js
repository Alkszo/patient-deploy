import PDFViewer from './PDFViewer';
import PDFJSBackend from './PDFJs';
import doc from './ZeroCovidInstrument.pdf';

const ZeroCovid = () => {
    return (
        <div className="doc-viewer">
        <PDFViewer backend={PDFJSBackend}
        src={doc}/>
        </div>
    )
}

export default ZeroCovid;