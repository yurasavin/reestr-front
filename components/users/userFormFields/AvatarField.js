import { Form, Image, Upload } from "antd";
import { EditUserContext } from "contexts/EditUserContext";
import { useContext, useEffect, useState } from "react";
import styles from "styles/UserFormAvatarField.module.css";

const AvatarField = ({ form }) => {
  const [previewSrc, setPreviewSrc] = useState();
  const [fileList, setFileList] = useState();
  const [previewVisible, setPreviewVisible] = useState(false);
  const { editUser } = useContext(EditUserContext);
  const avatar = Form.useWatch("avatar", form);

  useEffect(() => {
    if (!editUser?.avatar) {
      setFileList([]);
    } else if (typeof editUser?.avatar === "string") {
      setFileList([{ status: "done", url: editUser.avatar }]);
    }
  }, [editUser?.avatar]);

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    setPreviewSrc(src);
    setPreviewVisible(true);
  };

  const onChange = ({ file }) => {
    if (file.status === "done") {
      setFileList([file]);
    } else if (file.status === "uploading") {
      setFileList([{ ...file, status: "done" }]);
    } else if (file.status === "removed") {
      setFileList([]);
    }
  };

  return (
    <>
      <Form.Item name="avatar" label="Фото" className={styles.avatarfield}>
        <Upload
          accept="image/*"
          listType="picture-card"
          fileList={fileList}
          onChange={onChange}
          onPreview={onPreview}
          customRequest={(payload) => payload.onSuccess(payload.file)}
          maxCount={1}
        >
          {typeof avatar === "string" || avatar?.fileList?.length
            ? null
            : "Загрузить изображение"}
        </Upload>
      </Form.Item>
      <Image
        alt="avatar-to-upload"
        width={200}
        style={{ display: "none" }}
        preview={{
          visible: previewVisible,
          src: previewSrc,
          onVisibleChange: setPreviewVisible,
        }}
      />
    </>
  );
};

export default AvatarField;
