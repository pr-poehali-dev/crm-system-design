import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { getPriorityBadge } from './helpers';

interface CalendarSectionProps {
  meetings: Array<{
    id: number;
    title: string;
    client: string;
    date: string;
    time: string;
    duration: string;
    type: string;
    status: string;
  }>;
  reminders: Array<{
    id: number;
    title: string;
    time: string;
    priority: string;
    type: string;
  }>;
}

const CalendarSection = ({ meetings, reminders }: CalendarSectionProps) => {
  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <h2 className="text-2xl md:text-3xl font-bold">Календарь встреч</h2>
        <div className="flex gap-2 w-full sm:w-auto">
          <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
            <Icon name="Download" size={18} className="sm:mr-2" />
            <span className="hidden sm:inline">Экспорт</span>
          </Button>
          <Button size="sm" className="flex-1 sm:flex-none">
            <Icon name="Plus" size={18} className="sm:mr-2" />
            <span className="hidden sm:inline">Новая встреча</span>
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
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
  );
};

export default CalendarSection;