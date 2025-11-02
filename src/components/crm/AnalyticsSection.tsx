import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const AnalyticsSection = () => {
  return (
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
  );
};

export default AnalyticsSection;
