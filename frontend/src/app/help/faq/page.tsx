import React from 'react';

const FAQ = () => {
  const faqItems = [
    {
      question: 'Какие у вас варианты доставки?',
      answer:
        'Мы предлагаем стандартные и экспресс доставки. Стандартная доставка обычно занимает 7-14 рабочих дней, в то время как экспресс доставка осуществляется в течение 5-7 рабочих дней. Стоимость и время доставки могут варьироваться в зависимости от вашего местоположения.',
    },
    {
      question: 'Как я могу отследить мой заказ?',
      answer:
        'После обработки и отправки вашего заказа вы получите электронное подтверждение с номером отслеживания. Вы можете использовать этот номер для отслеживания статуса доставки на нашем сайте или на сайте службы доставки.',
    },
    {
      question: 'Какова ваша политика возврата?',
      answer:
        'Мы принимаем возвраты в течение 30 дней с момента доставки для полного возмещения или обмена. Товары должны быть неношеными, нестиранными и в их первоначальном состоянии с прикрепленными ярлыками.',
    },
    {
      question: 'Вы осуществляете международную доставку?',
      answer:
        'В связи с текущей ситуаций магазин временно не осуществляет международную доставку. ',
    },
    {
      question: 'Как связаться с службой поддержки клиентов?',
      answer:
        'Если вам нужна помощь с заказом, у вас есть вопросы о наших продуктах или вам нужна поддержка по любой другой причине, наша служба поддержки клиентов доступна по электронной почте manager@ostori или через форму обратной связи на сайте.',
    },
    {
      question: 'Предоставляются ли у вас скидки или акции?',
      answer:
        'Мы время от времени предлагаем скидки и акции. Чтобы быть в курсе последних предложений и специальных акций, вы можете подписаться на нашу рассылку или следить за нами в социальных сетях.',
    },
  ];

  return (
    <div
      className={`relative mt-8 w-full bg-white px-6 pb-8 pt-10 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-2xl sm:rounded-lg sm:px-10`}
    >
      <div className="mx-auto px-5">
        <div className="flex flex-col items-center">
          <h2 className="mt-5 text-center text-3xl font-bold tracking-tight md:text-5xl">
            FAQ
          </h2>
          <p className="mt-3 text-lg text-neutral-500 md:text-xl">
            Часто задаваемые вопросы
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-xl divide-y divide-neutral-200">
          {faqItems.map((item, index) => (
            <div key={index} className="py-5">
              <details className="group">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                  <span>{item.question}</span>
                  <span className="transition group-open:rotate-180">
                    <svg
                      className="h-4 w-4 stroke-current"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M6 9l6 6 6-6"></path>
                    </svg>
                  </span>
                </summary>
                <p className="group-open:animate-fadeIn mt-3 text-neutral-600">
                  {item.answer}
                </p>
              </details>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
