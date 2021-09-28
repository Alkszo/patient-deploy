import PDFViewer from './PDFViewer';
import PDFJSBackend from './PDFJs';
import doc from './jaka-Polske-chcemy-odbudowac.pdf';

const JakaPolske = () => {
    return (
        <div className="doc-viewer">
        <PDFViewer backend={PDFJSBackend}
        src={doc}/>
        </div>
    )
}

export default JakaPolske