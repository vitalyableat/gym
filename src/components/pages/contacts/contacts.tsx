import { FC } from 'react';
import { PageWrap } from '../../ui';

export const Contacts: FC = () => {
  const key = 'AIzaSyAP-jjEJBzmIyKR4F-3XITp8yM9T1gEEI8';

  return (
    <PageWrap>
      <iframe
        width="600"
        height="450"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=${key}&q=Space+Needle,Seattle+WA`}
      ></iframe>
    </PageWrap>
  );
};
