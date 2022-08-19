import * as React from 'react';
import { View, Text } from 'react-native';
interface Props {
  count: number;
}

export const List = ({ count }: Props) => {
  const data = Array.from({ length: count }, (_, index) => index);

  return (
    <View>
      {data.map((item) => (
        <ListItem key={item} title={`Item ${item}`} />
      ))}
    </View>
  );
};

interface ItemProps {
  title: string;
}

const ListItem = ({ title }: ItemProps) => {
  return (
    <View>
      <Text>{title.toUpperCase()}</Text>
    </View>
  );
};
