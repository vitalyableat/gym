import { action, makeObservable, observable } from 'mobx';
import { privateApi } from '../index';
import { IStatisticsService } from './statistics.types';

class StatisticsService implements IStatisticsService {
  endpoint = 'admin/statistics' as const;
  statistics$: number[] = [1, 1, 1, 1, 1, 1, 1];

  constructor() {
    makeObservable(this, {
      statistics$: observable,
      setStatistics: action
    });
  }

  setStatistics(statistics: number[]) {
    this.statistics$ = statistics;
  }

  async getStatistics(from: string, to: string) {
    const { data } = await privateApi.get(this.endpoint + '/' + from + '/' + to);
    this.setStatistics(data);
  }
}

export const statisticsService = new StatisticsService();
