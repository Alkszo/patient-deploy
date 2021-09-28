import PDFViewer from './PDFViewer';
import PDFJSBackend from './PDFJs';
import doc from './Taxonomy.pdf';

const Taxonomy = () => {
    return (        
        <div className="doc-viewer">
        <PDFViewer backend={PDFJSBackend}
        src={doc}/>
        </div>
    )
}

export default Taxonomy