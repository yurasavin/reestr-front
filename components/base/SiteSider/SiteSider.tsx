import {
  DesktopOutlined,
  FileOutlined,
  InboxOutlined,
  PieChartOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import { SiderCollapsedContext } from "@contexts/SiderCollapsedContext";
import { SiderCollapsed } from "@helpers/getSiderCollapsedCookie";
import { useCookieState } from "ahooks";
import { Layout, Menu, MenuProps } from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import SiteName from "./SiteName/SiteName";
import styles from "./SiteSider.module.css";

const items: MenuProps["items"] = [
  {
    label: <Link href="/">Главная</Link>,
    key: "/",
    icon: <PieChartOutlined />,
  },
  {
    label: <Link href="/tickets">Заявки</Link>,
    key: "/tickets",
    icon: <InboxOutlined />,
  },
  {
    label: <Link href="/tenders">Закупки</Link>,
    key: "/tenders",
    icon: <DesktopOutlined />,
  },
  {
    label: <Link href="/users">Пользователи</Link>,
    key: "/users",
    icon: <TeamOutlined />,
  },
  {
    label: <Link href="/4">Лимиты</Link>,
    key: "/4",
    icon: <FileOutlined />,
  },
  {
    label: <Link href="/5">Кредиторская задолженность</Link>,
    key: "/5",
    icon: <FileOutlined />,
  },
  {
    label: <Link href="/6">Калькулятор НМЦК</Link>,
    key: "/6",
    icon: <FileOutlined />,
  },
  {
    label: "Отчеты",
    key: "/7",
    icon: <TeamOutlined />,
    children: [
      {
        label: <Link href="/7-1">Ежемесячный по 223-ФЗ</Link>,
        key: "/7-1",
      },
      {
        label: <Link href="/7-2">Ежемесячный для Беликовой</Link>,
        key: "/7-2",
      },
      {
        label: <Link href="/7-3">Ежеквартальный по 823 ППРО</Link>,
        key: "/7-3",
      },
      {
        label: <Link href="/7-4">Суммы по контрактам до 600 т.р. (44-ФЗ)</Link>,
        key: "/7-4",
      },
      {
        label: <Link href="/7-5">Ежегодный по СМП</Link>,
        key: "/7-5",
      },
      {
        label: <Link href="/7-6">Сводный отчет по контрактам</Link>,
        key: "/7-6",
      },
    ],
  },
];

const parseCollapsed = (collapsed: string | undefined) => {
  return collapsed === SiderCollapsed.True ? true : false;
};

const SiteSider: React.FC = () => {
  const collapsedDefault = useContext(SiderCollapsedContext);
  const [collapsed, setCollapsed] = useCookieState("siderCollapsed", {
    defaultValue: collapsedDefault,
  });
  const router = useRouter();

  const changeCollapsed = (collapsed: boolean): void => {
    if (collapsed) {
      setCollapsed(SiderCollapsed.True);
    } else {
      setCollapsed(SiderCollapsed.False);
    }
  };

  return (
    <Layout.Sider
      collapsible
      collapsed={parseCollapsed(collapsed)}
      onCollapse={changeCollapsed}
      width={270}
    >
      <div className={styles.logo}>
        <Image
          width={32}
          height={32}
          alt="site-logo"
          src={"/images/logo.ico"}
        />
        <SiteName collapsed={collapsed} />
      </div>
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
