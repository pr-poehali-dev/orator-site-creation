import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { formatPhoneNumber } from '@/utils/phoneFormat';

const TELEGRAM_NOTIFICATION_URL = 'https://functions.poehali.dev/1427b9c7-37fe-40a5-8fe7-96646f8f064a';

const courses = [
  {
    id: 'improv',
    name: '«Импровизация. Сторителлинг»',
    schedule: [
      { day: 'понедельник', icon: '1' },
      { day: 'среда', icon: '3' },
    ],
    time: '19:00 – 21:00',
    color: 'orange',
    courseFull: 'Ораторский курс «Импровизация. Сторителлинг»',
  },
  {
    id: 'zero',
    name: '«Ораторское искусство с нуля»',
    schedule: [
      { day: 'суббота', icon: '6' },
    ],
    time: '11:00 – 13:00',
    color: 'violet',
    courseFull: 'Курс «Ораторское искусство с нуля»',
  },
];

const FreeTrialBanner = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedCourse, setSelectedCourse] = useState('improv');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const course = courses.find(c => c.id === selectedCourse)!;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !consent) return;
    setIsSubmitting(true);
    try {
      await fetch(TELEGRAM_NOTIFICATION_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          course: `Пробное занятие — ${course.courseFull}`,
          date: `${course.schedule.map(s => s.day).join(' / ')}, ${course.time}`
        })
      });
    } catch {
      // silent
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <section className="py-10 px-4 bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 border-y border-orange-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-orange-200/20 rounded-full blur-3xl translate-x-24 -translate-y-24 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-rose-200/20 rounded-full blur-3xl -translate-x-24 translate-y-24 pointer-events-none" />

      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Плашка */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-base font-bold px-6 py-2.5 rounded-full shadow-md">
            <Icon name="Mic" size={18} />
            Первый шаг к уверенной речи — попробуй бесплатно
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Левая колонка — информация */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 leading-tight">
              Бесплатные пробные занятия
            </h2>
            <p className="text-lg text-gray-500 mb-6">
              Приходи и почувствуй результат уже на первом занятии — без обязательств
            </p>

            {/* Курс 1 */}
            <div className="bg-white border-2 border-orange-200 rounded-2xl p-5 mb-4 shadow-sm">
              <p className="text-base font-bold text-orange-500 uppercase tracking-wide mb-1">Ораторский курс</p>
              <p className="text-xl font-black text-gray-900 mb-3">«Импровизация. Сторителлинг»</p>
              <div className="flex flex-wrap gap-3 mb-3">
                {[
                  { day: 'Понедельник' },
                  { day: 'Среда' },
                ].map((item) => (
                  <div
                    key={item.day}
                    className="bg-orange-50 border border-orange-200 rounded-xl px-4 py-2 text-center"
                  >
                    <p className="text-gray-700 font-bold text-base">{item.day}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} className="text-orange-400" />
                <p className="text-orange-600 font-bold text-lg">19:00 – 21:00</p>
              </div>
            </div>

            {/* Курс 2 */}
            <div className="bg-white border-2 border-violet-200 rounded-2xl p-5 mb-5 shadow-sm">
              <p className="text-base font-bold text-violet-500 uppercase tracking-wide mb-1">Курс</p>
              <p className="text-xl font-black text-gray-900 mb-3">«Ораторское искусство с нуля»</p>
              <div className="flex flex-wrap gap-3 mb-3">
                <div className="bg-violet-50 border border-violet-200 rounded-xl px-4 py-2 text-center">
                  <p className="text-gray-700 font-bold text-base">Суббота</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Clock" size={18} className="text-violet-400" />
                <p className="text-violet-600 font-bold text-lg">11:00 – 13:00</p>
              </div>
            </div>

            {/* Адрес */}
            <div className="flex items-start gap-3 bg-white border border-orange-100 rounded-xl px-5 py-4 mb-5 shadow-sm">
              <Icon name="MapPin" size={22} className="text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-800 text-lg font-semibold">г. Краснодар, ул. Горького, 104, офис 26</p>
                <p className="text-gray-500 text-base">код двери: 26</p>
              </div>
            </div>

            {/* Телефон */}
            <a
              href="tel:+79183111712"
              className="inline-flex items-center gap-2 text-orange-600 font-bold text-xl hover:text-orange-700 transition-colors"
            >
              <Icon name="Phone" size={22} />
              +7 918 311-17-12
              <span className="text-gray-400 font-normal text-base">— есть вопросы?</span>
            </a>

            {/* MAX */}
            <a
              href="https://max.ru/u/f9LHodD0cOLvTbH1OK3umoWq_Fy3X11Wi5Hy97U7oooxquX7NJ9GnWOYoYw"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 font-semibold text-lg hover:text-purple-700 transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
              </svg>
              Написать в MAX
            </a>
          </div>

          {/* Правая колонка — форма */}
          <div className="bg-white rounded-2xl shadow-md border border-orange-100 p-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-8 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
                  <Icon name="Check" size={32} className="text-green-600" />
                </div>
                <p className="text-2xl font-bold text-gray-900 mb-2">Заявка отправлена!</p>
                <p className="text-gray-500 text-lg">Мы свяжемся с вами ближе к занятию.</p>
              </div>
            ) : (
              <>
                <p className="text-2xl font-bold text-gray-900 mb-1">Записаться на пробное занятие</p>
                <p className="text-lg text-gray-500 mb-4">Выберите курс и оставьте контакты</p>

                {/* Выбор курса */}
                <div className="flex flex-col gap-2 mb-5">
                  {courses.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setSelectedCourse(c.id)}
                      className={`text-left px-4 py-3 rounded-xl border-2 transition-all font-semibold text-base ${
                        selectedCourse === c.id
                          ? c.id === 'improv'
                            ? 'border-orange-400 bg-orange-50 text-orange-700'
                            : 'border-violet-400 bg-violet-50 text-violet-700'
                          : 'border-gray-200 text-gray-600 hover:border-gray-300'
                      }`}
                    >
                      {c.name}
                      <span className="block text-sm font-normal mt-0.5 opacity-70">
                        {c.schedule.map(s => s.day).join(' / ')} · {c.time}
                      </span>
                    </button>
                  ))}
                </div>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="trial-name" className="text-lg font-semibold mb-1.5 block">Ваше имя *</Label>
                    <Input
                      id="trial-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Введите имя"
                      required
                      className="text-lg py-5"
                    />
                  </div>
                  <div>
                    <Label htmlFor="trial-phone" className="text-lg font-semibold mb-1.5 block">Телефон *</Label>
                    <Input
                      id="trial-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="text-lg py-5"
                    />
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Checkbox
                      id="trial-consent"
                      checked={consent}
                      onCheckedChange={(v) => setConsent(v as boolean)}
                      className="mt-0.5 scale-125"
                    />
                    <Label htmlFor="trial-consent" className="text-base text-gray-500 leading-relaxed cursor-pointer">
                      Я согласен с{' '}
                      <a href="/privacy" target="_blank" className="text-orange-500 hover:underline">политикой конфиденциальности</a>
                      {' '}и обработкой персональных данных
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-xl py-7"
                    disabled={isSubmitting || !consent || !name || !phone}
                  >
                    {isSubmitting ? 'Отправка...' : 'Записаться бесплатно'}
                    {!isSubmitting && <Icon name="ArrowRight" size={22} className="ml-2" />}
                  </Button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeTrialBanner;
