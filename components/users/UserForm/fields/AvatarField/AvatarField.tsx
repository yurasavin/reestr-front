import ImgCropUpload from "@components/shared/forms/ImgCropUpload";
import UserAvatarIcon from "@components/users/icons/UserAvatarIcon";
import { Form, Modal } from "antd";
import { RcFile, UploadChangeParam, UploadFile } from "antd/es/upload";
import Image from "next/image";
import { useState } from "react";
import FormItemLabel from "../FormItemLabel/FormItemLabel";
import styles from "./AvatarField.module.css";

const AvatarField: React.FC = () => {
  const [previewSrc, setPreviewSrc] = useState("");
  const [previewVisible, setPreviewVisible] = useState(false);
  const form = Form.useFormInstance();
  const avatar = Form.useWatch("avatar", form);

  const onPreview = async (file: UploadFile<any>) => {
    let src: string;

    if (file.url) {
      src = file.url;
    } else {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj as RcFile);
        reader.onload = () => resolve(reader.result as string);
      });
    }
    setPreviewSrc(src);
    setPreviewVisible(true);
  };

  const label = <FormItemLabel text="Фото" icon={<UserAvatarIcon />} />;

  return (
    <>
      <Form.Item
        name="avatar"
        valuePropName="fileList"
        label={label}
        className={styles.avatarfield}
        getValueFromEvent={(e: UploadChangeParam<UploadFile<any>>) =>
          e.fileList.length ? e.fileList : undefined
        }
      >
        <ImgCropUpload
          imgCropProps={{
            aspect: 250 / 250,
            rotationSlider: true,
            maxZoom: 10,
            modalTitle: "Редактирование изображения",
            modalOk: "Применить",
            modalCancel: "Отменить",
          }}
          uploadProps={{
            accept: "image/*",
            listType: "picture-card",
            onPreview: onPreview,
            maxCount: 1,
          }}
        >
          {avatar ? null : "Загрузить изображение"}
        </ImgCropUpload>
      </Form.Item>
      <Modal
        open={previewVisible}
        width={300}
        title="Фото"
        footer={null}
        onCancel={() => setPreviewVisible(false)}
      >
        <Image
          width={250}
          height={250}
          alt="avatar-to-upload"
          src={previewSrc}
        />
      </Modal>
    </>
  );
};

export default AvatarField;
