
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-20 bg-accent/10" id="contact">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Давайте работать вместе</h2>
            <p className="text-lg text-gray-600 mb-8">
              Готовы обсудить ваш проект? Заполните форму, и я свяжусь с вами в течение 24 часов, чтобы обсудить детали и предложить оптимальное решение для вашего бизнеса.
            </p>
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Email</h4>
                  <p className="text-gray-600">contact@copywriter.com</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Телефон</h4>
                  <p className="text-gray-600">+7 (999) 123-45-67</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="bg-primary/10 p-3 rounded-full mr-4">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-medium">Локация</h4>
                  <p className="text-gray-600">Москва (доступен для удаленной работы)</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold mb-6">Отправить сообщение</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Имя
                  </label>
                  <Input id="name" placeholder="Введите ваше имя" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Введите ваш email" />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                  Тема
                </label>
                <Input id="subject" placeholder="Тема сообщения" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Сообщение
                </label>
                <Textarea id="message" placeholder="Опишите ваш проект" rows={5} />
              </div>
              <Button type="submit" className="w-full">
                Отправить сообщение
                <Send className="h-4 w-4 ml-2" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
