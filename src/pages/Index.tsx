import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const equipment = [
    {
      id: 1,
      name: 'Станок токарный ТС-300',
      category: 'metalworking',
      description: 'Высокоточный токарный станок для обработки металлических деталей',
      specs: 'Мощность 15 кВт, диаметр обработки до 300мм',
      price: 'По запросу',
      image: 'https://cdn.poehali.dev/projects/1a22f18f-4746-4b7f-bf4e-0a7238686a18/files/a491d91a-0f70-440b-8ab9-278a6f3467ea.jpg'
    },
    {
      id: 2,
      name: 'Фрезерный центр ФЦ-500',
      category: 'metalworking',
      description: 'CNC фрезерный центр с ЧПУ для сложной обработки',
      specs: 'Рабочее поле 500x500x400мм, точность ±0.01мм',
      price: 'По запросу',
      image: 'https://cdn.poehali.dev/projects/1a22f18f-4746-4b7f-bf4e-0a7238686a18/files/a491d91a-0f70-440b-8ab9-278a6f3467ea.jpg'
    },
    {
      id: 3,
      name: 'Сварочный комплекс СК-200',
      category: 'welding',
      description: 'Автоматизированный комплекс для сварки металлоконструкций',
      specs: 'Ток 200А, поддержка MIG/MAG/TIG',
      price: 'По запросу',
      image: 'https://cdn.poehali.dev/projects/1a22f18f-4746-4b7f-bf4e-0a7238686a18/files/a491d91a-0f70-440b-8ab9-278a6f3467ea.jpg'
    },
    {
      id: 4,
      name: 'Гидравлический пресс ГП-100',
      category: 'pressing',
      description: 'Промышленный гидравлический пресс большой мощности',
      specs: 'Усилие 100 тонн, ход 400мм',
      price: 'По запросу',
      image: 'https://cdn.poehali.dev/projects/1a22f18f-4746-4b7f-bf4e-0a7238686a18/files/a491d91a-0f70-440b-8ab9-278a6f3467ea.jpg'
    },
    {
      id: 5,
      name: 'Плазменный резак ПР-80',
      category: 'cutting',
      description: 'Плазменная резка металла с ЧПУ управлением',
      specs: 'Толщина реза до 80мм, скорость до 8м/мин',
      price: 'По запросу',
      image: 'https://cdn.poehali.dev/projects/1a22f18f-4746-4b7f-bf4e-0a7238686a18/files/a491d91a-0f70-440b-8ab9-278a6f3467ea.jpg'
    },
    {
      id: 6,
      name: 'Координатно-расточной станок КР-400',
      category: 'metalworking',
      description: 'Прецизионная обработка отверстий и координатное фрезерование',
      specs: 'Точность позиционирования ±0.005мм',
      price: 'По запросу',
      image: 'https://cdn.poehali.dev/projects/1a22f18f-4746-4b7f-bf4e-0a7238686a18/files/a491d91a-0f70-440b-8ab9-278a6f3467ea.jpg'
    }
  ];

  const categories = [
    { id: 'all', name: 'Все оборудование', icon: 'Grid3x3' },
    { id: 'metalworking', name: 'Металлообработка', icon: 'Wrench' },
    { id: 'welding', name: 'Сварочное', icon: 'Zap' },
    { id: 'pressing', name: 'Прессовое', icon: 'Move' },
    { id: 'cutting', name: 'Резка', icon: 'Scissors' }
  ];

  const services = [
    {
      icon: 'Settings',
      title: 'Проектирование',
      description: 'Разработка технической документации и 3D-моделирование'
    },
    {
      icon: 'Factory',
      title: 'Производство',
      description: 'Изготовление металлоконструкций и оборудования'
    },
    {
      icon: 'Wrench',
      title: 'Монтаж',
      description: 'Установка и пусконаладочные работы на объекте'
    },
    {
      icon: 'Shield',
      title: 'Сервис',
      description: 'Техническое обслуживание и гарантийная поддержка'
    }
  ];

  const projects = [
    {
      title: 'Модернизация цеха металлообработки',
      client: 'ПАО "Промышленник"',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/1a22f18f-4746-4b7f-bf4e-0a7238686a18/files/22bb35ad-24e2-4d85-a9f2-dee1bb6ef6f0.jpg'
    },
    {
      title: 'Поставка сварочного комплекса',
      client: 'ООО "МеталлСтрой"',
      year: '2024',
      image: 'https://cdn.poehali.dev/projects/1a22f18f-4746-4b7f-bf4e-0a7238686a18/files/22bb35ad-24e2-4d85-a9f2-dee1bb6ef6f0.jpg'
    },
    {
      title: 'Автоматизация производства',
      client: 'ЗАО "ТехноПром"',
      year: '2023',
      image: 'https://cdn.poehali.dev/projects/1a22f18f-4746-4b7f-bf4e-0a7238686a18/files/22bb35ad-24e2-4d85-a9f2-dee1bb6ef6f0.jpg'
    }
  ];

  const filteredEquipment = selectedCategory === 'all' 
    ? equipment 
    : equipment.filter(item => item.category === selectedCategory);

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="fixed top-0 left-0 right-0 z-50 metal-texture border-b border-border backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary flex items-center justify-center tech-border">
                <Icon name="Factory" className="text-primary-foreground" size={24} />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">АПК-ИНЖИНИРИНГ</h1>
                <p className="text-xs text-muted-foreground">Промышленные решения</p>
              </div>
            </div>
            <div className="hidden md:flex gap-6">
              {['home', 'about', 'services', 'catalog', 'projects', 'production', 'contacts'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wide transition-colors ${
                    activeSection === section ? 'text-primary' : 'text-foreground hover:text-primary'
                  }`}
                >
                  {section === 'home' ? 'Главная' :
                   section === 'about' ? 'О компании' :
                   section === 'services' ? 'Услуги' :
                   section === 'catalog' ? 'Каталог' :
                   section === 'projects' ? 'Проекты' :
                   section === 'production' ? 'Производство' :
                   'Контакты'}
                </button>
              ))}
            </div>
            <Button size="sm" className="hidden md:flex">
              <Icon name="Phone" size={16} className="mr-2" />
              Связаться
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="pt-24 pb-16 metal-texture relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://cdn.poehali.dev/projects/1a22f18f-4746-4b7f-bf4e-0a7238686a18/files/e54ae9ee-ddfa-4cdf-8628-aec249ff666f.jpg" 
            alt="Background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <Badge className="mb-6 bg-primary/20 text-primary border-primary">
              <Icon name="Award" size={14} className="mr-1" />
              Лидер промышленных технологий
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
              ИНЖИНИРИНГ
              <span className="block text-primary">БУДУЩЕГО</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Комплексные решения для промышленных предприятий. Проектирование, производство и внедрение 
              высокотехнологичного оборудования.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="group">
                Каталог оборудования
                <Icon name="ArrowRight" size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="FileText" size={18} className="mr-2" />
                Наши проекты
              </Button>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {[
              { icon: 'Timer', value: '15+', label: 'Лет на рынке' },
              { icon: 'CheckCircle', value: '200+', label: 'Реализованных проектов' },
              { icon: 'Users', value: '50+', label: 'Специалистов' }
            ].map((stat, idx) => (
              <Card key={idx} className="tech-border bg-card/80 backdrop-blur-sm">
                <CardContent className="pt-6 text-center">
                  <Icon name={stat.icon} className="mx-auto mb-3 text-primary" size={32} />
                  <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-wide">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">О компании</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              АПК-ИНЖИНИРИНГ — ведущая компания в области промышленного инжиниринга с опытом работы более 15 лет.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="tech-border">
                <CardHeader>
                  <Icon name="Target" className="mb-2 text-primary" size={32} />
                  <CardTitle>Наша миссия</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Обеспечение промышленных предприятий современным высокотехнологичным оборудованием 
                    и комплексными инженерными решениями для повышения производительности.
                  </p>
                </CardContent>
              </Card>
              <Card className="tech-border">
                <CardHeader>
                  <Icon name="Lightbulb" className="mb-2 text-secondary" size={32} />
                  <CardTitle>Наши ценности</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Качество, надёжность, инновации и индивидуальный подход к каждому клиенту. 
                    Мы стремимся превосходить ожидания заказчиков.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="py-16 metal-texture">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Услуги</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="tech-border hover:border-primary transition-all duration-300 group cursor-pointer bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-16 h-16 bg-primary/10 rounded flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon name={service.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="catalog" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Каталог оборудования</h2>
          
          <div className="mb-8 flex flex-wrap gap-3 justify-center">
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={selectedCategory === cat.id ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(cat.id)}
                className="gap-2"
              >
                <Icon name={cat.icon} size={16} />
                {cat.name}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredEquipment.map((item) => (
              <Card key={item.id} className="tech-border overflow-hidden group hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden bg-muted">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="text-sm text-muted-foreground">
                      <Icon name="Info" size={14} className="inline mr-1" />
                      {item.specs}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-primary">{item.price}</span>
                      <Button size="sm" variant="outline">
                        Подробнее
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="py-16 metal-texture">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Реализованные проекты</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project, idx) => (
              <Card key={idx} className="tech-border overflow-hidden group cursor-pointer bg-card/80 backdrop-blur-sm">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <Badge className="w-fit mb-2">{project.year}</Badge>
                  <CardTitle className="text-lg">{project.title}</CardTitle>
                  <CardDescription>
                    <Icon name="Building" size={14} className="inline mr-1" />
                    {project.client}
                  </CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="production" className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-center">Производство</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Собственные производственные мощности позволяют нам реализовывать проекты любой сложности
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {[
                  { icon: 'Factory', title: 'Производственная площадь 5000 м²' },
                  { icon: 'Cpu', title: 'Современное оборудование с ЧПУ' },
                  { icon: 'Users', title: 'Квалифицированный персонал' },
                  { icon: 'Shield', title: 'Система контроля качества' }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 tech-border rounded bg-background/50">
                    <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center flex-shrink-0">
                      <Icon name={item.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold">{item.title}</h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="aspect-square rounded overflow-hidden tech-border">
                <img 
                  src="https://cdn.poehali.dev/projects/1a22f18f-4746-4b7f-bf4e-0a7238686a18/files/22bb35ad-24e2-4d85-a9f2-dee1bb6ef6f0.jpg" 
                  alt="Производство"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 metal-texture">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center">Контакты</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="tech-border bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Свяжитесь с нами</CardTitle>
                  <CardDescription>Мы ответим на все ваши вопросы</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Icon name="Phone" className="text-primary" size={20} />
                    <div>
                      <div className="text-sm text-muted-foreground">Телефон</div>
                      <div className="font-semibold">+7 (495) 123-45-67</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Mail" className="text-primary" size={20} />
                    <div>
                      <div className="text-sm text-muted-foreground">Email</div>
                      <div className="font-semibold">info@apk-eng.ru</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="MapPin" className="text-primary" size={20} />
                    <div>
                      <div className="text-sm text-muted-foreground">Адрес</div>
                      <div className="font-semibold">г. Москва, ул. Промышленная, д. 1</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Icon name="Clock" className="text-primary" size={20} />
                    <div>
                      <div className="text-sm text-muted-foreground">Режим работы</div>
                      <div className="font-semibold">Пн-Пт: 9:00 - 18:00</div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="tech-border bg-card/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle>Отправить заявку</CardTitle>
                  <CardDescription>Заполните форму и мы свяжемся с вами</CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <div>
                      <Input placeholder="Ваше имя" />
                    </div>
                    <div>
                      <Input type="email" placeholder="Email" />
                    </div>
                    <div>
                      <Input type="tel" placeholder="Телефон" />
                    </div>
                    <div>
                      <Input placeholder="Тема обращения" />
                    </div>
                    <Button className="w-full">
                      <Icon name="Send" size={16} className="mr-2" />
                      Отправить заявку
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <footer className="metal-texture border-t border-border py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary flex items-center justify-center tech-border">
                <Icon name="Factory" className="text-primary-foreground" size={24} />
              </div>
              <div>
                <div className="font-bold">АПК-ИНЖИНИРИНГ</div>
                <div className="text-xs text-muted-foreground">© 2024 Все права защищены</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Button size="icon" variant="outline">
                <Icon name="Mail" size={18} />
              </Button>
              <Button size="icon" variant="outline">
                <Icon name="Phone" size={18} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
