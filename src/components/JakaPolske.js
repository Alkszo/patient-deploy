import PDFViewer from './PDFViewer';
import PDFJSBackend from './PDFJs';
import doc from './jaka-Polske-chcemy-odbudowac.pdf';

const JakaPolske = () => {
    return (
        <PDFViewer backend={PDFJSBackend}
        src={doc}/>
    )
}

export default JakaPolske