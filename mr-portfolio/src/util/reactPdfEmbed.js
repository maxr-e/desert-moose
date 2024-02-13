import React from 'react'
import { PDFObject } from 'react-pdfobject'

const reactPdfEmbed = () => {
    return (
     <div>
        <PDFObject 
        url="../src/assets/Royal-Eisenberg_Cvr_Ltr.pdf"
        id="pdf-container" />
     </div>
    );
};
export default reactPdfEmbed;