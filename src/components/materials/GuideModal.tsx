import { useState } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface GuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GuideModal = ({ isOpen, onClose }: GuideModalProps) => {
  const [email, setEmail] = useState('');
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors z-10"
        >
          <Icon name="X" size={24} />
        </button>

        <div className="p-8 md:p-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Публичные выступления: 7 шагов к успеху
            </h2>
            <p className="text-xl font-semibold text-gray-700 mb-2">СЕКРЕТЫ ХАРИЗМАТИЧНОГО ОРАТОРА</p>
            <p className="text-lg text-gray-600">СЕМЬ ВАЖНЫХ ПРАВИЛ</p>
            <p className="text-gray-600 italic">или Как сделать своё выступление незабываемым и достичь цели</p>
          </div>

          <div className="space-y-8 mb-10">
            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border-2 border-primary/20">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="bg-gradient-to-r from-primary to-secondary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">1</span>
                Правило 1: Будь смелым и искренним
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>БУДЬ СМЕЛЫМ И ИСКРЕННИМ. БУДЬ НЕПОХОЖИМ НА ДРУГИХ. НО БУДЬ СОБОЙ.</strong> Отбрось сомнения и выступай! И говори лучше естественно, чем правильно. Опирайся на свои сильные ораторские качества. Найди свой уникальный «почерк», ярко выраженную индивидуальную особенность личности. Это позволит тебе стать харизматичным и привлекательным.
              </p>
              <p className="text-sm italic text-gray-600 mt-3">
                «Главное в ораторском искусстве состоит в том, чтобы не дать приметить искусства» / Квинтилиан
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl p-6 border-2 border-secondary/20">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="bg-gradient-to-r from-secondary to-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">2</span>
                Правило 2: Уделяй внимание подготовке
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>УДЕЛИ ВНИМАНИЕ ПОДГОТОВКЕ И РЕПЕТИЦИИ РЕЧИ.</strong> Без тренировки нет оратора. Любая импровизация – это хорошо подготовленное действие. Продумай структуру выступления. Определись с формой подачи материала и приемами привлечения внимания аудитории. Собери максимум информации о предстоящем выступлении. И главное – репетируй в полную силу, так словно ты уже выступаешь.
              </p>
              <p className="text-sm italic text-gray-600 mt-3">
                «Чтобы научиться выступать без подготовки, нужно очень много готовиться» / Радислав Гандапас
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border-2 border-primary/20">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="bg-gradient-to-r from-primary to-secondary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">3</span>
                Правило 3: Работай с голосом
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>РАБОТАЙ С ГОЛОСОМ УСЕРДНО.</strong> Занимайся упражнениями для развития красивого голоса ежедневно. Делай дыхательную и артикуляционную гимнастику, тренируй дикцию. Перед выходом на публику настрой свой речевой инструмент. Звучи красиво – это вызывает доверие.
              </p>
              <p className="text-sm italic text-gray-600 mt-3">
                «Не допускайте того, чтобы через ваши речевые недостатки собеседники нарисовали ложную картину ваших способностей. Заставьте вашу речь работать на вас» / Фрэнк Снелл
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl p-6 border-2 border-secondary/20">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="bg-gradient-to-r from-secondary to-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">4</span>
                Правило 4: Держи контакт с аудиторией
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>ДЕРЖИ КОНТАКТ С АУДИТОРИЕЙ.</strong> Завязывай со слушателями отношения, создавай зрительный контакт. Охватывай взглядом всю аудиторию, общайся взглядом со всеми.
              </p>
              <p className="text-sm italic text-gray-600 mt-3">
                «Одним взглядом можно убить любовь, одним же взглядом можно воскресить её» / Вильям Шекспир
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border-2 border-primary/20">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="bg-gradient-to-r from-primary to-secondary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">5</span>
                Правило 5: Постановка на публике
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>ПОСТАНОВКА НА ПУБЛИКЕ.</strong> Определись куда будешь девать руки, ноги, как стоять. Осваивай базовые жесты оратора. Держи прямую осанку, расправь плечи, приподними подбородок – так ты будешь транслировать аудитории уверенность и компетентность сильного оратора.
              </p>
              <p className="text-sm italic text-gray-600 mt-3">
                «Тот, кто лжет на языке слов, выдает себя на языке жестов, на которые он не обращает внимания» / Освальд Шпенглер
              </p>
            </div>

            <div className="bg-gradient-to-br from-secondary/5 to-primary/5 rounded-xl p-6 border-2 border-secondary/20">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="bg-gradient-to-r from-secondary to-primary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">6</span>
                Правило 6: Поддерживай энергетику
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>ПОДДЕРЖИВАЙ НЕОБХОДИМЫЙ УРОВЕНЬ ЭНЕРГЕТИКИ.</strong> Для разных выступлений она бывает разной. Энергетику можно создавать за счет передвижений, близости к аудитории, жестикуляции, громкости, эмоциональности, обращенности к слушателям.
              </p>
              <p className="text-sm italic text-gray-600 mt-3">
                «Спит ли аудитория, или бушует и беснуется, определяется энергетикой оратора» / Сергей Шипунов
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl p-6 border-2 border-primary/20">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <span className="bg-gradient-to-r from-primary to-secondary text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">7</span>
                Правило 7: Делай паузы
              </h3>
              <p className="text-gray-700 mb-2">
                <strong>ДЕЛАЙ ПАУЗЫ.</strong> Паузы позволяют привлечь внимание, дать время слушателям на усвоение материала, обозначить переход от одной части выступления к другой, завершить выступление и принять аплодисменты.
              </p>
              <p className="text-sm italic text-gray-600 mt-3">
                «Всегда нужно уметь держать слово, но еще лучше – уметь держать паузу» / Яна Джангирова
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-primary to-secondary text-white rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">Дорогой друг!</h3>
            <p className="mb-4">
              Ты намерен стать Мастером слова и серьезно настроить себя для эффективного звучания на публике?
            </p>
            <p className="mb-4">
              Приходи на ораторский курс <strong>«Своя игра»</strong> нашей Школы ораторского искусства
            </p>
            <p className="mb-4">Ты пройдешь обучение на курсе, а, значит,</p>
            <ul className="space-y-2 mb-4">
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle2" size={20} className="mt-1 flex-shrink-0" />
                <span>научишься презентовать себя, создавать захватывающие презентации и освоишь приемы управления вниманием публики</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle2" size={20} className="mt-1 flex-shrink-0" />
                <span>будешь управлять страхом, избавишься от ограничивающих убеждений и прокачаешь свою уверенность</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle2" size={20} className="mt-1 flex-shrink-0" />
                <span>получишь конкретные алгоритмы, чек-листы, таблицы и материалы для дальнейшего использования при подготовке выступлений</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle2" size={20} className="mt-1 flex-shrink-0" />
                <span>запишешь свою видео-визитку и мастерское выступление</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="CheckCircle2" size={20} className="mt-1 flex-shrink-0" />
                <span>а, главное, ты получишь мотивацию и вдохновение для своего роста как профессионального оратора</span>
              </li>
            </ul>
            <p className="text-xl font-bold">Иди вперед! Мы знаем, ты можешь!</p>
            <p className="mt-2 opacity-90">Школа ораторского искусства и импровизации Kuzikova school</p>
          </div>

          {!downloaded ? (
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-center">Получите гайд бесплатно</h3>
              <p className="text-gray-600 mb-4 text-center">Оставьте свою почту, и мы отправим вам PDF-версию гайда</p>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Ваш email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-primary outline-none"
                />
                <Button onClick={handleDownload} size="lg" className="whitespace-nowrap">
                  <Icon name="Download" size={18} className="mr-2" />
                  Скачать гайд
                </Button>
              </div>
            </div>
          ) : (
            <div className="bg-green-50 rounded-xl p-6 text-center border-2 border-green-200">
              <Icon name="CheckCircle2" size={48} className="text-green-600 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-green-700 mb-2">Спасибо!</h3>
              <p className="text-gray-700">Гайд отправлен на вашу почту. Проверьте входящие письма.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default GuideModal;
