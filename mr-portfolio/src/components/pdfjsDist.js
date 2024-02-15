import React, { useEffect } from 'react';
import pdfjs from 'pdfjs-dist';

const PdfViewerDist = () => {
    // Replace 'path/to/your-pdf-file.pdf' with the actual path or URL of your PDF file
    const pdfUrl = '../public/Royal-Eisenberg_Resume.pdf';
  
    useEffect(() => {
        const container = document.getElementById('pdf-container');
    
        // Initialize the PDFJS worker
        pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.js`;
    
        // Load the PDF
        const loadingTask = pdfjs.getDocument(pdfUrl);
    
        loadingTask.promise.then((pdf) => {
          // Fetch the first page
          pdf.getPage(1).then((page) => {
            const scale = 1.5;
            const viewport = page.getViewport({ scale });
    
            // Prepare canvas using PDF page dimensions
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');
            canvas.height = viewport.height;
            canvas.width = viewport.width;
    
            // Render PDF page into canvas context
            const renderContext = {
              canvasContext: context,
              viewport: viewport,
            };
    
            page.render(renderContext).promise.then(() => {
              container.appendChild(canvas);
            });
          });
        });
      }, []);
    
      return (
        <div>
          <h3>Embedded PDF Viewer</h3>
          <div id="pdf-container" style={{ width: '100%', height: '500px' }}></div>
        </div>
      );
    };
    
    export default PdfViewerDist;