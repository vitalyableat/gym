import { FC } from 'react';
import { Button, Column, Grid, PageWrap, Row, Text } from '../../ui';
import { WORKOUT_TYPE_NAMES } from '../../../constants';
import { BiCheckDouble } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { RouteNames } from '../../templates/router/router.types';

export const About: FC = () => {
  const navigate = useNavigate();

  return (
    <PageWrap>
      <Column gap="30px">
        <Text type="title" center color="#4242aa" bold>
          О НАС
        </Text>
        <Text center>
          Ниже вы можете прочитать обо всех услугах, которые мы предлагаем в нашем фитнес-центре
        </Text>
        <Grid gap="50px" gridTemplateColumns="1fr 1fr">
          <Column gap="15px">
            <Text>В фитнес-центре проводятся следующие виды тренировок:</Text>
            {Object.values(WORKOUT_TYPE_NAMES).map((type) => (
              <Row key={type} gap="10px">
                <BiCheckDouble color="#4242aa" size={20} />
                <Text>{type}</Text>
              </Row>
            ))}
          </Column>
          <Column gap="15px">
            <Text>
              Для того, чтобы определить какая тренировка вам необходима исходя из ваших
              способностей и потребностей, читайте более подробное описание каждого из упомянутых
              видов обучения. А, если вы хотите присоединиться к нашей команде, то заполните форму
              ниже.
            </Text>
            <Button onClick={() => navigate(RouteNames.APPLY_FOR_A_JOB)}>Стать тренером</Button>
          </Column>
        </Grid>
      </Column>
    </PageWrap>
  );
};
