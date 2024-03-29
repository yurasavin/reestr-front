import { SearchOutlined } from "@ant-design/icons";
import { UsersResourceContext } from "@contexts/users/UsersResourceContext";
import { Input, Tooltip } from "antd";
import { useContext } from "react";
import styles from "./UsersSearch.module.css";

const UsersSearch: React.FC = () => {
  const { searchInput, setSearchInput } = useContext(UsersResourceContext);

  return (
    <Tooltip title="Поиск по логину, имени и должности">
      <Input
        value={searchInput}
        onChange={(e) => setSearchInput && setSearchInput(e.target.value)}
        placeholder="Поиск"
        allowClear
        className={styles.input}
        suffix={<SearchOutlined />}
      />
    </Tooltip>
  );
};

export default UsersSearch;
