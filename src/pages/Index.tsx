import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Спасибо! Мы свяжемся с вами в ближайшее время');
    setFormData({ name: '', email: '', phone: '' });
  };

  const modules = [
    {
      title: 'Модуль 1: Внутренняя трансформация юриста',
      topics: [
        'Осознание своей миссии и предназначения',
        'Работа с ограничивающими убеждениями',
        'Развитие уверенности и харизмы',
        'Техники позитивного мышления'
      ]
    },
    {
      title: 'Модуль 2: Энергетика успеха',
      topics: [
        'Управление эмоциями в сложных ситуациях',
        'Развитие интуиции для принятия решений',
        'Баланс работы и личной жизни',
        'Защита от выгорания и стресса'
      ]
    },
    {
      title: 'Модуль 3: Мастерство общения',
      topics: [
        'Искусство убеждения и аргументации',
        'Работа с возражениями клиентов',
        'Невербальная коммуникация в суде',
        'Эмпатия как инструмент влияния'
      ]
    },
    {
      title: 'Модуль 4: Финансовое изобилие',
      topics: [
        'Преодоление страха перед высокими гонорарами',
        'Позиционирование себя как эксперта',
        'Привлечение VIP-клиентов',
        'Денежное мышление юриста'
      ]
    },
    {
      title: 'Модуль 5: Практическая магия права',
      topics: [
        'Ритуалы подготовки к важным делам',
        'Техники визуализации победы',
        'Работа с намерением и верой в результат',
        'Создание личного бренда "Волшебника права"'
      ]
    }
  ];

  const tariffs = [
    {
      name: 'Базовый',
      price: '49 900',
      features: [
        'Доступ ко всем 5 модулям курса',
        'Видео-уроки в записи',
        'Рабочие тетради и чек-листы',
        'Доступ к закрытому чату учеников',
        'Сертификат о прохождении'
      ],
      highlighted: false
    },
    {
      name: 'Премиум',
      price: '89 900',
      features: [
        'Всё из тарифа "Базовый"',
        '3 групповых разбора с Ольгой Зиновьевной',
        'Дополнительные практические медитации',
        'Личный куратор на весь период обучения',
        'Доступ к библиотеке дополнительных материалов'
      ],
      highlighted: true
    },
    {
      name: 'Привилегия',
      price: '149 900',
      features: [
        'Всё из тарифа "Премиум"',
        '2 личные консультации с Ольгой Зиновьевной',
        'Персональный план трансформации',
        'Участие в VIP-клубе "Магистры Закона"',
        'Пожизненный доступ ко всем обновлениям'
      ],
      highlighted: false
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
              <Icon name="Sparkles" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Магия Закона
            </span>
          </div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-foreground/70 hover:text-primary transition-colors">О курсе</a>
            <a href="#program" className="text-foreground/70 hover:text-primary transition-colors">Программа</a>
            <a href="#pricing" className="text-foreground/70 hover:text-primary transition-colors">Тарифы</a>
          </div>
          <Button className="bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90">
            Записаться
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 -z-10"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(155,135,245,0.3),transparent_50%)] -z-10"></div>
        
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 bg-gradient-to-r from-primary to-secondary text-white border-0">
                50 лет опыта в юриспруденции
              </Badge>
              <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
                Превратите свою юридическую практику в{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  источник силы и изобилия
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Уникальная методика от Ольги Зиновьевны, которая объединяет право, психологию и духовность для трансформации вашей карьеры и жизни
              </p>

            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/a018854e-e653-499b-8601-9467e9120bda/files/2418c251-3c52-424e-b214-a4e960532508.jpg"
                alt="Магия закона"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Почему курс{' '}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                «Магия Закона»
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Это не просто курс по юриспруденции — это путь к целостной трансформации
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: 'Brain',
                title: 'Уникальная методика',
                description: 'Интеграция права, психологии и духовности от эксперта с 40-летним опытом'
              },
              {
                icon: 'TrendingUp',
                title: 'Реальные результаты',
                description: 'Рост дохода, уверенность в себе, победа над выгоранием и стрессом'
              },
              {
                icon: 'Users',
                title: 'Сообщество',
                description: 'Поддержка единомышленников и личное кураторство на всем пути'
              },
              {
                icon: 'Zap',
                title: 'Практические инструменты',
                description: 'Техники, которые можно применять сразу в работе с клиентами'
              },
              {
                icon: 'Heart',
                title: 'Личностный рост',
                description: 'Раскрытие потенциала, обретение гармонии и внутренней силы'
              },
              {
                icon: 'Award',
                title: 'Экспертность',
                description: 'Авторская методика "Волшебницы О3" — Ольги Зиновьевны'
              }
            ].map((item, index) => (
              <Card key={index} className="border-2 hover:border-primary/50 transition-all hover:shadow-lg group">
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <img 
                src="https://cdn.poehali.dev/projects/a018854e-e653-499b-8601-9467e9120bda/files/c89ccd07-3872-4f31-937a-5a43cd54b479.jpg"
                alt="Ольга Зиновьевна"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-4">
                Об авторе курса
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                <strong className="text-foreground">Ольга Зиновьевна</strong> — практикующий юрист с 50-летним стажем, трансформационный коуч и создатель уникальной методики "Магия Закона".
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                Пройдя путь от адвоката до "Волшебницы О3", она создала систему, которая помогает юристам не просто зарабатывать больше, но и обрести гармонию, уверенность и радость от профессии.
              </p>
              <div className="flex flex-wrap gap-3">
                <Badge variant="secondary" className="text-base py-2 px-4">50 лет практики</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">500+ учеников</Badge>
                <Badge variant="secondary" className="text-base py-2 px-4">Трансформационный коуч</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Программа курса
            </h2>
            <p className="text-xl text-muted-foreground">
              5 модулей трансформации вашей юридической практики
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {modules.map((module, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-2 rounded-xl px-6 bg-card hover:border-primary/50 transition-all"
              >
                <AccordionTrigger className="text-lg font-semibold hover:no-underline py-6">
                  <div className="flex items-center gap-4 text-left">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shrink-0">
                      {index + 1}
                    </div>
                    <span>{module.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="pt-2 pb-6">
                  <ul className="space-y-3 ml-14">
                    {module.topics.map((topic, topicIndex) => (
                      <li key={topicIndex} className="flex items-start gap-3">
                        <Icon name="CheckCircle2" size={20} className="text-primary shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{topic}</span>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Тарифы и стоимость
            </h2>
            <p className="text-xl text-muted-foreground">
              Выберите подходящий формат участия
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((tariff, index) => (
              <Card 
                key={index}
                className={`relative ${
                  tariff.highlighted 
                    ? 'border-4 border-primary shadow-2xl scale-105 bg-gradient-to-br from-primary/5 to-secondary/5' 
                    : 'border-2 hover:border-primary/30'
                } transition-all`}
              >
                {tariff.highlighted && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-primary to-secondary text-white border-0 text-sm py-1 px-4">
                      Популярный
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl mb-2">{tariff.name}</CardTitle>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                      {tariff.price}
                    </span>
                    <span className="text-2xl text-muted-foreground">₽</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">Или в рассрочку</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4 mb-8">
                    {tariff.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-3">
                        <Icon 
                          name="CheckCircle2" 
                          size={20} 
                          className={tariff.highlighted ? 'text-primary' : 'text-muted-foreground'}
                        />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full h-12 ${
                      tariff.highlighted
                        ? 'bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90'
                        : ''
                    }`}
                    variant={tariff.highlighted ? 'default' : 'outline'}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 -z-10"></div>
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Готовы начать{' '}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  трансформацию?
                </span>
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Оставьте заявку, и мы свяжемся с вами для консультации по выбору тарифа
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input 
                  placeholder="Ваше имя"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="h-12"
                />
                <Input 
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  required
                  className="h-12"
                />
                <Input 
                  type="tel"
                  placeholder="Телефон"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="h-12"
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 h-14 text-lg"
                >
                  <Icon name="Send" size={20} className="mr-2" />
                  Записаться на курс
                </Button>
              </form>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/a018854e-e653-499b-8601-9467e9120bda/files/77785823-9914-40fe-a4a9-a41b757ee315.jpg"
                alt="Трансформация"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 bg-foreground text-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
                  <Icon name="Sparkles" size={20} className="text-white" />
                </div>
                <span className="text-xl font-bold">Магия Закона</span>
              </div>
              <p className="text-background/70">
                Трансформация юридической практики через интеграцию права, психологии и духовности
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-background/70">
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@magialaws.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (495) 123-45-67
                </p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Социальные сети</h4>
              <div className="flex gap-4">
                <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                  <Icon name="Youtube" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-background hover:text-primary">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/70">
            <p>© 2024 Магия Закона. Все права защищены</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;