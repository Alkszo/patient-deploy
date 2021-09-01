import PDFViewer from './PDFViewer';
import PDFJSBackend from './PDFJs';
import doc from './Taxonomy.pdf';

const Taxonomy = () => {
    return (
        <PDFViewer backend={PDFJSBackend}
        src={doc}/>
    )
}

export default Taxonomy