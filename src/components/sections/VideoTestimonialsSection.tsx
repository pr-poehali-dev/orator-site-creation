import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const VideoTestimonialsSection = () => {
  const [expandedVideos, setExpandedVideos] = useState(4);

  const videos = [
    {
      id: 'df80c189cc7835ed33cd2afead793ccd',
      type: 'shorts',
      title: 'Видео-отзыв №1'
    },
    {
      id: '086abbd212ff10ffc78b02c920afc102',
      type: 'shorts',
      title: 'Видео-отзыв №2'
    },
    {
      id: '0c0295a0e96e2f38ed49da7a2a05a6e4',
      type: 'shorts',
      title: 'Видео-отзыв №3'
    },
    {
      id: '381bf00193882d05e255e53a470b4c18',
      type: 'shorts',
      title: 'Видео-отзыв №4'
    },
    {
      id: '9190cf226f0aef491105168f20bd33c0',
      type: 'shorts',
      title: 'Видео-отзыв №5'
    },
    {
      id: '5047baa1ea33da813635b03dd94079ca',
      type: 'video',
      title: 'Видео-отзыв №6'
    },
    {
      id: '8a66fd70aa9683b0be9470d91f472801',
      type: 'video',
      title: 'Видео-отзыв №7'
    },
    {
      id: 'f07aafca3200696f18d9bd8fdb72042b',
      type: 'video',
      title: 'Видео-отзыв №8'
    }
  ];

  const showAllVideos = () => {
    setExpandedVideos(videos.length);
  };

  return (
    <section className="py-14 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Видео-отзывы</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-2xl mx-auto">
          Смотрите, что говорят наши выпускники о курсе
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {videos.slice(0, expandedVideos).map((video, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all">
              <CardContent className="p-0">
                <div className="relative pb-[177.78%]">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full"
                    src={`https://rutube.ru/play/embed/${video.id}/`}
                    frameBorder="0"
                    allow="clipboard-write; autoplay"
                    allowFullScreen
                    title={video.title}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {expandedVideos < videos.length && (
          <div className="mt-8 text-center">
            <Button
              onClick={showAllVideos}
              size="lg"
              variant="outline"
              className="group"
            >
              Показать все отзывы
              <Icon name="ChevronDown" size={18} className="ml-2 group-hover:animate-bounce" />
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default VideoTestimonialsSection;