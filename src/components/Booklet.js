import PDFViewer from './PDFViewer';
import PDFJSBackend from './PDFJs';
import doc from './booklet-patienteurope.pdf';

const Booklet = () => {
    return (
        <PDFViewer backend={PDFJSBackend}
        src={doc}/>
    )
}

export default Booklet