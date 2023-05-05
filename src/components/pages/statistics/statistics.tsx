import { FC } from 'react';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Title,
  Legend,
  ChartData,
  ChartOptions
} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { PageWrap } from '../../ui';
import { WORKOUT_TYPE_NAMES } from '../../../constants';
ChartJS.register(ArcElement, Tooltip, Legend, Title);
import { BACKGROUND_COLORS, BORDER_COLORS } from './statistic.constants';
import * as S from './statistics.styles';

export const Statistics: FC = () => {
  const data: ChartData<'pie'> = {
    labels: Object.values(WORKOUT_TYPE_NAMES),
    datasets: [
      {
        label: 'Количество проведенных тренировок',
        data: [12, 19, 3, 5, 2, 3, 0],
        backgroundColor: BACKGROUND_COLORS,
        borderColor: BORDER_COLORS,
        borderWidth: 1,
        hoverBorderWidth: 3
      }
    ]
  };

  const options: ChartOptions<'pie'> = {
    maintainAspectRatio: false,
    plugins: {
      title: {
        text: 'Количетство тренировок за неделю по типам',
        display: true,
        position: 'top',
        align: 'center',
        color: '#4242aa',
        font: {
          size: 32
        }
      },
      legend: {
        position: 'right',
        labels: {
          font: {
            size: 14
          }
        }
      }
    }
  };

  return (
    <PageWrap>
      <S.GraphWrap>
        <Pie data={data} options={options} />
      </S.GraphWrap>
    </PageWrap>
  );
};
