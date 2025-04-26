
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-[#F6F6F7]" id="contact">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#333] mb-6">Давайте работать вместе</h2>
            <p className="text-lg text-[#555] mb-8">
              Готовы создать тексты, которые будут работать на ваш бизнес? Заполните форму или свяжитесь со мной напрямую.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start">
                <Mail className="w-5 h-5 text-[#9b87f5] mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-[#333]">Email</h3>
                  <p className="text-[#555]">contact@copywriter.ru</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="w-5 h-5 text-[#9b87f5] mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-[#333]">Телефон</h3>
                  <p className="text-[#555]">+7 (999) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="w-5 h-5 text-[#9b87f5] mt-1 mr-3" />
                <div>
                  <h3 className="font-medium text-[#333]">Адрес</h3>
                  <p className="text-[#555]">Москва, Россия</p>
                </div>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#E5DEFF] flex items-center justify-center text-[#9b87f5]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#E5DEFF] flex items-center justify-center text-[#9b87f5]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#E5DEFF] flex items-center justify-center text-[#9b87f5]">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
                </svg>
              </a>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-[#333] mb-6">Отправить сообщение</h3>
            <form>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[#555] mb-1">
                      Имя
                    </label>
                    <Input
                      id="name"
                      placeholder="Ваше имя"
                      className="border-[#ccc] focus:border-[#9b87f5] focus:ring-[#9b87f5]"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[#555] mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="email@example.com"
                      className="border-[#ccc] focus:border-[#9b87f5] focus:ring-[#9b87f5]"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[#555] mb-1">
                    Тема
                  </label>
                  <Input
                    id="subject"
                    placeholder="Тема сообщения"
                    className="border-[#ccc] focus:border-[#9b87f5] focus:ring-[#9b87f5]"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#555] mb-1">
                    Сообщение
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Ваше сообщение..."
                    className="border-[#ccc] focus:border-[#9b87f5] focus:ring-[#9b87f5] min-h-[120px]"
                  />
                </div>
                
                <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white py-6">
                  Отправить сообщение
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
