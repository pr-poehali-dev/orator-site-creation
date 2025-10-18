import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Guide = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="no-print fixed top-4 right-4 z-50 flex gap-3">
        <Button onClick={() => window.history.back()} variant="outline" size="lg">
          <Icon name="ArrowLeft" size={18} className="mr-2" />
          Назад
        </Button>
        <Button onClick={handlePrint} size="lg" className="bg-gradient-to-r from-primary to-secondary">
          <Icon name="Download" size={18} className="mr-2" />
          Скачать PDF
        </Button>
      </div>

      <div className="max-w-4xl mx-auto p-8 md:p-12 print:p-8">
        <div className="text-center mb-12 print:mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <img 
              src="https://cdn.poehali.dev/projects/982ce877-171e-45ff-91a1-ae753687e607/files/1a4c70ab-a0f4-4c5a-87b6-b4abf9ea78b6.png" 
              alt="Kuzikova School" 
              className="h-16"
            />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent print:text-black">
            7 СЕКРЕТОВ ХАРИЗМАТИЧНОГО ОРАТОРА
          </h1>
          <p className="text-2xl font-semibold text-gray-700 mb-3 print:text-xl">
            ПУБЛИЧНЫЕ ВЫСТУПЛЕНИЯ: 7 ШАГОВ К УСПЕХУ
          </p>
          <p className="text-xl text-gray-600 mb-2 print:text-lg">
            СЕМЬ ВАЖНЫХ ПРАВИЛ
          </p>
          <p className="text-gray-600 italic print:text-sm">
            или Как сделать своё выступление незабываемым и достичь цели
          </p>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">Школа ораторского искусства и импровизации</p>
            <p className="text-lg font-semibold text-gray-700">KUZIKOVA SCHOOL</p>
          </div>
        </div>

        <div className="space-y-8 print:space-y-6">
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border-2 border-primary/20 print:border print:border-gray-300 print:rounded-lg page-break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 print:text-xl">
              <span className="bg-gradient-to-r from-primary to-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl print:w-10 print:h-10 print:bg-primary">1</span>
              Правило 1: Будь смелым и искренним
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed print:text-sm">
              <strong>БУДЬ СМЕЛЫМ И ИСКРЕННИМ. БУДЬ НЕПОХОЖИМ НА ДРУГИХ. НО БУДЬ СОБОЙ.</strong> Отбрось сомнения и выступай! И говори лучше естественно, чем правильно. Опирайся на свои сильные ораторские качества. Найди свой уникальный «почерк», ярко выраженную индивидуальную особенность личности. Это позволит тебе стать харизматичным и привлекательным.
            </p>
            <p className="text-sm italic text-gray-600 pl-4 border-l-4 border-primary/30 print:text-xs">
              «Главное в ораторском искусстве состоит в том, чтобы не дать приметить искусства» / Квинтилиан
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl p-6 border-2 border-secondary/20 print:border print:border-gray-300 print:rounded-lg page-break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 print:text-xl">
              <span className="bg-gradient-to-r from-secondary to-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl print:w-10 print:h-10 print:bg-secondary">2</span>
              Правило 2: Уделяй внимание подготовке
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed print:text-sm">
              <strong>УДЕЛИ ВНИМАНИЕ ПОДГОТОВКЕ И РЕПЕТИЦИИ РЕЧИ.</strong> Без тренировки нет оратора. Любая импровизация – это хорошо подготовленное действие. Продумай структуру выступления. Определись с формой подачи материала и приемами привлечения внимания аудитории. Собери максимум информации о предстоящем выступлении. И главное – репетируй в полную силу, так словно ты уже выступаешь.
            </p>
            <p className="text-sm italic text-gray-600 pl-4 border-l-4 border-secondary/30 print:text-xs">
              «Чтобы научиться выступать без подготовки, нужно очень много готовиться» / Радислав Гандапас
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border-2 border-primary/20 print:border print:border-gray-300 print:rounded-lg page-break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 print:text-xl">
              <span className="bg-gradient-to-r from-primary to-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl print:w-10 print:h-10 print:bg-primary">3</span>
              Правило 3: Работай с голосом
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed print:text-sm">
              <strong>РАБОТАЙ С ГОЛОСОМ УСЕРДНО.</strong> Занимайся упражнениями для развития красивого голоса ежедневно. Делай дыхательную и артикуляционную гимнастику, тренируй дикцию. Перед выходом на публику настрой свой речевой инструмент. Звучи красиво – это вызывает доверие.
            </p>
            <p className="text-sm italic text-gray-600 pl-4 border-l-4 border-primary/30 print:text-xs">
              «Не допускайте того, чтобы через ваши речевые недостатки собеседники нарисовали ложную картину ваших способностей. Заставьте вашу речь работать на вас» / Фрэнк Снелл
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl p-6 border-2 border-secondary/20 print:border print:border-gray-300 print:rounded-lg page-break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 print:text-xl">
              <span className="bg-gradient-to-r from-secondary to-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl print:w-10 print:h-10 print:bg-secondary">4</span>
              Правило 4: Держи контакт с аудиторией
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed print:text-sm">
              <strong>ДЕРЖИ КОНТАКТ С АУДИТОРИЕЙ.</strong> Завязывай со слушателями отношения, создавай зрительный контакт. Охватывай взглядом всю аудиторию, общайся взглядом со всеми.
            </p>
            <p className="text-sm italic text-gray-600 pl-4 border-l-4 border-secondary/30 print:text-xs">
              «Одним взглядом можно убить любовь, одним же взглядом можно воскресить её» / Вильям Шекспир
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border-2 border-primary/20 print:border print:border-gray-300 print:rounded-lg page-break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 print:text-xl">
              <span className="bg-gradient-to-r from-primary to-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl print:w-10 print:h-10 print:bg-primary">5</span>
              Правило 5: Постановка на публике
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed print:text-sm">
              <strong>ПОСТАНОВКА НА ПУБЛИКЕ.</strong> Определись куда будешь девать руки, ноги, как стоять. Осваивай базовые жесты оратора. Держи прямую осанку, расправь плечи, приподними подбородок – так ты будешь транслировать аудитории уверенность и компетентность сильного оратора.
            </p>
            <p className="text-sm italic text-gray-600 pl-4 border-l-4 border-primary/30 print:text-xs">
              «Тот, кто лжет на языке слов, выдает себя на языке жестов, на которые он не обращает внимания» / Освальд Шпенглер
            </p>
          </div>

          <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl p-6 border-2 border-secondary/20 print:border print:border-gray-300 print:rounded-lg page-break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 print:text-xl">
              <span className="bg-gradient-to-r from-secondary to-primary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl print:w-10 print:h-10 print:bg-secondary">6</span>
              Правило 6: Поддерживай энергетику
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed print:text-sm">
              <strong>ПОДДЕРЖИВАЙ НЕОБХОДИМЫЙ УРОВЕНЬ ЭНЕРГЕТИКИ.</strong> Для разных выступлений она бывает разной. Энергетику можно создавать за счет передвижений, близости к аудитории, жестикуляции, громкости, эмоциональности, обращенности к слушателям.
            </p>
            <p className="text-sm italic text-gray-600 pl-4 border-l-4 border-secondary/30 print:text-xs">
              «Спит ли аудитория, или бушует и беснуется, определяется энергетикой оратора» / Сергей Шипунов
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border-2 border-primary/20 print:border print:border-gray-300 print:rounded-lg page-break-inside-avoid">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 print:text-xl">
              <span className="bg-gradient-to-r from-primary to-secondary text-white w-12 h-12 rounded-full flex items-center justify-center text-xl print:w-10 print:h-10 print:bg-primary">7</span>
              Правило 7: Делай паузы
            </h2>
            <p className="text-gray-700 mb-3 leading-relaxed print:text-sm">
              <strong>ДЕЛАЙ ПАУЗЫ.</strong> Паузы позволяют привлечь внимание, дать время слушателям на усвоение материала, обозначить переход от одной части выступления к другой, завершить выступление и принять аплодисменты.
            </p>
            <p className="text-sm italic text-gray-600 pl-4 border-l-4 border-primary/30 print:text-xs">
              «Всегда нужно уметь держать слово, но еще лучше – уметь держать паузу» / Яна Джангирова
            </p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-br from-primary to-secondary text-white rounded-xl p-8 print:mt-8 print:border-2 print:border-gray-400 print:bg-gray-50 print:text-black page-break-inside-avoid">
          <h2 className="text-3xl font-bold mb-4 print:text-2xl">Дорогой друг!</h2>
          <p className="mb-4 leading-relaxed print:text-sm">
            Ты намерен стать Мастером слова и серьезно настроить себя для эффективного звучания на публике?
          </p>
          <p className="mb-4 leading-relaxed print:text-sm">
            Приходи на ораторский курс <strong>«Своя игра»</strong> нашей Школы ораторского искусства
          </p>
          <p className="mb-4 print:text-sm">Ты пройдешь обучение на курсе, а, значит,</p>
          <ul className="space-y-3 mb-6 print:space-y-2">
            <li className="flex items-start gap-3 print:text-sm">
              <Icon name="CheckCircle2" size={20} className="mt-1 flex-shrink-0 print:hidden" />
              <span className="print:before:content-['✓_']">научишься презентовать себя, создавать захватывающие презентации и освоишь приемы управления вниманием публики</span>
            </li>
            <li className="flex items-start gap-3 print:text-sm">
              <Icon name="CheckCircle2" size={20} className="mt-1 flex-shrink-0 print:hidden" />
              <span className="print:before:content-['✓_']">будешь управлять страхом, избавишься от ограничивающих убеждений и прокачаешь свою уверенность</span>
            </li>
            <li className="flex items-start gap-3 print:text-sm">
              <Icon name="CheckCircle2" size={20} className="mt-1 flex-shrink-0 print:hidden" />
              <span className="print:before:content-['✓_']">получишь конкретные алгоритмы, чек-листы, таблицы и материалы для дальнейшего использования при подготовке выступлений</span>
            </li>
            <li className="flex items-start gap-3 print:text-sm">
              <Icon name="CheckCircle2" size={20} className="mt-1 flex-shrink-0 print:hidden" />
              <span className="print:before:content-['✓_']">запишешь свою видео-визитку и мастерское выступление</span>
            </li>
            <li className="flex items-start gap-3 print:text-sm">
              <Icon name="CheckCircle2" size={20} className="mt-1 flex-shrink-0 print:hidden" />
              <span className="print:before:content-['✓_']">а, главное, ты получишь мотивацию и вдохновение для своего роста как профессионального оратора</span>
            </li>
          </ul>
          <p className="text-2xl font-bold mb-2 print:text-xl">Иди вперед! Мы знаем, ты можешь!</p>
          <p className="opacity-90 print:text-sm print:opacity-100">Школа ораторского искусства и импровизации Kuzikova school</p>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-200 text-center text-gray-600 print:text-sm">
          <p className="mb-2">Телефон: +7 (912) 345-67-89</p>
          <p className="mb-2">Email: info@kuzikova.school</p>
          <p className="mb-2">Сайт: kuzikova.school</p>
          <p className="text-sm text-gray-500 mt-4">© 2024 Kuzikova School. Все права защищены.</p>
        </div>
      </div>

      <style>{`
        @media print {
          .no-print {
            display: none !important;
          }
          
          .page-break-inside-avoid {
            page-break-inside: avoid;
            break-inside: avoid;
          }
          
          body {
            print-color-adjust: exact;
            -webkit-print-color-adjust: exact;
          }
          
          @page {
            margin: 2cm;
          }
        }
      `}</style>
    </div>
  );
};

export default Guide;
