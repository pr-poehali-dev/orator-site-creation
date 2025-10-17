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
        });
        
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Error tracking visit:', error);
      } finally {
        setLoading(false);
      }
    };

    trackVisit();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center gap-4 text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <Icon name="Eye" size={16} />
          <span>Загрузка...</span>
        </div>
      </div>
    );
  }

  if (!stats) return null;

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
