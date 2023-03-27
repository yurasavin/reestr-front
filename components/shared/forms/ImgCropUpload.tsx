import { Upload } from "antd";
import ImgCrop, { ImgCropProps } from "antd-img-crop";
import { UploadProps } from "antd/es/upload";
import { UploadRequestOption } from "rc-upload/lib/interface";

interface ImgCropUploadProps extends UploadProps {
  imgCropProps: Omit<ImgCropProps, "children">;
  uploadProps: UploadProps;
  children: React.ReactNode;
}

const ImgCropUpload: React.FC<ImgCropUploadProps> = (props) => {
  return (
    <ImgCrop {...props.imgCropProps}>
      <Upload
        {...props}
        {...props.uploadProps}
        customRequest={(payload: UploadRequestOption) => {
          payload.onSuccess && payload.onSuccess(payload.file);
        }}
      >
        {props.children}
      </Upload>
    </ImgCrop>
  );
};

export default ImgCropUpload;
