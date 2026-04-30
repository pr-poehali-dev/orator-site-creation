import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Button } from '@/components/ui/button';
import { formatPhoneNumber } from '@/utils/phoneFormat';

const TELEGRAM_NOTIFICATION_URL = 'https://functions.poehali.dev/1427b9c7-37fe-40a5-8fe7-96646f8f064a';

const FreeTrialBanner = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
          course: 'Пробное занятие — Импровизация. Сторителлинг',
          date: '29 апреля / 06 мая / 13 мая в 19:00'
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
        {/* Шапка */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 bg-orange-500 text-white text-base font-bold px-5 py-2 rounded-full shadow-md">
            <Icon name="Flame" size={18} />
            Бесплатно — только 3 даты
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Левая колонка — информация */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 leading-tight">
              Бесплатные пробные занятия
            </h2>
            <p className="text-xl md:text-2xl font-semibold text-orange-600 mb-6">
              Ораторский курс «Импровизация. Сторителлинг»
            </p>

            {/* Даты */}
            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { date: '06 мая', day: 'среда' },
                { date: '13 мая', day: 'среда' },
              ].map((item) => (
                <div
                  key={item.date}
                  className="bg-white border-2 border-orange-200 rounded-xl px-5 py-3 text-center shadow-sm min-w-[130px]"
                >
                  <p className="text-gray-400 text-sm font-semibold uppercase tracking-wide">{item.day}</p>
                  <p className="text-gray-900 font-black text-2xl leading-tight">{item.date}</p>
                  <p className="text-orange-500 text-lg font-bold">19:00</p>
                </div>
              ))}
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
                <p className="text-base text-gray-500 mb-5">Оставьте имя и телефон — мы пришлём напоминание</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="trial-name" className="text-base font-semibold mb-1.5 block">Ваше имя *</Label>
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
                    <Label htmlFor="trial-phone" className="text-base font-semibold mb-1.5 block">Телефон *</Label>
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
                      className="mt-0.5"
                    />
                    <Label htmlFor="trial-consent" className="text-sm text-gray-500 leading-relaxed cursor-pointer">
                      Я согласен с{' '}
                      <a href="/privacy" target="_blank" className="text-orange-500 hover:underline">политикой конфиденциальности</a>
                      {' '}и обработкой персональных данных
                    </Label>
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold text-lg py-6"
                    disabled={isSubmitting || !consent || !name || !phone}
                  >
                    {isSubmitting ? 'Отправка...' : 'Записаться бесплатно'}
                    {!isSubmitting && <Icon name="ArrowRight" size={20} className="ml-2" />}
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