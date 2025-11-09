import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { trackGoal, GOALS } from '@/utils/goals';

const TELEGRAM_NOTIFICATION_URL = 'https://functions.poehali.dev/2708494c-3d0e-4905-b18f-86093217671b';

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
  courseName: string;
  courseDate: string;
}

const ApplicationModal = ({ isOpen, onClose, courseName, courseDate }: ApplicationModalProps) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [showContacts, setShowContacts] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (name && phone && consent) {
      setIsSubmitting(true);
      
      try {
        const response = await fetch(TELEGRAM_NOTIFICATION_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name,
            phone,
            course: courseName,
            date: courseDate
          })
        });

        if (response.ok) {
          setSubmitSuccess(true);
        } else {
          console.error('Failed to submit application');
        }
      } catch (error) {
        console.error('Error submitting application:', error);
      } finally {
        setIsSubmitting(false);
        setShowContacts(true);
      }
    }
  };

  const message = `Здравствуйте! Хочу записаться на курс.

Имя: ${name}
Телефон: ${phone}
Курс: ${courseName}
Дата старта: ${courseDate}`;

  const whatsappLink = `https://wa.me/79183111712?text=${encodeURIComponent(message)}`;
  const telegramLink = `https://t.me/svetlana_kuzikova?text=${encodeURIComponent(message)}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(message);
    alert('Текст заявки скопирован в буфер обмена!');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50" onClick={onClose}>
      <div 
        className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-primary">Запись на курс</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Icon name="X" size={24} />
            </button>
          </div>

          {!showContacts ? (
            <>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3">
                  <Icon name="Calendar" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-semibold text-sm text-muted-foreground">Вы выбрали:</p>
                    <p className="font-bold text-base">{courseName}</p>
                    <p className="text-sm text-primary font-semibold mt-1">Старт: {courseDate}</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-base font-semibold mb-2 block">
                    Ваше имя *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Введите ваше имя"
                    required
                    className="text-base"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-semibold mb-2 block">
                    Телефон *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="+7 (___) ___-__-__"
                    required
                    className="text-base"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Checkbox
                    id="consent"
                    checked={consent}
                    onCheckedChange={(checked) => setConsent(checked as boolean)}
                    className="mt-1"
                  />
                  <Label htmlFor="consent" className="text-sm leading-relaxed cursor-pointer">
                    Я согласен с{' '}
                    <a href="/privacy" target="_blank" className="text-primary hover:underline">
                      политикой конфиденциальности
                    </a>
                    ,{' '}
                    <a href="/consent" target="_blank" className="text-primary hover:underline">
                      согласием на обработку персональных данных
                    </a>
                    ,{' '}
                    <a href="/offer" target="_blank" className="text-primary hover:underline">
                      публичной офертой
                    </a>
                    {' '}и{' '}
                    <a href="/refund" target="_blank" className="text-primary hover:underline">
                      политикой возврата
                    </a>
                    {' '}*
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-base py-6"
                  disabled={isSubmitting || !consent}
                >
                  {isSubmitting ? 'Отправка...' : 'Отправить заявку'}
                  {!isSubmitting && <Icon name="Send" size={20} className="ml-2" />}
                </Button>
              </form>
            </>
          ) : (
            <>
              <div className="bg-green-50 border-2 border-green-200 rounded-xl p-4 mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <Icon name="Check" size={24} className="text-green-600 mt-1" />
                  <div>
                    <p className="font-bold text-lg mb-2">
                      {submitSuccess ? '✅ Заявка отправлена!' : 'Ваша заявка готова!'}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {submitSuccess 
                        ? 'Мы получили вашу заявку и скоро свяжемся с вами. Также можете связаться с нами напрямую:'
                        : 'Выберите удобный способ связи ниже:'}
                    </p>
                  </div>
                </div>

                <div className="bg-white rounded-lg p-3 text-sm">
                  <p className="font-semibold mb-1">Имя: {name}</p>
                  <p className="font-semibold mb-1">Телефон: {phone}</p>
                  <p className="font-semibold mb-1">Курс: {courseName}</p>
                  <p className="font-semibold">Дата: {courseDate}</p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                <p className="font-semibold text-center mb-3">Выберите способ связи:</p>

                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-6"
                  onClick={() => trackGoal(GOALS.WHATSAPP_CLICK)}
                >
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Отправить в WhatsApp
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 border-blue-500 text-blue-600 hover:bg-blue-50 py-6"
                >
                  <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.941z"/>
                    </svg>
                    Отправить в Telegram
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="w-full border-2 py-6"
                  onClick={() => trackGoal(GOALS.PHONE_CLICK)}
                >
                  <a href="tel:+79183111712">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Позвонить: +7 918 311-17-12
                  </a>
                </Button>

                <Button
                  variant="ghost"
                  className="w-full py-6"
                  onClick={handleCopy}
                >
                  <Icon name="Copy" size={20} className="mr-2" />
                  Скопировать текст заявки
                </Button>
              </div>

              <div className="text-center">
                <button
                  onClick={() => setShowContacts(false)}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  ← Изменить данные
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationModal;