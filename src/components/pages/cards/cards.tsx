import { FC, useEffect, useState } from 'react';
import { Button, Loader, PageWrap, Slider, Text } from '../../ui';
import { cardService } from '../../../services/card';
import { Card } from '../../entities/card';
import { cardToCardFormDataAdapter } from '../../forms/card-form/adapters';
import { CardForm } from '../../forms/card-form';
import { ICard } from '../../../interfaces';
import { observer } from 'mobx-react-lite';

export const Cards: FC = observer(() => {
  const [selectedCard, setSelectedCard] = useState<ICard | undefined>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    cardService.getCards().finally(() => setIsLoading(false));
  }, []);

  return (
    <PageWrap>
      {isLoading && <Loader />}
      <Text type="title" center bold color="#4242aa">
        Карты
      </Text>
      {!!cardService.cards$.length && (
        <Slider>
          {cardService.cards$.map((card) => (
            <Card
              key={card.id}
              card={cardToCardFormDataAdapter(card)}
              onClick={() => setSelectedCard(card)}
            />
          ))}
        </Slider>
      )}

      <Button onClick={() => setSelectedCard(undefined)}>Добавить новую карту</Button>
      <CardForm resetSelectedCard={() => setSelectedCard(undefined)} card={selectedCard} />
    </PageWrap>
  );
});
