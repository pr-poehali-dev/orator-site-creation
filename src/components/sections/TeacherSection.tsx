import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const TeacherSection = () => {
  return (
    <section id="teacher" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Автор и преподаватель курса</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg max-w-3xl mx-auto">
          <span className="font-bold text-primary text-xl">КУРС ВЕДУ ЛИЧНО, ПОЭТОМУ РЕЗУЛЬТАТ ГАРАНТИРУЮ!</span>
        </p>
        
        <Card className="overflow-hidden shadow-2xl mb-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
            <div className="relative h-80 md:h-auto md:col-span-2 overflow-hidden">
              <img 
                src="https://cdn.poehali.dev/files/42fb71e4-6ec4-495f-9748-b5f6e4364b90.jpg" 
                alt="Светлана Кузикова - преподаватель ораторского искусства"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-10 md:col-span-3">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-3xl md:text-4xl mb-3">Светлана Кузикова</CardTitle>
                <CardDescription className="text-lg text-primary font-semibold">
                  Дипломированный педагог по ораторскому искусству
                </CardDescription>
                <CardDescription className="text-base mt-2">
                  Театральный режиссёр и профессиональный психолог
                </CardDescription>
              </CardHeader>
              <CardContent className="p-0 space-y-3">
                <div className="flex items-start gap-3">
                  <Icon name="GraduationCap" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground"><span className="font-semibold">ГИТИС:</span> обучение ораторскому искусству и сценической речи</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Building" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground"><span className="font-semibold">2018 год:</span> создала Школу ораторского искусства и импровизации и театр «Комильфо»</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Brain" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground"><span className="font-semibold">12 лет практики</span> профессиональный психолог, преподаватель психологии, сертификация по психотерапии</p>
                </div>
                <div className="flex items-start gap-3">
                  <Icon name="Award" size={20} className="text-primary mt-1 flex-shrink-0" />
                  <p className="text-muted-foreground">Член Федерации психологов образования России</p>
                </div>
              </CardContent>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                <Icon name="Tv" size={28} className="text-white" />
              </div>
              <CardTitle className="text-2xl mb-3">Эксперт СМИ</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                <p className="text-muted-foreground">ТВ-канал «Кубань24»</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                <p className="text-muted-foreground">ТВ-канал «НТК»</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                <p className="text-muted-foreground">ТВ-канал «Краснодар»</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                <p className="text-muted-foreground">Радио «Маяк»</p>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="CheckCircle2" size={18} className="text-primary flex-shrink-0" />
                <p className="text-muted-foreground">«Первое радио Кубани»</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mb-4">
                <Icon name="BookOpen" size={28} className="text-white" />
              </div>
              <CardTitle className="text-2xl mb-3">Автор книг</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex items-start gap-2">
                <Icon name="Book" size={18} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">«Публичные выступления: 7 шагов к успеху»</p>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Book" size={18} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">«Речевая креативность»</p>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Book" size={18} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">«Антистресс-путеводитель»</p>
              </div>
              <div className="flex items-start gap-2">
                <Icon name="Book" size={18} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-muted-foreground">И другие издания</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TeacherSection;