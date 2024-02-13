import React, { useEffect } from 'react';
import pdfObject from 'pdfobject';
// the possible problem this isnt working is bc pdfObject renders <embed> into a html, not into another js file. react-pdf was a possible solution.
function pdfEmbed () {
  useEffect(() => {
    pdfObject.embed('../src/assets/Royal-Eisenberg_Resume.pdf', '#pdf-container');
  });

  return (
    <div>
      <div id="pdf-container"></div>
    </div>
  );
};

export default pdfEmbed;
