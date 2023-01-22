import Icon, { CheckCircleOutlined, StopOutlined } from "@ant-design/icons";
import { Image, List, Row, Space, Tooltip } from "antd";
import { ROLES } from "config/constants";
import moment from "moment";
import DefaultAvatarSVG from "../../public/images/default-avatar.svg";
import UserDeleteButton from "./UserDeleteButton";
import UserEditButton from "./UserEditButton";

const formatDate = (dateStr) => {
  return moment(dateStr).format("DD.MM.YYYY");
};

const UserAvatar = ({ user }) => {
  if (user.avatar) {
    return (
      <Image
        alt="Avatar"
        src={user.avatar}
        height={150}
        width={150}
        preview={false}
        style={{
          border: "1px solid rgba(0, 0, 0, 0.0)",
          borderRadius: 14,
          padding: 5,
        }}
      />
    );
  }
  return (
    <Icon
      component={DefaultAvatarSVG}
      style={{
        fontSize: 85,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: 150,
        width: 150,
      }}
    />
  );
};

const UserStatus = ({ user }) => {
  const style = {
    color: user.is_active ? "#389e0d" : "#9e1f0d",
    background: user.is_active ? "#f6ffed" : "#ffedf1",
    borderRadius: 10,
    fontSize: 20,
  };

  const title = user.is_active ? "Активный" : "Заблокирован";
  return (
    <Tooltip title={title}>
      {user.is_active ? (
        <CheckCircleOutlined style={style} />
      ) : (
        <StopOutlined style={style} />
      )}
    </Tooltip>
  );
};

const UserListItem = ({ user }) => {
  return (
    <List.Item key={user.id}>
      <Row
        style={{
          border: "1px solid rgba(0, 0, 0, 0.1)",
          borderRadius: 15,
          fontSize: 16,
        }}
      >
        <UserAvatar user={user} />
        <div>
          <Space>
            <b style={{ fontSize: 18 }}>{user.last_name}</b>
            <UserStatus user={user} />
            <UserEditButton user={user} />
            <UserDeleteButton user={user} />
          </Space>
          <div>
            <b>Должность: </b>
            {user.first_name}
          </div>
          <div>
            <b>Роль: </b>
            {ROLES[user.role]}
          </div>
          <div>
            <b>Создан: </b>
            {formatDate(user.date_joined)}
          </div>
          <div>
            <b>Последняя авторизация: </b>
            {formatDate(user.last_login)}
          </div>
        </div>
      </Row>
    </List.Item>
  );
};
export default UserListItem;
