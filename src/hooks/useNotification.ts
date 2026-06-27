import { useState, useCallback } from 'react';

export const useNotification = () => {
  const [showNotification, setShowNotification] = useState(false);
  const [notificationMsg, setNotificationMsg] = useState('');

  const triggerNotification = useCallback((msg: string, duration = 3500) => {
    setNotificationMsg(msg);
    setShowNotification(true);
    
    setTimeout(() => {
      setShowNotification(false);
    }, duration);
  }, []);

  return { showNotification, notificationMsg, triggerNotification };
};
