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
  const [mailingConsent, setMailingConsent] = useState(false);
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
          course: 'Пробное занятие',
          date: ''
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
          <div className="inline-flex items-center gap-3 bg-white border-2 border-orange-200 text-orange-700 text-lg font-bold px-7 py-3 rounded-full shadow-sm">
            <Icon name="Mic" size={22} />
            Первый шаг к уверенной речи — попробуй бесплатно
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Левая колонка — информация */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-2 leading-tight">
              Бесплатные пробные занятия
            </h2>
            <p className="text-xl text-gray-500 mb-6">
              Приходи и почувствуй результат уже на первом занятии — без обязательств
            </p>

            {/* Адрес */}
            <div className="flex items-start gap-3 bg-white border border-orange-100 rounded-xl px-5 py-4 mb-5 shadow-sm">
              <Icon name="MapPin" size={22} className="text-orange-400 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-gray-800 text-lg font-semibold">г. Краснодар, ул. Горького, 104, офис 26</p>
                <p className="text-gray-500 text-lg">код двери: 26</p>
              </div>
            </div>

            {/* Телефон */}
            <a
              href="tel:+79183111712"
              className="inline-flex items-center gap-2 text-orange-600 font-bold text-xl hover:text-orange-700 transition-colors"
            >
              <Icon name="Phone" size={22} />
              +7 918 311-17-12
              <span className="text-gray-400 font-normal text-lg">— есть вопросы?</span>
            </a>

            {/* Мессенджеры */}
            <div className="flex flex-wrap gap-4 mt-2">
              <a
                href="https://t.me/+79183111712"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold text-lg hover:text-blue-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                </svg>
                Написать в Telegram
              </a>
              <a
                href="https://wa.me/79183111712"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-green-600 font-semibold text-lg hover:text-green-700 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Написать в WhatsApp
              </a>
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
                <p className="text-lg text-gray-500 mb-4">Оставьте контакты — мы свяжемся с вами</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="trial-name" className="text-xl font-semibold mb-2 block">Ваше имя *</Label>
                    <Input
                      id="trial-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Введите имя"
                      required
                      className="text-xl py-6"
                    />
                  </div>
                  <div>
                    <Label htmlFor="trial-phone" className="text-xl font-semibold mb-2 block">Телефон *</Label>
                    <Input
                      id="trial-phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(formatPhoneNumber(e.target.value))}
                      placeholder="+7 (___) ___-__-__"
                      required
                      className="text-xl py-6"
                    />
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Checkbox
                      id="trial-consent"
                      checked={consent}
                      onCheckedChange={(v) => setConsent(v as boolean)}
                      className="mt-0.5 scale-125"
                    />
                    <Label htmlFor="trial-consent" className="text-lg text-gray-500 leading-relaxed cursor-pointer">
                      Я согласен с{' '}
                      <a href="/privacy" target="_blank" className="text-orange-500 hover:underline">политикой конфиденциальности</a>
                      {' '}и обработкой персональных данных *
                    </Label>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Checkbox
                      id="trial-mailing"
                      checked={mailingConsent}
                      onCheckedChange={(v) => setMailingConsent(v as boolean)}
                      className="mt-0.5 scale-125"
                    />
                    <Label htmlFor="trial-mailing" className="text-lg text-gray-500 leading-relaxed cursor-pointer">
                      Согласен на получение{' '}
                      <a href="/mailing-consent" target="_blank" className="text-orange-500 hover:underline">информационных рассылок</a>
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