import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import DashboardSection from '@/components/crm/DashboardSection';
import ClientsSection from '@/components/crm/ClientsSection';
import DealsSection from '@/components/crm/DealsSection';
import TasksSection from '@/components/crm/TasksSection';
import CalendarSection from '@/components/crm/CalendarSection';
import AnalyticsSection from '@/components/crm/AnalyticsSection';
import ReportsSection from '@/components/crm/ReportsSection';
import UsersSection from '@/components/crm/UsersSection';
import SettingsSection from '@/components/crm/SettingsSection';

const CRM = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const stats = [
    { title: 'Общая выручка', value: '₽2,450,000', change: '+12.5%', icon: 'TrendingUp' },
    { title: 'Активных клиентов', value: '142', change: '+8', icon: 'Users' },
    { title: 'Открытых сделок', value: '34', change: '+5', icon: 'FileText' },
    { title: 'Конверсия', value: '68%', change: '+3.2%', icon: 'Target' },
  ];

  const clients = [
    { id: 1, name: 'ООО "Альфа"', contact: 'Иванов И.И.', email: 'ivanov@alpha.ru', phone: '+7 (495) 123-45-67', status: 'active', deals: 5 },
    { id: 2, name: 'АО "Бета"', contact: 'Петров П.П.', email: 'petrov@beta.ru', phone: '+7 (495) 234-56-78', status: 'active', deals: 3 },
    { id: 3, name: 'ИП Сидоров', contact: 'Сидоров С.С.', email: 'sidorov@mail.ru', phone: '+7 (495) 345-67-89', status: 'inactive', deals: 1 },
    { id: 4, name: 'ООО "Гамма"', contact: 'Козлов К.К.', email: 'kozlov@gamma.ru', phone: '+7 (495) 456-78-90', status: 'active', deals: 8 },
  ];

  const deals = [
    { id: 1, title: 'Поставка оборудования', client: 'ООО "Альфа"', amount: 450000, stage: 'negotiation', probability: 75, manager: 'Смирнов А.В.' },
    { id: 2, title: 'Консалтинговые услуги', client: 'АО "Бета"', amount: 280000, stage: 'proposal', probability: 60, manager: 'Иванова М.С.' },
    { id: 3, title: 'Годовой контракт', client: 'ООО "Гамма"', amount: 1200000, stage: 'contract', probability: 90, manager: 'Петрова Е.Н.' },
    { id: 4, title: 'Разработка ПО', client: 'ООО "Альфа"', amount: 650000, stage: 'initial', probability: 40, manager: 'Смирнов А.В.' },
  ];

  const tasks = [
    { id: 1, title: 'Звонок клиенту ООО "Альфа"', priority: 'high', due: '2025-11-03', assignee: 'Смирнов А.В.', status: 'pending' },
    { id: 2, title: 'Подготовка коммерческого предложения', priority: 'high', due: '2025-11-03', assignee: 'Иванова М.С.', status: 'in-progress' },
    { id: 3, title: 'Отправка договора на подпись', priority: 'medium', due: '2025-11-05', assignee: 'Петрова Е.Н.', status: 'pending' },
    { id: 4, title: 'Встреча с АО "Бета"', priority: 'high', due: '2025-11-04', assignee: 'Иванова М.С.', status: 'pending' },
  ];

  const users = [
    { id: 1, name: 'Смирнов Алексей Викторович', role: 'Менеджер по продажам', email: 'smirnov@company.ru', status: 'active' },
    { id: 2, name: 'Иванова Мария Сергеевна', role: 'Менеджер по продажам', email: 'ivanova@company.ru', status: 'active' },
    { id: 3, name: 'Петрова Елена Николаевна', role: 'Старший менеджер', email: 'petrova@company.ru', status: 'active' },
    { id: 4, name: 'Козлов Дмитрий Петрович', role: 'Администратор', email: 'kozlov@company.ru', status: 'active' },
  ];

  const meetings = [
    { id: 1, title: 'Встреча с ООО "Альфа"', client: 'Иванов И.И.', date: '2025-11-03', time: '10:00', duration: '1 час', type: 'online', status: 'scheduled' },
    { id: 2, title: 'Презентация проекта', client: 'АО "Бета"', date: '2025-11-04', time: '14:00', duration: '2 часа', type: 'office', status: 'scheduled' },
    { id: 3, title: 'Подписание договора', client: 'ООО "Гамма"', date: '2025-11-05', time: '11:00', duration: '30 мин', type: 'office', status: 'confirmed' },
    { id: 4, title: 'Звонок клиенту', client: 'ИП Сидоров', date: '2025-11-03', time: '16:00', duration: '30 мин', type: 'phone', status: 'scheduled' },
    { id: 5, title: 'Демонстрация продукта', client: 'ООО "Дельта"', date: '2025-11-06', time: '15:00', duration: '1.5 часа', type: 'online', status: 'scheduled' },
  ];

  const reminders = [
    { id: 1, title: 'Звонок клиенту через 30 минут', time: '09:30', priority: 'high', type: 'call' },
    { id: 2, title: 'Отправить документы до конца дня', time: '18:00', priority: 'medium', type: 'task' },
    { id: 3, title: 'Встреча через 1 час', time: '10:00', priority: 'high', type: 'meeting' },
    { id: 4, title: 'Подготовить отчет к завтра', time: '12:00', priority: 'medium', type: 'task' },
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Дашборд', icon: 'LayoutDashboard' },
    { id: 'clients', label: 'Клиенты', icon: 'Users' },
    { id: 'deals', label: 'Сделки', icon: 'Briefcase' },
    { id: 'tasks', label: 'Задачи', icon: 'CheckSquare' },
    { id: 'calendar', label: 'Календарь', icon: 'Calendar' },
    { id: 'analytics', label: 'Аналитика', icon: 'BarChart3' },
    { id: 'reports', label: 'Отчеты', icon: 'FileText' },
    { id: 'users', label: 'Пользователи', icon: 'UserCog' },
    { id: 'settings', label: 'Настройки', icon: 'Settings' },
  ];

  const handleMenuItemClick = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
  };

  const MenuContent = () => (
    <>
      <div className="p-6 border-b border-sidebar-border">
        <h1 className="text-2xl font-bold flex items-center gap-2">
          <Icon name="Building2" size={28} />
          CRM System
        </h1>
      </div>
      <nav className="p-4 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleMenuItemClick(item.id)}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-colors ${
              activeSection === item.id
                ? 'bg-sidebar-accent text-sidebar-accent-foreground'
                : 'hover:bg-sidebar-accent/50'
            }`}
          >
            <Icon name={item.icon} size={20} />
            <span className="font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </>
  );

  return (
    <div className="flex h-screen bg-background">
      <aside className="hidden lg:block w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
        <MenuContent />
      </aside>

      <main className="flex-1 overflow-auto">
        <header className="bg-card border-b border-border p-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4 flex-1">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                  <Icon name="Menu" size={24} />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 p-0 bg-sidebar text-sidebar-foreground">
                <MenuContent />
              </SheetContent>
            </Sheet>
            
            <Input
              placeholder="Поиск..."
              className="w-full max-w-md"
              prefix={<Icon name="Search" size={18} />}
            />
          </div>
          <div className="flex items-center gap-2 md:gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="Bell" size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <Button variant="ghost" size="icon" className="hidden sm:flex">
              <Icon name="Settings" size={20} />
            </Button>
            <div className="hidden sm:flex items-center gap-2 pl-3 border-l">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                АС
              </div>
              <span className="text-sm font-medium hidden md:inline">Администратор</span>
            </div>
          </div>
        </header>

        <div className="p-4 md:p-6">
          {activeSection === 'dashboard' && <DashboardSection stats={stats} tasks={tasks} deals={deals} />}
          {activeSection === 'clients' && <ClientsSection clients={clients} />}
          {activeSection === 'deals' && <DealsSection deals={deals} />}
          {activeSection === 'tasks' && <TasksSection tasks={tasks} />}
          {activeSection === 'calendar' && <CalendarSection meetings={meetings} reminders={reminders} />}
          {activeSection === 'analytics' && <AnalyticsSection />}
          {activeSection === 'reports' && <ReportsSection />}
          {activeSection === 'users' && <UsersSection users={users} />}
          {activeSection === 'settings' && <SettingsSection />}
        </div>
      </main>
    </div>
  );
};

export default CRM;
