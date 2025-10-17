const Consent = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-white to-secondary/5 py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="bg-white rounded-lg shadow-xl p-8 md:p-12">
          <h1 className="text-4xl font-bold mb-8 text-center">Согласие на обработку персональных данных</h1>
          
          <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
            <h2 className="text-2xl font-bold text-foreground mt-8 mb-4">Согласие на обработку персональных данных</h2>
            
            <p className="text-lg">Внося любые персональные данные в данную форму, вы даете согласие на обработку своих персональных данных.</p>

            <div className="bg-primary/5 p-6 rounded-lg my-6">
              <p className="text-xl font-semibold text-foreground">&laquo;Настоящим я даю согласие на обработку персональных данных&raquo;</p>
            </div>

            <p>Заполняя настоящую форму, в соответствии с требованиями статьи 9 Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных», я подтверждаю свое согласие на обработку вносимых в форму моих персональных данных, лицом, оказывающим услуги на основании данной формы (далее Сайт), в том числе:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>фамилию, имя, отчество;</li>
              <li>контактный номер телефона;</li>
              <li>адрес электронной почты;</li>
            </ul>

            <p className="mt-6"><strong>Целью обработки персональных данных</strong> является оказание мне услуг на основании заполненной формы.</p>

            <p>Настоящее согласие действует бессрочно, срок хранения моих персональных данных не ограничен.</p>

            <p>Оставляю за собой право отозвать свое согласие посредством составления соответствующего письменного документа, который может быть направлен мной по почте{' '}
              <a href="mailto:s_kuzikova@mail.ru" className="text-primary hover:underline">
                s_kuzikova@mail.ru
              </a>{' '}
              заказным письмом с уведомлением о вручении либо вручен лично под расписку представителю автору проекта.
            </p>

            <div className="mt-8 pt-6 border-t">
              <h3 className="text-xl font-bold text-foreground mb-3">Контактная информация</h3>
              <p>Индивидуальный предприниматель Кузикова Светлана Алексеевна</p>
              <p>ОГРНИП 318237500160591</p>
              <p>E-mail: <a href="mailto:s_kuzikova@mail.ru" className="text-primary hover:underline">s_kuzikova@mail.ru</a></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Consent;
