import React from 'react';
import { ArrowUp } from 'lucide-react';

interface ScrollButtonProps {
  isVisible: boolean;
}

export const ScrollTopButton: React.FC<ScrollButtonProps> = ({ isVisible }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={handleClick}
      className={`fixed bottom-6 left-6 p-3 rounded-full bg-[#182E1E] text-[#FDFBF7] hover:bg-[#5A0C1E] shadow-lg transition-all duration-300 transform ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0 pointer-events-none'
      }`}
    >
      <ArrowUp size={16} />
    </button>
  );
};
