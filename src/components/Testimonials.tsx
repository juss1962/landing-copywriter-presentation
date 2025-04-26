
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      text: "Тексты превзошли все мои ожидания! Конверсия выросла на 35% уже в первую неделю после внедрения нового контента на сайт.",
      author: "Анна Смирнова",
      position: "Руководитель маркетинга, TechSolutions",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2787&q=80"
    },
    {
      text: "Профессиональный подход и глубокое понимание нашей ниши. Получили точно то, что искали, уже на первой итерации!",
      author: "Михаил Иванов",
      position: "CEO, StartupSpace",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
    {
      text: "Работаем вместе уже больше года. Наш блог регулярно получает высокие позиции в поиске благодаря качественному SEO-копирайтингу.",
      author: "Елена Королёва",
      position: "Контент-менеджер, FitnessGuru",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1361&q=80"
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">Что говорят клиенты</h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto">
            Отзывы от тех, кто уже оценил качество моих текстов и их влияние на бизнес-результаты.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#F1F0FB] p-8 rounded-lg relative">
              <Quote className="absolute text-[#9b87f5] opacity-20 w-14 h-14 -top-2 -left-2" />
              <p className="text-[#333] mb-6 relative z-10">"{testimonial.text}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-medium text-[#333]">{testimonial.author}</h4>
                  <p className="text-sm text-[#555]">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
