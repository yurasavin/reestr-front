import { SearchOutlined } from "@ant-design/icons";
import { TicketsResourceContext } from "@contexts/tickets/TicketsResourceContext";
import { Input, Tooltip } from "antd";
import { useContext } from "react";
import styles from "./TicketsSearch.module.css";

const TicketsSearch: React.FC = () => {
  const { searchInput, setSearchInput } = useContext(TicketsResourceContext);

  return (
    <Tooltip title="Поиск">
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

export default TicketsSearch;
