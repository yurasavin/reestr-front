import Icon from "@ant-design/icons";
import { UserData } from "@hooks/apis/resources/useUserListResource";
import DefaultAvatarSVG from "@public/images/default-avatar.svg";
import { Image } from "antd";
import styles from "./UserAvatar.module.css";

interface UserAvatarProps {
  user: UserData;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user }) => {
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

export default UserAvatar;
