
import { QuoteIcon } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      quote: "Тексты, написанные для нашего интернет-магазина, значительно повысили конверсию. Профессиональный подход и глубокое понимание нашей целевой аудитории впечатлили!",
      author: "Елена Соколова",
      position: "Маркетинг-директор, BuyNow",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      quote: "Обратились за контентом для запуска нового продукта и получили не просто тексты, а настоящую стратегию взаимодействия с клиентами. Результат превзошел все ожидания!",
      author: "Александр Петров",
      position: "CEO, TechStart",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    },
    {
      quote: "Работаем вместе уже больше года. За это время наш блог стал одним из лидеров ниши, а тексты регулярно получают высокие оценки читателей. Рекомендую!",
      author: "Мария Иванова",
      position: "Контент-менеджер, GreenLife",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Отзывы клиентов</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Что говорят мои клиенты о сотрудничестве и результатах работы
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="bg-accent/10 rounded-lg p-6 relative hover:shadow-lg transition-all duration-300"
            >
              <QuoteIcon className="absolute top-6 right-6 h-8 w-8 text-primary/20" />
              <p className="text-gray-700 mb-6 relative z-10">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
