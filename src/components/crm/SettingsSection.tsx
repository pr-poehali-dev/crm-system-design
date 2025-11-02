import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const SettingsSection = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl md:text-3xl font-bold">Настройки</h2>

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
  );
};

export default SettingsSection;