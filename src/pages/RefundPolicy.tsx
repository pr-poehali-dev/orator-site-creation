import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-8 transition-colors"
        >
          <Icon name="ArrowLeft" size={20} />
          <span>Вернуться на главную</span>
        </Link>

        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Политика возврата и отмены</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p className="text-sm text-center text-gray-500">
              Индивидуальный предприниматель Кузикова Светлана Алексеевна<br/>
              ОГРНИП 318237500160591
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">1. Общие положения</h2>
            <p>
              Настоящая политика возврата и отмены регулирует порядок возврата денежных средств и отмены записи 
              на занятия по курсу «Мастерство публичных выступлений».
            </p>
            <p>
              Покупая услугу, клиент подтверждает, что ознакомился с условиями возврата и отмены и согласен с ними.
            </p>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">2. Отмена записи и возврат средств</h2>
            
            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">2.1. Отмена за 10 и более дней до начала курса</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>При отмене записи за 10 и более календарных дней до начала курса осуществляется возврат оплаты брони курса за вычетом стоимости брони.</li>
              <li>Стоимость брони не возвращается и компенсирует организационные затраты.</li>
              <li>Возврат производится в течение 10 рабочих дней на банковскую карту или счет, с которого была произведена оплата брони курса.</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">2.2. Отмена за 3-9 дней до начала курса</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>При отмене записи за 3-9 календарных дней до начала курса возвращается 50% оплаты брони курса за вычетом стоимости брони.</li>
              <li>Удержанные средства компенсируют затраты на подготовку материалов и резервирование места.</li>
            </ul>

            <h3 className="text-xl font-bold text-foreground mt-6 mb-3">2.3. Отмена менее чем за 3 дня или после начала курса</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>При отмене записи менее чем за 3 дня до начала курса или после начала обучения возврат средств не производится.</li>
              <li>В исключительных случаях (болезнь, форс-мажор) возможен перенос на следующий поток при предоставлении подтверждающих документов.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">3. Порядок оформления возврата</h2>
            <p>Для оформления возврата необходимо:</p>
            <ol className="list-decimal pl-6 space-y-2">
              <li>Направить заявление на возврат по электронной почте: <a href="mailto:s_kuzikova@mail.ru" className="text-primary hover:underline">s_kuzikova@mail.ru</a></li>
              <li>В заявлении указать:
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>ФИО плательщика</li>
                  <li>Дату и сумму оплаты брони курса</li>
                  <li>Причину возврата</li>
                  <li>Реквизиты для возврата средств</li>
                </ul>
              </li>
              <li>Получить подтверждение получения заявления в течение 2 рабочих дней.</li>
              <li>Возврат средств осуществляется в течение 10 рабочих дней с момента одобрения заявления.</li>
            </ol>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">4. Перенос на другую дату</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Клиент имеет право один раз бесплатно перенести свое участие на следующий поток курса.</li>
              <li>Для переноса необходимо уведомить организатора не позднее чем за 3 дня до начала текущего курса.</li>
              <li>Перенос возможен только на ближайший следующий поток в течение 6 месяцев.</li>
              <li>Повторный перенос не предусмотрен — при пропуске второго потока возврат не производится.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">5. Отмена курса организатором</h2>
            <p>
              В случае отмены курса по инициативе организатора (недобор группы, болезнь преподавателя, форс-мажор):
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Клиенту предоставляется выбор: полный возврат средств или перенос на другую дату.</li>
              <li>Организатор обязуется уведомить участников об отмене не позднее чем за 3 дня до начала курса.</li>
              <li>Возврат производится в полном объеме (100%) в течение 10 рабочих дней.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">6. Пропуск занятий</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>При пропуске отдельных занятий по инициативе клиента возврат средств не производится.</li>
              <li>Клиент может получить записи пропущенных занятий (при наличии) для самостоятельного изучения.</li>
              <li>Индивидуальные консультации по пропущенным темам не предусмотрены.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">7. Особые условия</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Политика возврата не распространяется на акционные и специальные предложения, если иное не указано в условиях акции.</li>
              <li>При оплате услуг третьими лицами (в подарок) возврат осуществляется на счет плательщика.</li>
              <li>Организатор оставляет за собой право отказать в предоставлении услуги без объяснения причин с полным возвратом средств.</li>
            </ul>

            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">8. Контактная информация</h2>
            <p>По вопросам возврата и отмены обращайтесь:</p>
            <ul className="list-none space-y-2 mt-4">
              <li><strong>Email:</strong> <a href="mailto:s_kuzikova@mail.ru" className="text-primary hover:underline">s_kuzikova@mail.ru</a></li>
              <li><strong>Телефон:</strong> <a href="tel:+79183111712" className="text-primary hover:underline">+7 (918) 311-17-12</a></li>
              <li><strong>WhatsApp:</strong> <a href="https://wa.me/79183111712" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">+7 (918) 311-17-12</a></li>
            </ul>

            <p className="text-sm text-gray-500 mt-8 pt-8 border-t">
              Настоящая политика вступает в силу с момента публикации на сайте и действует до момента ее отмены или изменения. 
              Организатор имеет право вносить изменения в политику возврата с обязательным уведомлением клиентов.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;