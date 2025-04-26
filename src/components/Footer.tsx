
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-[#1A1F2C] text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Профессиональный копирайтинг</h3>
            <p className="text-[#999] mb-6 max-w-md">
              Превращаю слова в инструмент развития вашего бизнеса.
              Создаю тексты, которые продают, информируют и вдохновляют.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Услуги</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-[#999] hover:text-white transition-colors">Продающие тексты</a></li>
              <li><a href="#" className="text-[#999] hover:text-white transition-colors">SEO-копирайтинг</a></li>
              <li><a href="#" className="text-[#999] hover:text-white transition-colors">Email-маркетинг</a></li>
              <li><a href="#" className="text-[#999] hover:text-white transition-colors">Контент для соцсетей</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-4">Контакты</h4>
            <ul className="space-y-2">
              <li className="text-[#999]">Email: contact@copywriter.ru</li>
              <li className="text-[#999]">Телефон: +7 (999) 123-45-67</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#333] mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#999] text-sm">© {currentYear} Копирайтер. Все права защищены.</p>
          <div className="mt-4 md:mt-0">
            <ul className="flex space-x-6">
              <li><a href="#" className="text-[#999] hover:text-white transition-colors">Политика конфиденциальности</a></li>
              <li><a href="#" className="text-[#999] hover:text-white transition-colors">Условия использования</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};
