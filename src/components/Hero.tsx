
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="w-full py-20 md:py-32 relative overflow-hidden">
      <div className="absolute -z-10 top-0 left-0 w-full h-full bg-gradient-to-r from-accent to-white opacity-40"></div>
      <div className="container px-4 md:px-6 mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col gap-4 max-w-[600px] text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
            Слова, которые <span className="text-primary">продают</span> и <span className="text-primary">вдохновляют</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-[500px]">
            Профессиональный копирайтинг, который превращает посетителей в клиентов и создает незабываемое впечатление о вашем бренде.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
            <Button size="lg" className="hover-scale">
              Обсудить проект
              <ArrowRight />
            </Button>
            <Button variant="outline" size="lg" className="hover-scale">
              Посмотреть портфолио
            </Button>
          </div>
        </div>
        <div className="rounded-lg overflow-hidden w-full max-w-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?q=80&w=3024&auto=format&fit=crop" 
            alt="Копирайтинг в действии" 
            className="w-full h-auto object-cover rounded-lg shadow-lg hover-scale" 
          />
        </div>
      </div>
    </section>
  );
};
