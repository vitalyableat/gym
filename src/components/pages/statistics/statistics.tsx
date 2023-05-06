import { FC, useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Title, Legend, ChartData } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { Column, Input, Loader, PageWrap, Row, Text } from '../../ui';
import { WORKOUT_TYPE_NAMES } from '../../../constants';
ChartJS.register(ArcElement, Tooltip, Legend, Title);
import { BACKGROUND_COLORS, BORDER_COLORS, OPTIONS } from './statistic.constants';
import * as S from './statistics.styles';
import { observer } from 'mobx-react-lite';
import { statisticsService } from '../../../services/statistics';
import { getDate } from '../../../utils';

export const Statistics: FC = observer(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [from, setFrom] = useState(getDate().slice(0, -2) + '01');
  const [to, setTo] = useState(getDate());

  useEffect(() => {
    setIsLoading(true);
    statisticsService.getStatistics(from, to).finally(() => setIsLoading(false));
  }, [to, from]);

  const data: ChartData<'pie'> = {
    labels: Object.values(WORKOUT_TYPE_NAMES),
    datasets: [
      {
        label: 'Количество проведенных тренировок',
        data: statisticsService.statistics$,
        backgroundColor: BACKGROUND_COLORS,
        borderColor: BORDER_COLORS,
        borderWidth: 1,
        hoverBorderWidth: 3
      }
    ]
  };

  return (
    <PageWrap>
      {isLoading && <Loader />}
      <Text type="title" center color="#4242aa" bold>
        Количество проведенных тренировок по типам
      </Text>
      <Row gap="20px" center>
        <Column gap="5px">
          <Text>От</Text>
          <Input type="date" value={from} onChange={(e) => setFrom(e.target.value)} max={to} />
        </Column>
        <Column gap="5px">
          <Text>До</Text>
          <Input type="date" value={to} onChange={(e) => setTo(e.target.value)} min={from} />
        </Column>
      </Row>
      <S.GraphWrap>
        <Pie data={data} options={OPTIONS} />
      </S.GraphWrap>
    </PageWrap>
  );
});
