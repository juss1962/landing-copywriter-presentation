
import { Instagram, Twitter, Facebook, Linkedin, Mail, Phone, MessageSquare } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Копирайтер Про</h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Создаю эффективные тексты, которые помогают брендам выделяться, привлекать аудиторию и увеличивать продажи.
            </p>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-primary" />
                <a href="mailto:juss1962@gmail.com" className="text-gray-300 hover:text-primary transition-colors">juss1962@gmail.com</a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-primary" />
                <a href="tel:+79809704052" className="text-gray-300 hover:text-primary transition-colors">+7 (980) 970-40-52</a>
              </div>
              <div className="flex items-center">
                <MessageSquare className="h-4 w-4 mr-2 text-primary" />
                <a href="https://t.me/juss1962" className="text-gray-300 hover:text-primary transition-colors">@juss1962</a>
              </div>
            </div>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Ссылки</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Главная</a></li>
              <li><a href="#services" className="text-gray-300 hover:text-primary transition-colors">Услуги</a></li>
              <li><a href="#portfolio" className="text-gray-300 hover:text-primary transition-colors">Портфолио</a></li>
              <li><a href="#testimonials" className="text-gray-300 hover:text-primary transition-colors">Отзывы</a></li>
              <li><a href="#contact" className="text-gray-300 hover:text-primary transition-colors">Контакты</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Услуги</h4>
            <ul className="space-y-2">
<<<<<<< HEAD
              <li className="text-[#999]">Email: juss1962@gmail.com</li>
              <li className="text-[#999]">Телефон: +7 (980) 970-40-52</li>
=======
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Веб-копирайтинг</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Продающие тексты</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">SEO-тексты</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Email-маркетинг</a></li>
              <li><a href="#" className="text-gray-300 hover:text-primary transition-colors">Сторителлинг</a></li>
>>>>>>> e3ddcb77e90e9cfe7fb130dc29010b6a14cc71a4
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Копирайтер Про. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};
