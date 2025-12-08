'use client';

import { useState } from 'react';

interface DownloadPDFProps {
  filename?: string;
}

export function DownloadPDF({ filename = 'document' }: DownloadPDFProps) {
  const [loading, setLoading] = useState(false);

  const handlePrint = () => {
    setLoading(true);

    // Small delay to show loading state
    setTimeout(() => {
      window.print();
      setLoading(false);
    }, 100);
  };

  return (
    <button
      onClick={handlePrint}
      disabled={loading}
      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#ff2d9b] to-[#2dffb5] hover:opacity-90 disabled:opacity-50 text-white text-sm font-semibold rounded-lg transition-all duration-200 print:hidden"
    >
      {loading ? (
        <>
          <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Preparing...
        </>
      ) : (
        <>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          Download PDF
        </>
      )}
    </button>
  );
}
