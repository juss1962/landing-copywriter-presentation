
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Portfolio = () => {
  const portfolioItems = [
    {
      category: "landing",
      title: "Лендинг для IT-компании",
      description: "Текст для главной страницы, увеличивший конверсию на 43%",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2015&q=80"
    },
    {
      category: "email",
      title: "Серия email-рассылок",
      description: "Цикл писем, повысивший открываемость до 32%",
      image: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2006&q=80"
    },
    {
      category: "social",
      title: "Контент-план для Instagram",
      description: "Стратегия, увеличившая вовлеченность на 65%",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
    },
  ];

  return (
    <section className="py-16 md:py-24 px-4 bg-[#F6F6F7]" id="portfolio">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-4">Мои работы</h2>
          <p className="text-lg text-[#555] max-w-2xl mx-auto">
            Примеры текстов, которые помогли клиентам достичь своих бизнес-целей.
          </p>
        </div>

        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-12">
            <TabsList className="bg-[#E5DEFF]">
              <TabsTrigger value="all" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                Все работы
              </TabsTrigger>
              <TabsTrigger value="landing" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                Лендинги
              </TabsTrigger>
              <TabsTrigger value="email" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                Email-маркетинг
              </TabsTrigger>
              <TabsTrigger value="social" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                Соцсети
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="all" className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <PortfolioCard key={index} item={item} />
              ))}
            </div>
          </TabsContent>
          
          {["landing", "email", "social"].map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {portfolioItems
                  .filter((item) => item.category === category)
                  .map((item, index) => (
                    <PortfolioCard key={index} item={item} />
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="text-center mt-12">
          <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#E5DEFF]">
            Смотреть больше работ
          </Button>
        </div>
      </div>
    </section>
  );
};

interface PortfolioCardProps {
  item: {
    title: string;
    description: string;
    image: string;
    category: string;
  };
}

const PortfolioCard = ({ item }: PortfolioCardProps) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover-scale">
      <div className="h-48 overflow-hidden">
        <img 
          src={item.image} 
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" 
        />
      </div>
      <div className="p-6">
        <span className="inline-block px-3 py-1 bg-[#E5DEFF] text-[#9b87f5] text-xs font-medium rounded-full mb-3">
          {item.category === "landing" ? "Лендинг" : 
           item.category === "email" ? "Email-маркетинг" : "Соцсети"}
        </span>
        <h3 className="text-xl font-semibold text-[#333] mb-2">{item.title}</h3>
        <p className="text-[#555] mb-4">{item.description}</p>
        <Button variant="link" className="text-[#9b87f5] p-0 h-auto font-medium">
          Подробнее
        </Button>
      </div>
    </div>
  );
};
