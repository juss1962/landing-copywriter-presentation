
import { CheckCircle } from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: "✍️",
      title: "Продающие тексты",
      description: "Убедительные коммерческие предложения, которые побуждают к действию и конвертируют посетителей в клиентов."
    },
    {
      icon: "📱",
      title: "Контент для соцсетей",
      description: "Интересные и вовлекающие тексты для ваших социальных платформ, привлекающие новую аудиторию."
    },
    {
      icon: "🔍",
      title: "SEO-копирайтинг",
      description: "Оптимизированные для поисковых систем тексты, повышающие органический трафик на ваш сайт."
    }
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-white" id="services">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">Мои услуги</h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto">
            Создаю тексты, которые помогают бизнесу расти, увеличивать узнаваемость бренда и привлекать целевую аудиторию.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#F1F0FB] p-8 rounded-lg transition-all duration-300 hover:shadow-lg hover:translate-y-[-5px]"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-[#333] mb-3">{service.title}</h3>
              <p className="text-[#555]">{service.description}</p>
              <div className="mt-6 space-y-2">
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5] mr-2" />
                  <span className="text-sm text-[#555]">Уникальность 100%</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5] mr-2" />
                  <span className="text-sm text-[#555]">Безлимитные правки</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 text-[#9b87f5] mr-2" />
                  <span className="text-sm text-[#555]">Быстрое выполнение</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
