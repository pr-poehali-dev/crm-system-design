import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { getPriorityBadge } from './helpers';

interface TasksSectionProps {
  tasks: Array<{
    id: number;
    title: string;
    priority: string;
    due: string;
    assignee: string;
    status: string;
  }>;
}

const TasksSection = ({ tasks }: TasksSectionProps) => {
  return (
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
  );
};

export default TasksSection;
