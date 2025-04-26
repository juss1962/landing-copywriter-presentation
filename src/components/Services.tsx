
import { 
  PenTool, 
  MessageSquare, 
  Search, 
  BookOpen 
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <PenTool className="h-8 w-8 text-primary" />,
      title: "Веб-копирайтинг",
      description: "Создание уникальных текстов для вашего сайта, которые не только информируют, но и продают.",
    },
    {
      icon: <MessageSquare className="h-8 w-8 text-primary" />,
      title: "Продающие описания",
      description: "Описания товаров и услуг, которые акцентируют внимание на преимуществах и подталкивают к покупке.",
    },
    {
      icon: <Search className="h-8 w-8 text-primary" />,
      title: "SEO-тексты",
      description: "Оптимизированные тексты, привлекающие органический трафик и ранжирующиеся в топ поисковой выдачи.",
    },
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Сторителлинг",
      description: "Захватывающие истории, которые создают эмоциональную связь между брендом и аудиторией.",
    },
  ];

  return (
    <section className="py-20 bg-white" id="services">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Мои услуги</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Я предлагаю полный спектр услуг копирайтинга для решения различных бизнес-задач
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-accent/20 rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:translate-y-[-5px]"
            >
              <div className="bg-white p-3 rounded-lg inline-block mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
