import React, { useState } from 'react';

const CollapsibleSection = ({ title, children, hasMore, inline = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  if (inline) {
    return (
      <div className="mb-3">
        <h4 className="text-sm font-medium text-[#333332] mb-1">{title}</h4>
        <div>
          {children(isExpanded, toggleExpansion)}
        </div>
      </div>
    );
  }

  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <h4 className="text-sm font-medium text-[#333332]">{title}</h4>
      </div>
      <div>{children(isExpanded)}</div>
      {hasMore && (
        <div className="flex justify-end mt-2">
          <button
            onClick={toggleExpansion}
            className="text-xs text-[#333332] hover:underline focus:outline-none"
          >
            {isExpanded ? 'Show Less' : 'Show More'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CollapsibleSection;
