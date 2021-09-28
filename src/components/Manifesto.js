import PDFViewer from './PDFViewer';
import PDFJSBackend from './PDFJs';
import doc from './europe-a-patient-manifesto.pdf';

const Manifesto = () => {
    return (
        <div className="doc-viewer">
        <PDFViewer backend={PDFJSBackend}
        src={doc}/>
        </div>
    )
}

export default Manifesto