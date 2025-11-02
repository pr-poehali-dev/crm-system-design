import { Badge } from '@/components/ui/badge';

export const getStatusBadge = (status: string) => {
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

export const getPriorityBadge = (priority: string) => {
  const variants: Record<string, { variant: 'default' | 'secondary' | 'destructive', label: string }> = {
    high: { variant: 'destructive', label: 'Высокий' },
    medium: { variant: 'default', label: 'Средний' },
    low: { variant: 'secondary', label: 'Низкий' },
  };
  const config = variants[priority] || { variant: 'secondary' as const, label: priority };
  return <Badge variant={config.variant}>{config.label}</Badge>;
};

export const getStageName = (stage: string) => {
  const stages: Record<string, string> = {
    initial: 'Первичный контакт',
    proposal: 'Предложение',
    negotiation: 'Переговоры',
    contract: 'Договор',
    closed: 'Закрыта',
  };
  return stages[stage] || stage;
};
