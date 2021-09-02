import PDFViewer from './PDFViewer';
import PDFJSBackend from './PDFJs';
import doc from './europe-a-patient-manifesto.pdf';

const Manifesto = () => {
    return (
        <PDFViewer backend={PDFJSBackend}
        src={doc}/>
    )
}

export default Manifesto