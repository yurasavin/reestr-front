import Icon from "@ant-design/icons";
import { UserData } from "@hooks/apis/resources/useUserListResource";
import DefaultAvatarSVG from "@public/images/default-avatar.svg";
import { Image } from "antd";
import styles from "./UserListItemUserAvatar.module.css";

interface UserListItemUserAvatarProps {
  user: UserData;
}

const UserListItemUserAvatar: React.FC<UserListItemUserAvatarProps> = ({
  user,
}) => {
  if (user.avatar) {
    return (
      <Image
        alt="Avatar"
        src={user.avatar}
        height={150}
        width={150}
        className={styles.avatar}
        preview={false}
      />
    );
  }
  return <Icon component={DefaultAvatarSVG} className={styles.defaultAvatar} />;
};

export default UserListItemUserAvatar;
