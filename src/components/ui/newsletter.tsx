"use client";

import { useState, useEffect } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";
import { cormorant, inter } from "@/components/ui/fonts";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

pdfjs.GlobalWorkerOptions.workerSrc = `/pdf.worker.mjs`;

export default function Newsletter() {
  const [numPages, setNumPages] = useState<number>();
  const [pageNumber, setPageNumber] = useState<number>(1);
  const [pagesToRender, setPagesToRender] = useState<number[]>([1]);
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );

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
    return () => window.removeEventListener("resize", handleResize);
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
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          <span className={`${inter.className} text-[var(--accent-primary)] text-sm font-semibold uppercase tracking-widest`}>
            Stay Connected
          </span>
          <h2 className={`${cormorant.className} text-4xl sm:text-5xl font-bold text-[var(--foreground)] mt-4`}>
            Our Newsletter
          </h2>
          <div className="section-divider mt-6" />
        </div>

        {/* PDF Viewer */}
        <div className="card p-6 sm:p-8">
          <div className="flex justify-center mb-6">
            <Document
              file="/compressed-newsletter-Aug-2025.pdf"
              onLoadSuccess={onDocumentLoadSuccess}
              loading={
                <div className="flex items-center justify-center h-[400px]">
                  <div className="w-10 h-10 border-4 border-[var(--accent-primary)] border-t-transparent rounded-full animate-spin" />
                </div>
              }
            >
              {pagesToRender.map((p) => (
                <div
                  key={p}
                  className={`flex justify-center ${pageNumber === p ? "" : "hidden"}`}
                >
                  {windowWidth <= 768 ? (
                    <Page pageNumber={p} width={280} className="rounded-lg overflow-hidden shadow-xl" />
                  ) : windowWidth > 1400 ? (
                    <Page pageNumber={p} height={700} className="rounded-lg overflow-hidden shadow-xl" />
                  ) : (
                    <Page pageNumber={p} height={550} className="rounded-lg overflow-hidden shadow-xl" />
                  )}
                </div>
              ))}
            </Document>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-6">
            <button
              onClick={goToPrevPage}
              disabled={pageNumber <= 1}
              className="p-3 rounded-full bg-[var(--background-card)] border border-[var(--border-subtle)] text-[var(--foreground)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[var(--border-subtle)] disabled:hover:text-[var(--foreground)]"
              aria-label="Previous page"
            >
              <BsChevronLeft size={20} />
            </button>
            
            <span className={`${inter.className} text-[var(--foreground-muted)]`}>
              <span className="text-[var(--foreground)] font-medium">{pageNumber}</span>
              {" / "}
              <span>{numPages || "..."}</span>
            </span>
            
            <button
              onClick={goToNextPage}
              disabled={pageNumber >= (numPages || 1)}
              className="p-3 rounded-full bg-[var(--background-card)] border border-[var(--border-subtle)] text-[var(--foreground)] hover:border-[var(--accent-primary)] hover:text-[var(--accent-primary)] transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-[var(--border-subtle)] disabled:hover:text-[var(--foreground)]"
              aria-label="Next page"
            >
              <BsChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
