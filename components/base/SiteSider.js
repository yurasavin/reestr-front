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
import React, { useState } from "react";

function getItem(labelText, key, icon, children) {
  const label = children ? (
    labelText
  ) : (
    <Link href={key}>
      <a>{labelText}</a>
    </Link>
  );

  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem("Главная", "/", <PieChartOutlined />),
  getItem("Реестр", "/tickets", <DesktopOutlined />),
  getItem("Мои закупки", "3", <UserOutlined />),
  getItem("Лимиты", "4", <FileOutlined />),
  getItem("Кредиторская задолженность", "5", <FileOutlined />),
  getItem("Калькулятор НМЦК", "6", <FileOutlined />),
  getItem("Отчеты", "7", <TeamOutlined />, [
    getItem("Ежемесячный отчет по 223-ФЗ", "7-1"),
    getItem("Ежемесячный отчет для Беликовой", "7-2"),
    getItem("Ежеквартальный отчет по 823 ППРО", "7-3"),
    getItem("Суммы по контрактам до 600 т.р. (44-ФЗ)", "7-4"),
    getItem("Ежегодный отчет по СМП", "7-5"),
    getItem("Сводный отчет по контрактам", "7-6"),
  ]),
];

const SiteSider = () => {
  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  return (
    <Layout.Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={350}
    >
      <div className="logo" />
      <Menu
        theme="dark"
        defaultSelectedKeys={[router.asPath]}
        mode="inline"
        items={items}
        subMenuCloseDelay={0}
      />
    </Layout.Sider>
  );
};
export default SiteSider;
