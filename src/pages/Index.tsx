import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Вы в списке ожидания! 🥊",
        description: "Мы отправили вам подтверждение на почту.",
      });
      setEmail("");
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <header className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-primary/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-3xl font-bold text-gradient">SAFESPAR VR</div>
          <Button 
            className="bg-primary hover:bg-primary/90 text-black font-bold animate-pulse-glow"
            onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Ранний доступ
          </Button>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-accent/20 animate-pulse"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/30 rounded-full blur-[100px] animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                БОКСИРУЙ В <span className="text-gradient glow-text">ПОЛНОЙ СИЛЕ</span>
              </h1>
              <h2 className="text-2xl lg:text-3xl text-muted-foreground font-light">
                Никаких синяков. Никакой головной боли.
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Первый VR-симулятор бокса с профессиональной физикой, где ты учишься бить и защищаться, 
                не рискуя получить травму головы.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-black font-bold text-lg px-8 py-6 glow-border animate-pulse-glow"
                  onClick={() => document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Icon name="Sparkles" className="mr-2" />
                  Получить ранний доступ
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                Начало бета-теста: <span className="text-primary font-bold">1 квартал 2026</span> • Места ограничены
              </p>
            </div>

            <div className="relative animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-cyber opacity-30 blur-3xl animate-pulse-glow"></div>
              <img 
                src="https://cdn.poehali.dev/projects/d7aab546-634c-4085-99fd-b98413fff870/files/9343e793-c12f-43df-adbb-099e01de9637.jpg"
                alt="VR Boxing Concept"
                className="relative rounded-2xl shadow-2xl border-2 border-primary/50 w-full"
              />
              <div className="absolute top-4 right-4 bg-black/80 backdrop-blur px-4 py-2 rounded-lg border border-primary/50">
                <p className="text-xs text-primary font-bold">CONCEPT GAMEPLAY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">ЗНАКОМЫЕ ПРОБЛЕМЫ?</h2>
            <p className="text-xl text-muted-foreground">Мы знаем, что тебя останавливает</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:scale-105 animate-fade-in">
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
                  <Icon name="ShieldAlert" size={32} className="text-primary" />
                </div>
                <h3 className="text-2xl font-bold">Страх травмы</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Хочешь боксировать, но не можешь прийти в офис с фингалом? 
                  Боишься последствий для мозга?
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border hover:border-secondary/50 transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Icon name="Zap" size={32} className="text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Скучный "бой с тенью"</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Бить воздух или мешок быстро надоедает. 
                  Тебе нужен умный соперник, чтобы расти.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border hover:border-accent/50 transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center">
                  <Icon name="Target" size={32} className="text-accent" />
                </div>
                <h3 className="text-2xl font-bold">Сложный старт</h3>
                <p className="text-muted-foreground leading-relaxed">
                  В секции новички часто начинают спарринг слишком рано. 
                  У нас ты учишься в своём темпе.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">
              ТЕХНОЛОГИЯ <span className="text-gradient glow-text">SAFESPAR™</span>
            </h2>
            <p className="text-xl text-muted-foreground">Твой личный спарринг-партнёр с защитой мозга</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-black/50 backdrop-blur border-primary/50 hover:border-primary transition-all animate-fade-in">
              <CardContent className="p-8 space-y-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                  <Icon name="Brain" size={40} className="text-black" />
                </div>
                <h3 className="text-3xl font-bold">Адаптивный AI</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Противник анализирует твои движения и реагирует как живой боксёр. 
                  Интеллектуальная физика адаптируется под твой уровень.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur border-secondary/50 hover:border-secondary transition-all animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 space-y-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                  <Icon name="Shield" size={40} className="text-black" />
                </div>
                <h3 className="text-3xl font-bold">100% защита мозга</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Чувство боя без физического урона. 
                  Визуальные и звуковые эффекты создают адреналин, но голова в безопасности.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/50 backdrop-blur border-accent/50 hover:border-accent transition-all animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 space-y-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center">
                  <Icon name="Activity" size={40} className="text-black" />
                </div>
                <h3 className="text-3xl font-bold">Фитнес-трекинг</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  Сжигай до 800 ккал/час. 
                  Мы считаем твои удары, уклоны и калории в реальном времени.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-black/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-5xl font-bold mb-4">ДЛЯ КОГО ЭТО?</h2>
            <p className="text-xl text-muted-foreground">Каждый найдёт свою причину выйти на ринг</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-primary/10 to-transparent border-primary/30 hover:border-primary/60 transition-all hover:scale-105 animate-fade-in">
              <CardContent className="p-8 space-y-4">
                <Icon name="Briefcase" size={48} className="text-primary" />
                <h3 className="text-2xl font-bold">Для офисных бойцов</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Разрядка после работы без риска для лица. 
                  Выпускай пар безопасно.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-secondary/10 to-transparent border-secondary/30 hover:border-secondary/60 transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8 space-y-4">
                <Icon name="Users" size={48} className="text-secondary" />
                <h3 className="text-2xl font-bold">Для родителей</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Дать ребёнку попробовать бокс, не переживая за травмы. 
                  Безопасное обучение.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-accent/10 to-transparent border-accent/30 hover:border-accent/60 transition-all hover:scale-105 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <CardContent className="p-8 space-y-4">
                <Icon name="Heart" size={48} className="text-accent" />
                <h3 className="text-2xl font-bold">Для девушек</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Идеальное кардио и навыки самообороны без жёсткого контакта. 
                  Сила без синяков.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="waitlist" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-cyber opacity-20 animate-pulse"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-8 animate-fade-in">
            <h2 className="text-6xl font-bold leading-tight">
              ГОТОВ ВЫЙТИ <br />НА <span className="text-gradient glow-text">РИНГ?</span>
            </h2>
            <p className="text-2xl text-muted-foreground">
              Мы запускаем закрытую бету для первых <span className="text-primary font-bold">500 пользователей</span>
            </p>

            <Card className="bg-black/80 backdrop-blur border-primary/50 p-8 animate-pulse-glow">
              <CardContent className="space-y-6">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input 
                    type="email"
                    placeholder="Введи свою почту"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="bg-black/50 border-primary/50 text-white placeholder:text-muted-foreground h-14 text-lg"
                  />
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-primary hover:bg-primary/90 text-black font-bold text-xl py-6"
                  >
                    <Icon name="Rocket" className="mr-2" />
                    Записаться в лист ожидания
                  </Button>
                </form>

                <div className="bg-secondary/10 border border-secondary/50 rounded-lg p-4">
                  <p className="text-secondary font-bold flex items-center justify-center gap-2">
                    <Icon name="Gift" size={20} />
                    Бонус: получи гайд "Основы защиты в боксе" сразу после регистрации
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-2xl font-bold text-gradient">SAFESPAR VR</div>
            <p className="text-muted-foreground">© 2025 SafeSpar. Революция в безопасном боксе.</p>
            <div className="flex gap-4">
              <Icon name="Twitter" className="text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Icon name="Instagram" className="text-muted-foreground hover:text-accent cursor-pointer transition-colors" />
              <Icon name="Youtube" className="text-muted-foreground hover:text-secondary cursor-pointer transition-colors" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
