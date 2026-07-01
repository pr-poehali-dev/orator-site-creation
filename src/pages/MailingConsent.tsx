const MailingConsent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Согласие на получение информационной рассылки</h1>

          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <p>
              Проставляя галочку в чек-боксе «согласен на получение информационных рассылок» Вы даете свое согласие на получение
              информационной и информационной рассылки от Индивидуального предпринимателя Кузиковой Светланы Алексеевны
              (ИНН 260103234389, ОГРНИП 318237500160591), (далее — Исполнитель), касающейся информации о продуктах,
              услугах и всех дополнительных сведений, имеющих отношение к получению услуг, а также всех сведений о
              других продуктах Исполнителя.
            </p>

            <p>
              Информационная и информационная рассылка будет направляться с электронной почты Исполнителя на Вашу электронную
              почту, которую Вы оставили при заполнении заявки на сайте:{' '}
              <a href="https://kuzikova-school.ru/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                https://kuzikova-school.ru/
              </a>{' '}
              или при активации чат-бота Исполнителя{' '}
              <a href="https://t.me/kuzikovaschool_bot" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                https://t.me/kuzikovaschool_bot
              </a>
              , а также в виде смс на номер телефона, указанный вами при заполнении данных в форме на сайте{' '}
              <a href="https://kuzikova-school.ru/" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                https://kuzikova-school.ru/
              </a>{' '}
              или при активации чат-бота Исполнителя{' '}
              <a href="https://t.me/kuzikovaschool_bot" className="text-primary hover:underline" target="_blank" rel="noopener noreferrer">
                https://t.me/kuzikovaschool_bot
              </a>
              .
            </p>

            <p>
              Вы вправе в любой момент отписаться от рассылки, указав на это в ответном письме Исполнителю, либо направив
              отказ от рассылки на электронную почту Исполнителя{' '}
              <a href="mailto:s_kuzikova@mail.ru" className="text-primary hover:underline">
                s_kuzikova@mail.ru
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailingConsent;