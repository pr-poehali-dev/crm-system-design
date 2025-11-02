import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
import { getPriorityBadge, getStageName } from './helpers';

interface DashboardSectionProps {
  stats: Array<{ title: string; value: string; change: string; icon: string }>;
  tasks: Array<{ id: number; title: string; priority: string; assignee: string }>;
  deals: Array<{ id: number; title: string; client: string; amount: number; stage: string; probability: number }>;
}

const DashboardSection = ({ stats, tasks, deals }: DashboardSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h2 className="text-2xl md:text-3xl font-bold">Дашборд</h2>
        <Button size="sm" className="w-full sm:w-auto">
          <Icon name="Download" size={18} className="mr-2" />
          Экспорт отчета
        </Button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
        <CardContent className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="whitespace-nowrap">Название</TableHead>
                <TableHead className="whitespace-nowrap">Клиент</TableHead>
                <TableHead className="whitespace-nowrap">Сумма</TableHead>
                <TableHead className="whitespace-nowrap hidden md:table-cell">Этап</TableHead>
                <TableHead className="whitespace-nowrap hidden lg:table-cell">Вероятность</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {deals.slice(0, 3).map((deal) => (
                <TableRow key={deal.id}>
                  <TableCell className="font-medium">{deal.title}</TableCell>
                  <TableCell>{deal.client}</TableCell>
                  <TableCell className="whitespace-nowrap">₽{deal.amount.toLocaleString()}</TableCell>
                  <TableCell className="hidden md:table-cell">{getStageName(deal.stage)}</TableCell>
                  <TableCell className="hidden lg:table-cell">
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
  );
};

export default DashboardSection;