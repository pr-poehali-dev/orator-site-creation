import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQSection = () => {
  const faqs = [
    {
      question: 'Какой формат занятий?',
      answer: 'Уникальное сочетание групповых тренингов и индивидуальных занятий с каждым участником. Это позволяет работать над общими навыками в группе и прорабатывать личные особенности индивидуально.'
    },
    {
      question: 'Сколько длится курс?',
      answer: 'Базовый курс длится 8 занятий по 3 часа. Занятия проходят 1-2 раза в неделю. Также есть интенсивы и индивидуальные программы.'
    },
    {
      question: 'Нужна ли специальная подготовка?',
      answer: 'Нет, никакой подготовки не требуется. Курс подходит как для новичков, так и для опытных ораторов, желающих усовершенствовать навыки.'
    },
    {
      question: 'Сколько человек в группе?',
      answer: 'Не более 10 человек. Малые группы позволяют уделить внимание каждому участнику и создать комфортную атмосферу для практики.'
    },
    {
      question: 'Что будет на занятиях?',
      answer: '70% времени — практика: выступления перед камерой, импровизации, ролевые игры. 30% — теория и разбор видеозаписей. Каждое занятие — реальный прогресс.'
    }
  ];

  return (
    <section id="faq" className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Частые вопросы</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Ответы на популярные вопросы о курсе
        </p>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
