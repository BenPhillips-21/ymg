import { useState, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { montserrat } from "@/components/ui/fonts";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.mjs`;

export default function Newsletter() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pagesToRender, setPagesToRender] = useState<number[]>([1]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
    setPageNumber(1);
  }

  function goToPrevPage(): void {
    setPageNumber((prevPageNumber) => Math.max(1, prevPageNumber - 1));
  }

  function goToNextPage(): void {
    setPageNumber((prevPageNumber) =>
      Math.min(numPages || 1, prevPageNumber + 1)
    );
  }

  return (
    <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg shadow-md max-w-full overflow-x-hidden">
      <h1 
        className={`${montserrat.className} text-[#1c272c] text-2xl lg:text-4xl font-bold`}
      >
        Our Newsletter
      </h1>
      <div className="w-full mb-4">
        <Document
          file="/newsletter-Aug-2025.pdf"
          onLoadSuccess={onDocumentLoadSuccess}
        >
          {pagesToRender.map((p) => (
            <div
              key={p}
              className={`flex justify-center ${
                pageNumber === p ? "" : "hidden"
              }`}
            >
              {windowWidth <= 768 ? (
                // Condition 1: Mobile
                <Page pageNumber={p} width={300} />
              ) : windowWidth > 1400 ? (
                // Condition 2: Large Desktop
                <Page pageNumber={p} height={800} />
              ) : (
                // Condition 3: Default Desktop
                <Page pageNumber={p} height={620} />
              )}
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
          Page {pageNumber} of {numPages || "..."}
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
