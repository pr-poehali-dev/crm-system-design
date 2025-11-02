import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
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
import { getStageName } from './helpers';

interface DealsSectionProps {
  deals: Array<{
    id: number;
    title: string;
    client: string;
    amount: number;
    stage: string;
    probability: number;
    manager: string;
  }>;
}

const DealsSection = ({ deals }: DealsSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h2 className="text-2xl md:text-3xl font-bold">Сделки</h2>
        <Button size="sm" className="w-full sm:w-auto">
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
            <CardContent className="p-0 overflow-x-auto">
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
  );
};

export default DealsSection;