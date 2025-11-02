import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const ReportsSection = () => {
  return (
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
  );
};

export default ReportsSection;
