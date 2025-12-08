'use client';

import React, { useState, ReactNode } from 'react';

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTab }) => {
  const [activeTab, setActiveTab] = useState(defaultTab || tabs[0]?.id);

  const activeTabContent = tabs.find(tab => tab.id === activeTab)?.content;

  return (
    <div>
      {/* Tab Navigation - Hidden when printing */}
      <div className="flex gap-2 mt-5 border-b border-white/10 overflow-x-auto pb-0 print:hidden">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`
              px-4 py-2.5 rounded-t-lg text-[13px] font-semibold whitespace-nowrap
              transition-colors border-none cursor-pointer
              ${activeTab === tab.id
                ? 'bg-[#ff2d9b] text-white'
                : 'bg-transparent text-[#8a8a8a] hover:text-white'
              }
            `}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content - Only active tab shown on screen */}
      <div className="mt-4 print:hidden">
        {activeTabContent}
      </div>

      {/* Print View - All tabs shown when printing */}
      <div className="hidden print:block">
        {tabs.map((tab) => (
          <div key={tab.id} className="print-section mb-8">
            <h2 className="text-xl font-bold mb-4 text-[#ff2d9b] border-b-2 border-[#ff2d9b] pb-2">
              {tab.label}
            </h2>
            <div className="mt-4">
              {tab.content}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
