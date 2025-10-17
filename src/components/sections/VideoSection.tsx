import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const VideoSection = () => {
  return (
    <section className="py-14 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Видео занятий курса</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          Посмотрите, как проходят занятия, и узнайте больше об авторе курса
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="shadow-xl hover:shadow-2xl transition-shadow overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-100 relative">
                <iframe
                  src="https://rutube.ru/play/embed/ce39f2d76564c43dff1ac2fc8f7764ce/"
                  frameBorder="0"
                  allow="clipboard-write; autoplay"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  title="Фрагмент с занятий"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                    <Icon name="Video" size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl">Фрагменты занятий</h3>
                </div>
                <p className="text-muted-foreground">
                  Смотрите, как проходят тренинги по ораторскому искусству в нашей школе
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-xl hover:shadow-2xl transition-shadow overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-video bg-gray-100 relative">
                <iframe
                  src="https://rutube.ru/play/embed/ec2700244254972c5799da002c902dc3/"
                  frameBorder="0"
                  allow="clipboard-write; autoplay"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                  title="Интервью с автором курса"
                ></iframe>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Icon name="Tv" size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-xl">Интервью в СМИ</h3>
                </div>
                <p className="text-muted-foreground">
                  Светлана Кузикова рассказывает о своём подходе к обучению ораторскому искусству
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;