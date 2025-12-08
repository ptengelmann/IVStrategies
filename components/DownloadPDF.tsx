'use client';

import { useState } from 'react';

export function DownloadPDF() {
  const [loading, setLoading] = useState(false);

  const handlePrint = () => {
    setLoading(true);
    setTimeout(() => {
      window.print();
      setLoading(false);
    }, 100);
  };

  return (
    <button
      onClick={handlePrint}
      disabled={loading}
      className="text-sm text-[#666] hover:text-white transition-colors print:hidden"
    >
      {loading ? '...' : 'Download PDF'}
    </button>
  );
}
