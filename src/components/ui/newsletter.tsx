import { useState, useRef, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.mjs`;

export default function Newsletter() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pagesToRender, setPagesToRender] = useState<number[]>([1]);
  const documentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (numPages) {
      const pages = new Set<number>();
      pages.add(pageNumber);
      
      if (pageNumber > 1) {
        pages.add(pageNumber - 1);
      }
      
      if (pageNumber < numPages) {
        pages.add(pageNumber + 1);
      }
      
      setPagesToRender(Array.from(pages).sort((a, b) => a - b));
    }
  }, [pageNumber, numPages]);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(1); 
  }
  
  function goToPrevPage(): void {
    setPageNumber(prevPageNumber => Math.max(1, prevPageNumber - 1));
    if (documentRef.current) {
      documentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  function goToNextPage(): void {
    setPageNumber(prevPageNumber => Math.min(numPages || 1, prevPageNumber + 1));
    if (documentRef.current) {
      documentRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md">
      <div ref={documentRef} className="mb-4">
        <Document file="/newsletter-Aug-2025.pdf" onLoadSuccess={onDocumentLoadSuccess}>
          {pagesToRender.map(p => (
            <div key={p} className={pageNumber === p ? '' : 'hidden'}>
              <Page pageNumber={p} />
            </div>
          ))}
        </Document>
      </div>
      
      <div className="flex items-center justify-between w-full max-w-sm px-4">
        <button 
          onClick={goToPrevPage} 
          disabled={pageNumber <= 1}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Previous
        </button>
        <p className="text-gray-700">
          Page {pageNumber} of {numPages || '...'}
        </p>
        <button 
          onClick={goToNextPage} 
          disabled={pageNumber >= (numPages || 1)}
          className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded-md shadow hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  );
}