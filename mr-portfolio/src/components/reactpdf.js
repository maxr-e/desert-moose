import React from 'react';
import { Document, Page } from 'react-pdf';
const PDFViewer = () => {
 const pdfURL = "../public/Royal-Eisenberg_Resume.pdf";
return (
 <div>
 <Document file={pdfURL}>
 <Page pageNumber={1} />
 </Document>
 </div>
 );
};
export default PDFViewer;