export interface IStatisticsService {
  endpoint: 'admin/statistics';
  statistics$: number[];
  getStatistics: (from: string, to: string) => void;
}
