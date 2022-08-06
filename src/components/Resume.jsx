import React, { useState } from 'react'
import { Document, Page, pdfjs } from 'react-pdf';
import PDF from '../assets/CV LACHET Quentin.pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const Resume = () => {
  const [pageNumber] = useState(1);

  return (
    <div name="resume" className="w-full min-h-screen bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <div className='mb-4'>
          <p className="text-4xl font-bold inline border-b-4 border-orange-600 text-gray-300">
            My <p className='text-orange-600 inline'>Resume</p>
          </p>
        </div>
        <div>
          <Document file={PDF}>
            <Page pageNumber={pageNumber} />
          </Document>
        </div>
      </div>
    </div>
  )
}

export default Resume