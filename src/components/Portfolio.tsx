
import { Button } from "@/components/ui/button";

export const Portfolio = () => {
  const projects = [
    {
      title: "Редизайн веб-сайта туристической компании",
      description: "Полное обновление контента сайта, включая главную страницу, разделы услуг и блог.",
      image: "https://images.unsplash.com/photo-1499363536502-87642509e31b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Веб-контент",
      result: "Рост конверсии на 34%"
    },
    {
      title: "Email-маркетинг для онлайн-школы",
      description: "Разработка серии писем для воронки продаж образовательных курсов.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Email-маркетинг",
      result: "Увеличение продаж на 28%"
    },
    {
      title: "Описание линейки премиальной косметики",
      description: "Создание продающих описаний для 50+ товаров новой коллекции бренда.",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
      category: "Продуктовые описания",
      result: "Запуск с полным аншлагом"
    }
  ];

  return (
    <section className="py-20 bg-accent/10" id="portfolio">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Мои работы</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Примеры успешных проектов, которые принесли клиентам измеримые результаты
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg overflow-hidden shadow-md hover-scale"
            >
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-primary/10 text-primary text-xs font-medium px-2.5 py-0.5 rounded">
                    {project.category}
                  </span>
                  <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {project.result}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Button variant="outline" size="sm" className="w-full">
                  Подробнее
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button variant="secondary" size="lg">
            Смотреть все проекты
          </Button>
        </div>
      </div>
    </section>
  );
};
