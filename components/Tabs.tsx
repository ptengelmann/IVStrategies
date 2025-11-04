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
      {/* Tab Navigation */}
      <div className="flex gap-2 mt-5 border-b border-white/10 overflow-x-auto pb-0">
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

      {/* Tab Content */}
      <div className="mt-4">
        {activeTabContent}
      </div>
    </div>
  );
};
