import React from 'react';

export default function Logo() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-110">
      <circle cx="16" cy="16" r="14" stroke="#3B82F6" strokeWidth="2" fill="none"/>
      <circle cx="16" cy="16" r="10" stroke="#EF4444" strokeWidth="2" fill="none"/>
      <text x="16" y="22" fontFamily="Arial, sans-serif" fontSize="16" fontWeight="bold" textAnchor="middle" className="fill-current text-text-primary dark:text-foreground">N</text>
    </svg>
  );
}