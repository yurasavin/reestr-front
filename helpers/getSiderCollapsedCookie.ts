import type { GetServerSideProps, GetServerSidePropsContext } from "next";

enum SiderCollapsed {
  True = "true",
  False = "false",
}

export interface SiderCollapsedPageProps {
  siderCollapsed: SiderCollapsed;
}

const getSiderCollapsedCookie = (
  context: GetServerSidePropsContext
): SiderCollapsed => {
  return context.req.cookies.siderCollapsed === SiderCollapsed.True
    ? SiderCollapsed.True
    : SiderCollapsed.False;
};

const getSiderCollapsedServerSideProps: GetServerSideProps<{
  siderCollapsed: SiderCollapsed;
}> = async (context: GetServerSidePropsContext) => {
  return { props: { siderCollapsed: getSiderCollapsedCookie(context) } };
};

export default getSiderCollapsedCookie;
export { SiderCollapsed, getSiderCollapsedServerSideProps };
