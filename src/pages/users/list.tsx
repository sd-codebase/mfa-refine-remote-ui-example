import { Flex, Button, Typography, Image } from 'antd';
import styles from './user.module.scss';

export interface UserListProps {
  fromParent?: string;
  onUserSelect?: (userId: string) => void;
}

export const UsersList: React.FC<UserListProps> = ({ fromParent }) => {
  return (
    <Flex
      vertical
      justify="start"
      align="start"
      gap="8px"
      className={styles.userList}>
      <Typography.Text className={styles.pageHeading}>
        UserList App
      </Typography.Text>
      {fromParent ? <Typography.Text>{fromParent}</Typography.Text> : null}
      <Button>Click me</Button>
      <Image
        width={100}
        height={100}
        src="/no-suggestions.svg"
        alt="svg"
      />
    </Flex>
  );
};

export default UsersList;
