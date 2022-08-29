const getSiderCollapsedCookie = (context) => {
  const siderCollapsed = context.req.cookies.siderCollapsed || "false";
  return siderCollapsed;
};
export default getSiderCollapsedCookie;
