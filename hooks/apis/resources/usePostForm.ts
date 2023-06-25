import { ErrorResponse, fetcher } from "@services/api";
import { useRequest } from "ahooks";
import { message } from "antd";
import useHeaders from "./useHeaders";

export interface usePostFormProps {
  path: string;
  onSuccess: () => void;
}

const errorHandler = (error: ErrorResponse | TypeError) => {
  const responseError = error as ErrorResponse;
  if (responseError.data && responseError.status === 400) {
    for (const fieldName in responseError.data) {
      const errorMessage = responseError.data[fieldName];
      message.warning(errorMessage);
    }
  }
  console.error(error);
};

function usePostForm<T>({
  path,
  onSuccess,
}: usePostFormProps): ReturnType<typeof useRequest> {
  const headers = useHeaders();

  const postForm = async (formData: T) => {
    return fetcher({
      path,
      fetchParams: { method: "POST", body: JSON.stringify(formData), headers },
    });
  };

  return useRequest(postForm, {
    manual: true,
    onSuccess,
    onError: errorHandler,
  });
}

export default usePostForm;
