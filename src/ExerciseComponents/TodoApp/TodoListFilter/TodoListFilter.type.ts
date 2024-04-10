export type TodoFilterStatus = 'all' | 'active' | 'completed';

export function isTodoFilterStatus(filter: string): filter is TodoFilterStatus {
  return ['all', 'active', 'completed'].includes(filter);
}
