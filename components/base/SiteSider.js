import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/SiteSider.module.css";

const items = [
  {
    label: (
      <Link href="/">
        <a>Главная</a>
      </Link>
    ),
    key: "/",
    icon: <PieChartOutlined />,
  },
  {
    label: (
      <Link href="/tickets">
        <a>Реестр</a>
      </Link>
    ),
    key: "/tickets",
    icon: <DesktopOutlined />,
  },
  {
    label: (
      <Link href="/3">
        <a>Мои закупки</a>
      </Link>
    ),
    key: "/3",
    icon: <UserOutlined />,
  },
  {
    label: (
      <Link href="/4">
        <a>Лимиты</a>
      </Link>
    ),
    key: "/4",
    icon: <FileOutlined />,
  },
  {
    label: (
      <Link href="/5">
        <a>Кредиторская задолженность</a>
      </Link>
    ),
    key: "/5",
    icon: <FileOutlined />,
  },
  {
    label: (
      <Link href="/6">
        <a>Калькулятор НМЦК</a>
      </Link>
    ),
    key: "/6",
    icon: <FileOutlined />,
  },
  {
    label: "Отчеты",
    key: "/7",
    icon: <TeamOutlined />,
    children: [
      {
        label: (
          <Link href="/7-1">
            <a>Ежемесячный отчет по 223-ФЗ</a>
          </Link>
        ),
        key: "/7-1",
      },
      {
        label: (
          <Link href="/7-2">
            <a>Ежемесячный отчет для Беликовой</a>
          </Link>
        ),
        key: "/7-2",
      },
      {
        label: (
          <Link href="/7-3">
            <a>Ежеквартальный отчет по 823 ППРО</a>
          </Link>
        ),
        key: "/7-3",
      },
      {
        label: (
          <Link href="/7-4">
            <a>Суммы по контрактам до 600 т.р. (44-ФЗ)</a>
          </Link>
        ),
        key: "/7-4",
      },
      {
        label: (
          <Link href="/7-5">
            <a>Ежегодный отчет по СМП</a>
          </Link>
        ),
        key: "/7-5",
      },
      {
        label: (
          <Link href="/7-6">
            <a>Сводный отчет по контрактам</a>
          </Link>
        ),
        key: "/7-6",
      },
    ],
  },
];

const SiteSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setCollapsed(JSON.parse(localStorage.getItem("sider-collapsed")));
  }, []);

  const changeCollapsed = (value) => {
    localStorage.setItem("sider-collapsed", value);
    setCollapsed(value);
  };

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={changeCollapsed}
      width={350}
    >
      <div className={styles.logo} />
      <Menu
        theme="dark"
        defaultSelectedKeys={[router.asPath]}
        mode="inline"
        items={items}
      />
    </Layout.Sider>
  );
};
export default SiteSider;
