import React from 'react';

interface JMDLogoProps {
  className?: string;
  size?: number | string;
  showBorder?: boolean;
}

export const JMDLogo: React.FC<JMDLogoProps> = ({
  className = "w-10 h-10",
  size,
  showBorder = false
}) => {
  return (
    <img
      src="/jmd-logo.svg"
      alt="JMD Enterprises - Print Your Imagination Logo"
      width={size}
      height={size}
      className={`rounded-full object-cover shrink-0 select-none ${showBorder ? 'ring-2 ring-slate-900/10 shadow-sm' : ''} ${className}`}
      loading="eager"
      decoding="async"
    />
  );
};
