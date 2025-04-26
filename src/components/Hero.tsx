
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative py-20 md:py-28 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#333] mb-6 leading-tight">
              Слова, которые <span className="text-[#9b87f5]">продают</span> и <span className="text-[#9b87f5]">вдохновляют</span>
            </h1>
            <p className="text-lg md:text-xl text-[#555] mb-8 max-w-lg">
              Профессиональный копирайтинг, который превращает читателей в клиентов
              и повышает вашу конверсию.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white px-8 py-6 rounded-md font-medium text-lg">
                Заказать текст
              </Button>
              <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#E5DEFF] px-8 py-6 rounded-md font-medium text-lg">
                Портфолио
              </Button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80"
                alt="Копирайтер за работой" 
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 w-full h-full bg-[#E5DEFF] rounded-lg -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
