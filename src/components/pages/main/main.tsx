import { FC } from 'react';
import { FaUser } from 'react-icons/fa';
import { Button, Divider, Form, Input, PageWrap, Select, Text } from '../../ui';

export const Main: FC = () => {
  return (
    <PageWrap>
      <Form>
        <Input Icon={<FaUser />} error={'error'} />
        <Select>
          {[1, 2].map((option) => (
            <option key={option}>{option}</option>
          ))}
        </Select>
        <Button>Авторизоваться</Button>
        <Divider>AND</Divider>
        <Divider />
        <Text type="title" bold color="#6666dd">
          Title
        </Text>
        <Text type="header" bold>
          Header
        </Text>
        <Text>Text</Text>
      </Form>
    </PageWrap>
  );
};
