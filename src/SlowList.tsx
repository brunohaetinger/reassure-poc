import * as React from 'react';
import { View, Text } from 'react-native';
interface Props {
  count: number;
}

export const SlowList = ({ count }: Props) => {
  const data = Array.from({ length: count }, (_, index) => index);

  return (
    <View>
      {data.map((item) => (
        <SlowListItem key={item} title={`Item ${item}`} />
      ))}
    </View>
  );
};

interface ItemProps {
  title: string;
}

const SlowListItem = ({ title }: ItemProps) => {
  const [itemTitle, setItemTitle] = React.useState<string>('');

  React.useEffect(() => {
    setItemTitle(title.toUpperCase());
  }, [title]);

  return (
    <View>
      <Text>{itemTitle}</Text>
    </View>
  );
};
