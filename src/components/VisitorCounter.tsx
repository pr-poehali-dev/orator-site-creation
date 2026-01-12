import { useEffect, useState } from 'react';
import Icon from '@/components/ui/icon';

interface VisitorStats {
  total_visits: number;
  unique_visits: number;
}

const VisitorCounter = () => {
  const [stats, setStats] = useState<VisitorStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const trackVisit = async () => {
      try {
        const response = await fetch('https://functions.poehali.dev/ae3f4a54-90f6-4db8-a589-48adf3f69f8f', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          mode: 'cors',
        });
        
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        } else {
          console.error('Visitor tracker response not ok:', response.status);
        }
      } catch (error) {
        console.error('Error tracking visit:', error);
        // Показываем счётчик даже при ошибке, но с нулевыми значениями
        setStats({ total_visits: 0, unique_visits: 0 });
      } finally {
        setLoading(false);
      }
    };

    trackVisit();
  }, []);

  if (loading || !stats) {
    return null;
  }

  return (
    <div className="flex items-center justify-center gap-6 text-gray-400 text-sm">
      <div className="flex items-center gap-2" title="Всего посещений">
        <Icon name="Eye" size={16} />
        <span>{stats.total_visits.toLocaleString('ru-RU')}</span>
      </div>
      <div className="flex items-center gap-2" title="Уникальных посетителей">
        <Icon name="Users" size={16} />
        <span>{stats.unique_visits.toLocaleString('ru-RU')}</span>
      </div>
    </div>
  );
};

export default VisitorCounter;