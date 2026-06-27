import React from 'react';

interface NotificationProps {
  show: boolean;
  message: string;
}

export const Notification: React.FC<NotificationProps> = ({ show, message }) => {
  return (
    <div
      className={`fixed bottom-6 right-6 z-50 bg-[#182E1E] text-[#FDFBF7] px-6 py-4 rounded-xl shadow-2xl border border-[#5A0C1E]/20 flex items-center gap-3 transition-all duration-500 transform ${
        show ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-10 opacity-0 scale-90 pointer-events-none'
      }`}
    >
      <span className="w-2 h-2 rounded-full bg-[#5A0C1E] animate-ping" />
      <p className="text-sm font-medium tracking-wide font-serif">{message}</p>
    </div>
  );
};
