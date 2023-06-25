import Icon, {
  ExclamationCircleOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { UsersResourceContext } from "@contexts/users/UsersResourceContext";
import useHeaders from "@hooks/apis/resources/useHeaders";
import { UserData } from "@hooks/apis/resources/useUserListResource";
import DefaultAvatarSVG from "@public/images/default-avatar.svg";
import { fetcher } from "@services/api";
import { Modal, Spin, Upload, message } from "antd";
import { RcFile, UploadChangeParam, UploadFile } from "antd/es/upload";
import React, { useContext, useState } from "react";
import styles from "./UserAvatar.module.css";

interface UserAvatarProps {
  user: UserData;
}

const UserAvatar: React.FC<UserAvatarProps> = ({ user }) => {
  const { resource: usersResource } = useContext(UsersResourceContext);
  const [loading, setLoading] = useState<boolean>(false);
  const headers = useHeaders({});
  const fileList: UploadFile[] = user.avatar
    ? [{ status: "done", url: user.avatar, uid: "-1", name: "" }]
    : [];

  const showConfirmRemove = () => {
    Modal.confirm({
      width: 500,
      title: `Удаление аватара пользователя ${user.last_name}`,
      icon: <ExclamationCircleOutlined />,
      content: "Вы уверены?",
      onOk: removeAvatar,
    });
    return false;
  };

  const removeAvatar = async () => {
    const path = `users/${user.id}/avatar/delete/`;
    await fetcher({
      path,
      fetchParams: { method: "POST", headers },
    });
    usersResource?.mutate();
  };

  const onChange = ({ file }: UploadChangeParam) => {
    setLoading(true);
    const path = `users/${user.id}/avatar/update/`;
    const formData = new FormData();
    formData.append("avatar", file.originFileObj as RcFile);
    fetcher({
      path,
      fetchParams: { method: "POST", body: formData, headers },
    })
      .then(() => {
        usersResource?.mutate();
        message.success("Аватар успешно обновлен");
      })
      .finally(() => setLoading(false));
  };

  return (
    <Upload
      accept="image/*"
      listType="picture-card"
      maxCount={1}
      fileList={fileList}
      showUploadList={{
        showPreviewIcon: false,
        showRemoveIcon: true,
      }}
      onRemove={showConfirmRemove}
      onChange={onChange}
    >
      {fileList.length < 1 && (
        <Spin spinning={loading} indicator={<LoadingOutlined spin />}>
          <Icon component={DefaultAvatarSVG} className={styles.defaultAvatar} />
        </Spin>
      )}
    </Upload>
  );
};

export default UserAvatar;
