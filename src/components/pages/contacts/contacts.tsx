import { FC } from 'react';
import { PageWrap, Text } from '../../ui';

export const Contacts: FC = () => {
  return (
    <PageWrap>
      <Text type="title" center bold color="#4242aa">
        Как нас найти
      </Text>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d105784.08078005981!2d-118.33006352529641!3d34.05021873978048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c7b1113317ef%3A0xe7bcac5f17d263ce!2sAttitude%20Fitness!5e0!3m2!1sen!2sby!4v1683383493948!5m2!1sen!2sby"
        width="100%"
        height="500"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </PageWrap>
  );
};
