import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CRM = () => {
  const [activeSection, setActiveSection] = useState('dashboard');

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

  const getStatusBadge = (status: string) => {
    const variants: Record<string, { variant: 'default' | 'secondary' | 'destructive' | 'outline', label: string }> = {
      active: { variant: 'default', label: 'Активен' },
      inactive: { variant: 'secondary', label: 'Неактивен' },
      pending: { variant: 'outline', label: 'Ожидает' },
      'in-progress': { variant: 'default', label: 'В работе' },
      completed: { variant: 'secondary', label: 'Завершено' },
    };
    const config = variants[status] || { variant: 'outline' as const, label: status };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getPriorityBadge = (priority: string) => {
    const variants: Record<string, { variant: 'default' | 'secondary' | 'destructive', label: string }> = {
      high: { variant: 'destructive', label: 'Высокий' },
      medium: { variant: 'default', label: 'Средний' },
      low: { variant: 'secondary', label: 'Низкий' },
    };
    const config = variants[priority] || { variant: 'secondary' as const, label: priority };
    return <Badge variant={config.variant}>{config.label}</Badge>;
  };

  const getStageName = (stage: string) => {
    const stages: Record<string, string> = {
      initial: 'Первичный контакт',
      proposal: 'Предложение',
      negotiation: 'Переговоры',
      contract: 'Договор',
      closed: 'Закрыта',
    };
    return stages[stage] || stage;
  };

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

  return (
    <div className="flex h-screen bg-background">
      <aside className="w-64 bg-sidebar text-sidebar-foreground border-r border-sidebar-border">
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
              onClick={() => setActiveSection(item.id)}
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
      </aside>

      <main className="flex-1 overflow-auto">
        <header className="bg-card border-b border-border p-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Input
              placeholder="Поиск..."
              className="w-80"
              prefix={<Icon name="Search" size={18} />}
            />
          </div>
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="relative">
              <Icon name="Bell" size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 bg-destructive rounded-full" />
            </Button>
            <Button variant="ghost" size="icon">
              <Icon name="Settings" size={20} />
            </Button>
            <div className="flex items-center gap-2 pl-3 border-l">
              <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-medium">
                АС
              </div>
              <span className="text-sm font-medium">Администратор</span>
            </div>
          </div>
        </header>

        <div className="p-6">
          {activeSection === 'dashboard' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Дашборд</h2>
                <Button>
                  <Icon name="Download" size={18} className="mr-2" />
                  Экспорт отчета
                </Button>
              </div>

              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat, idx) => (
                  <Card key={idx} className="hover:shadow-md transition-shadow">
                    <CardHeader className="pb-2">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-sm font-medium text-muted-foreground">
                          {stat.title}
                        </CardTitle>
                        <Icon name={stat.icon} size={20} className="text-primary" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="text-2xl font-bold">{stat.value}</div>
                      <p className="text-xs text-primary mt-1">{stat.change} за месяц</p>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Воронка продаж</CardTitle>
                    <CardDescription>Статус текущих сделок</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Первичный контакт</span>
                        <span className="text-sm text-muted-foreground">12 сделок</span>
                      </div>
                      <Progress value={85} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Предложение</span>
                        <span className="text-sm text-muted-foreground">8 сделок</span>
                      </div>
                      <Progress value={65} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Переговоры</span>
                        <span className="text-sm text-muted-foreground">6 сделок</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="text-sm font-medium">Договор</span>
                        <span className="text-sm text-muted-foreground">3 сделки</span>
                      </div>
                      <Progress value={25} className="h-2" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Активность команды</CardTitle>
                    <CardDescription>Задачи на сегодня</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {tasks.slice(0, 4).map((task) => (
                        <div key={task.id} className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
                          <div className="flex-1">
                            <p className="font-medium text-sm">{task.title}</p>
                            <p className="text-xs text-muted-foreground mt-1">{task.assignee}</p>
                          </div>
                          {getPriorityBadge(task.priority)}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Последние сделки</CardTitle>
                  <CardDescription>Обновлено только что</CardDescription>
                </CardHeader>
                <CardContent>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Название</TableHead>
                        <TableHead>Клиент</TableHead>
                        <TableHead>Сумма</TableHead>
                        <TableHead>Этап</TableHead>
                        <TableHead>Вероятность</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {deals.slice(0, 3).map((deal) => (
                        <TableRow key={deal.id}>
                          <TableCell className="font-medium">{deal.title}</TableCell>
                          <TableCell>{deal.client}</TableCell>
                          <TableCell>₽{deal.amount.toLocaleString()}</TableCell>
                          <TableCell>{getStageName(deal.stage)}</TableCell>
                          <TableCell>
                            <div className="flex items-center gap-2">
                              <Progress value={deal.probability} className="h-2 w-20" />
                              <span className="text-sm">{deal.probability}%</span>
                            </div>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'clients' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Клиенты</h2>
                <Button>
                  <Icon name="Plus" size={18} className="mr-2" />
                  Добавить клиента
                </Button>
              </div>

              <div className="flex gap-3">
                <Input placeholder="Поиск клиентов..." className="max-w-sm" />
                <Select defaultValue="all">
                  <SelectTrigger className="w-40">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Все</SelectItem>
                    <SelectItem value="active">Активные</SelectItem>
                    <SelectItem value="inactive">Неактивные</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Компания</TableHead>
                        <TableHead>Контактное лицо</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Телефон</TableHead>
                        <TableHead>Сделок</TableHead>
                        <TableHead>Статус</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {clients.map((client) => (
                        <TableRow key={client.id}>
                          <TableCell className="font-medium">{client.name}</TableCell>
                          <TableCell>{client.contact}</TableCell>
                          <TableCell>{client.email}</TableCell>
                          <TableCell>{client.phone}</TableCell>
                          <TableCell>{client.deals}</TableCell>
                          <TableCell>{getStatusBadge(client.status)}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <Icon name="MoreHorizontal" size={18} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'deals' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Сделки</h2>
                <Button>
                  <Icon name="Plus" size={18} className="mr-2" />
                  Создать сделку
                </Button>
              </div>

              <Tabs defaultValue="all" className="w-full">
                <TabsList>
                  <TabsTrigger value="all">Все сделки</TabsTrigger>
                  <TabsTrigger value="active">Активные</TabsTrigger>
                  <TabsTrigger value="closed">Закрытые</TabsTrigger>
                </TabsList>
                <TabsContent value="all" className="mt-6">
                  <Card>
                    <CardContent className="p-0">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Название</TableHead>
                            <TableHead>Клиент</TableHead>
                            <TableHead>Сумма</TableHead>
                            <TableHead>Этап</TableHead>
                            <TableHead>Вероятность</TableHead>
                            <TableHead>Менеджер</TableHead>
                            <TableHead></TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {deals.map((deal) => (
                            <TableRow key={deal.id}>
                              <TableCell className="font-medium">{deal.title}</TableCell>
                              <TableCell>{deal.client}</TableCell>
                              <TableCell className="font-semibold">₽{deal.amount.toLocaleString()}</TableCell>
                              <TableCell>{getStageName(deal.stage)}</TableCell>
                              <TableCell>
                                <div className="flex items-center gap-2">
                                  <Progress value={deal.probability} className="h-2 w-20" />
                                  <span className="text-sm">{deal.probability}%</span>
                                </div>
                              </TableCell>
                              <TableCell>{deal.manager}</TableCell>
                              <TableCell>
                                <Button variant="ghost" size="icon">
                                  <Icon name="MoreHorizontal" size={18} />
                                </Button>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}

          {activeSection === 'tasks' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Задачи</h2>
                <Button>
                  <Icon name="Plus" size={18} className="mr-2" />
                  Создать задачу
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Ожидают выполнения</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {tasks.filter(t => t.status === 'pending').map((task) => (
                      <div key={task.id} className="p-4 bg-muted/50 rounded-lg space-y-2">
                        <div className="flex items-start justify-between">
                          <h4 className="font-medium text-sm">{task.title}</h4>
                          {getPriorityBadge(task.priority)}
                        </div>
                        <p className="text-xs text-muted-foreground">{task.assignee}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Icon name="Calendar" size={14} />
                          {task.due}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">В работе</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    {tasks.filter(t => t.status === 'in-progress').map((task) => (
                      <div key={task.id} className="p-4 bg-muted/50 rounded-lg space-y-2">
                        <div className="flex items-start justify-between">
                          <h4 className="font-medium text-sm">{task.title}</h4>
                          {getPriorityBadge(task.priority)}
                        </div>
                        <p className="text-xs text-muted-foreground">{task.assignee}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Icon name="Calendar" size={14} />
                          {task.due}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-base">Завершено</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <p className="text-sm text-muted-foreground text-center py-8">
                      Нет завершенных задач
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          )}

          {activeSection === 'calendar' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Календарь встреч</h2>
                <div className="flex gap-2">
                  <Button variant="outline">
                    <Icon name="Download" size={18} className="mr-2" />
                    Экспорт
                  </Button>
                  <Button>
                    <Icon name="Plus" size={18} className="mr-2" />
                    Новая встреча
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="col-span-2 space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle>Ноябрь 2025</CardTitle>
                        <div className="flex gap-2">
                          <Button variant="outline" size="icon">
                            <Icon name="ChevronLeft" size={18} />
                          </Button>
                          <Button variant="outline" size="sm">Сегодня</Button>
                          <Button variant="outline" size="icon">
                            <Icon name="ChevronRight" size={18} />
                          </Button>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-7 gap-2">
                        {['ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ', 'ВС'].map((day) => (
                          <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                            {day}
                          </div>
                        ))}
                        
                        {Array.from({ length: 30 }, (_, i) => i + 1).map((day) => {
                          const hasMeeting = [3, 4, 5, 6].includes(day);
                          const isToday = day === 2;
                          const meetingCount = day === 3 ? 2 : day === 4 ? 1 : day === 5 ? 1 : day === 6 ? 1 : 0;
                          
                          return (
                            <button
                              key={day}
                              className={`
                                aspect-square p-2 rounded-lg text-sm transition-all relative
                                ${isToday ? 'bg-primary text-primary-foreground font-bold' : ''}
                                ${hasMeeting && !isToday ? 'bg-primary/10 font-medium' : ''}
                                ${!hasMeeting && !isToday ? 'hover:bg-muted' : ''}
                              `}
                            >
                              <div>{day}</div>
                              {hasMeeting && (
                                <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-0.5">
                                  {Array.from({ length: meetingCount }).map((_, idx) => (
                                    <div key={idx} className={`w-1 h-1 rounded-full ${isToday ? 'bg-primary-foreground' : 'bg-primary'}`} />
                                  ))}
                                </div>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Ближайшие встречи</CardTitle>
                      <CardDescription>На эту неделю</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {meetings.map((meeting) => (
                        <div key={meeting.id} className="p-4 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex-1">
                              <h4 className="font-medium">{meeting.title}</h4>
                              <p className="text-sm text-muted-foreground mt-1">{meeting.client}</p>
                            </div>
                            <Badge variant={meeting.status === 'confirmed' ? 'default' : 'outline'}>
                              {meeting.status === 'confirmed' ? 'Подтверждено' : 'Запланировано'}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <Icon name="Calendar" size={14} />
                              {meeting.date}
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              {meeting.time} ({meeting.duration})
                            </div>
                            <div className="flex items-center gap-1">
                              <Icon name={meeting.type === 'online' ? 'Video' : meeting.type === 'phone' ? 'Phone' : 'MapPin'} size={14} />
                              {meeting.type === 'online' ? 'Онлайн' : meeting.type === 'phone' ? 'Звонок' : 'Офис'}
                            </div>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-base">Напоминания</CardTitle>
                        <Button variant="ghost" size="icon">
                          <Icon name="Settings" size={16} />
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      {reminders.map((reminder) => (
                        <div key={reminder.id} className="p-3 bg-muted/50 rounded-lg space-y-2">
                          <div className="flex items-start justify-between gap-2">
                            <div className="flex-1">
                              <p className="text-sm font-medium">{reminder.title}</p>
                              <div className="flex items-center gap-1 mt-1 text-xs text-muted-foreground">
                                <Icon name="Clock" size={12} />
                                {reminder.time}
                              </div>
                            </div>
                            {getPriorityBadge(reminder.priority)}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-base">Статистика</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Встреч сегодня</span>
                          <span className="font-semibold">2</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">На этой неделе</span>
                          <span className="font-semibold">5</span>
                        </div>
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Всего в месяце</span>
                          <span className="font-semibold">18</span>
                        </div>
                      </div>
                      <div className="pt-3 border-t">
                        <p className="text-xs text-muted-foreground mb-2">Типы встреч</p>
                        <div className="space-y-2">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-muted rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '45%' }} />
                            </div>
                            <span className="text-xs whitespace-nowrap">Офис 45%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-muted rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '35%' }} />
                            </div>
                            <span className="text-xs whitespace-nowrap">Онлайн 35%</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-muted rounded-full h-2">
                              <div className="bg-primary h-2 rounded-full" style={{ width: '20%' }} />
                            </div>
                            <span className="text-xs whitespace-nowrap">Звонки 20%</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}

          {activeSection === 'analytics' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Аналитика</h2>
              
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Динамика продаж</CardTitle>
                    <CardDescription>Последние 6 месяцев</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="h-64 flex items-end justify-around gap-2">
                      {[65, 72, 58, 85, 78, 92].map((height, idx) => (
                        <div key={idx} className="flex-1 flex flex-col items-center gap-2">
                          <div
                            className="w-full bg-primary rounded-t transition-all hover:opacity-80"
                            style={{ height: `${height}%` }}
                          />
                          <span className="text-xs text-muted-foreground">
                            {['Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя'][idx]}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Конверсия по этапам</CardTitle>
                    <CardDescription>Средние показатели</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Контакт → Предложение</span>
                        <span className="font-semibold">72%</span>
                      </div>
                      <Progress value={72} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Предложение → Переговоры</span>
                        <span className="font-semibold">58%</span>
                      </div>
                      <Progress value={58} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Переговоры → Договор</span>
                        <span className="font-semibold">65%</span>
                      </div>
                      <Progress value={65} />
                    </div>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Договор → Закрыта</span>
                        <span className="font-semibold">85%</span>
                      </div>
                      <Progress value={85} />
                    </div>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Топ менеджеров по продажам</CardTitle>
                  <CardDescription>За текущий месяц</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      { name: 'Петрова Е.Н.', deals: 8, amount: 1850000 },
                      { name: 'Смирнов А.В.', deals: 6, amount: 1320000 },
                      { name: 'Иванова М.С.', deals: 5, amount: 980000 },
                    ].map((manager, idx) => (
                      <div key={idx} className="flex items-center gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm">
                          {idx + 1}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium">{manager.name}</p>
                          <p className="text-sm text-muted-foreground">
                            {manager.deals} сделок · ₽{manager.amount.toLocaleString()}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'reports' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Отчеты</h2>
                <Button>
                  <Icon name="Plus" size={18} className="mr-2" />
                  Создать отчет
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {[
                  { title: 'Отчет по продажам', date: '01.11.2025', icon: 'TrendingUp' },
                  { title: 'Активность клиентов', date: '28.10.2025', icon: 'Users' },
                  { title: 'Эффективность менеджеров', date: '25.10.2025', icon: 'Award' },
                  { title: 'Воронка продаж', date: '20.10.2025', icon: 'Filter' },
                  { title: 'Финансовый отчет', date: '15.10.2025', icon: 'DollarSign' },
                  { title: 'Анализ конверсии', date: '10.10.2025', icon: 'Target' },
                ].map((report, idx) => (
                  <Card key={idx} className="hover:shadow-md transition-shadow cursor-pointer">
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon name={report.icon} size={20} className="text-primary" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-base">{report.title}</CardTitle>
                          <CardDescription className="text-xs">{report.date}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Button variant="outline" size="sm" className="w-full">
                        <Icon name="Download" size={16} className="mr-2" />
                        Скачать PDF
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {activeSection === 'users' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold">Пользователи</h2>
                <Button>
                  <Icon name="UserPlus" size={18} className="mr-2" />
                  Добавить пользователя
                </Button>
              </div>

              <Card>
                <CardContent className="p-0">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>ФИО</TableHead>
                        <TableHead>Должность</TableHead>
                        <TableHead>Email</TableHead>
                        <TableHead>Статус</TableHead>
                        <TableHead></TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {users.map((user) => (
                        <TableRow key={user.id}>
                          <TableCell className="font-medium">{user.name}</TableCell>
                          <TableCell>{user.role}</TableCell>
                          <TableCell>{user.email}</TableCell>
                          <TableCell>{getStatusBadge(user.status)}</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon">
                              <Icon name="MoreHorizontal" size={18} />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </Card>
            </div>
          )}

          {activeSection === 'settings' && (
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Настройки</h2>

              <Tabs defaultValue="general" className="w-full">
                <TabsList>
                  <TabsTrigger value="general">Общие</TabsTrigger>
                  <TabsTrigger value="notifications">Уведомления</TabsTrigger>
                  <TabsTrigger value="integrations">Интеграции</TabsTrigger>
                  <TabsTrigger value="security">Безопасность</TabsTrigger>
                </TabsList>

                <TabsContent value="general" className="mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Общие настройки</CardTitle>
                      <CardDescription>Управление основными параметрами системы</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Название компании</label>
                        <Input placeholder="Название компании" defaultValue="ООО 'Компания'" />
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Часовой пояс</label>
                        <Select defaultValue="msk">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="msk">Москва (UTC+3)</SelectItem>
                            <SelectItem value="spb">Санкт-Петербург (UTC+3)</SelectItem>
                            <SelectItem value="nsk">Новосибирск (UTC+7)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <label className="text-sm font-medium">Валюта</label>
                        <Select defaultValue="rub">
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="rub">Российский рубль (₽)</SelectItem>
                            <SelectItem value="usd">Доллар США ($)</SelectItem>
                            <SelectItem value="eur">Евро (€)</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <Button className="mt-4">Сохранить изменения</Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default CRM;