import React from "react";
import { pdfjs, Document } from 'react-pdf';
// import { Worker } from 'react-pdf-viewer'
// import '@react-pdf/dist/esm/Page/AnnotationLayer.css';
// import '@react-pdf/dist/esm/Page/TextLayer.css';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//     'pdfjs-dist/build/pdf.worker.min.js',
//     import.meta.url,
// ).toString();

const PdfViewerworker = () => {
    const pdfUrl = '../src/assets/Royal-Eisenberg_Resume.pdf';

    return (
        <div>
            <h3>Embedded PDF Viewer</h3>
            <div style={{ width: '100%', height: '500px' }}>
                 <Document file={pdfUrl}>
                </Document>
            </div>
        </div>
    );
};

export default PdfViewerworker;