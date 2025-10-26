import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
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

  const days = [
    {
      day: 1,
      title: 'Внутренняя сила юриста',
      description: 'Осознание миссии, работа с убеждениями, развитие уверенности'
    },
    {
      day: 2,
      title: 'Энергия и баланс',
      description: 'Управление эмоциями, защита от выгорания, развитие интуиции'
    },
    {
      day: 3,
      title: 'Мастерство общения',
      description: 'Искусство убеждения, работа с возражениями, эмпатия'
    },
    {
      day: 4,
      title: 'Финансовое изобилие',
      description: 'Позиционирование эксперта, привлечение VIP-клиентов'
    },
    {
      day: 5,
      title: 'Практическая магия',
      description: 'Техники визуализации, создание личного бренда'
    }
  ];

  const tariffs = [
    {
      name: 'Базовый',
      price: '49 900',
      features: [
        'Доступ ко всем 5 дням курса',
        'Видео-уроки в записи',
        'Рабочие тетради',
        'Сертификат'
      ]
    },
    {
      name: 'Премиум',
      price: '89 900',
      features: [
        'Всё из Базового',
        '3 групповых разбора',
        'Личный куратор',
        'Библиотека материалов'
      ],
      popular: true
    },
    {
      name: 'Привилегия',
      price: '149 900',
      features: [
        'Всё из Премиума',
        '2 личные консультации',
        'VIP-клуб "Магистры Закона"',
        'Пожизненный доступ'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center max-w-6xl">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <Icon name="Sparkles" size={20} className="text-white" />
            </div>
            <span className="text-xl font-bold">Магия Закона</span>
          </div>
          <div className="hidden md:flex gap-6">
            <a href="#program" className="hover:text-primary transition-colors">Программа</a>
            <a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a>
            <a href="#contact" className="hover:text-primary transition-colors">Контакты</a>
          </div>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Превратите право в{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              источник силы
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            50 лет опыта в юриспруденции • Авторская методика Ольги Зиновьевны
          </p>
        </div>
      </section>

      <section id="program" className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h2 className="text-4xl font-bold text-center mb-12">
            Программа курса — 5 дней
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {days.map((item) => (
              <Card key={item.day} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                    <span className="text-2xl font-bold text-primary">{item.day}</span>
                  </div>
                  <CardTitle className="text-xl mb-2">{item.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-4xl font-bold text-center mb-12">Тарифы</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {tariffs.map((tariff) => (
              <Card 
                key={tariff.name} 
                className={`relative ${tariff.popular ? 'border-primary border-2 shadow-xl' : ''}`}
              >
                {tariff.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Популярный
                    </span>
                  </div>
                )}
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl mb-2">{tariff.name}</CardTitle>
                  <div className="text-4xl font-bold text-primary mb-4">
                    {tariff.price} ₽
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tariff.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${tariff.popular ? 'bg-primary' : ''}`}
                    variant={tariff.popular ? 'default' : 'outline'}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Записаться на курс</h2>
            <p className="text-muted-foreground">Оставьте заявку, и мы свяжемся с вами</p>
          </div>
          <Card>
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-gradient-to-r from-primary to-secondary">
                  Отправить заявку
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="py-8 px-4 border-t bg-muted/30">
        <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
          <p>© 2024 Магия Закона. Все права защищены.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
