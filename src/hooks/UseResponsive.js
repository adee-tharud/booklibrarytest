import { Grid } from "antd";

const UseResponsive = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  if (screens.xxl) return "desktop";
  if (screens.xl) return "desktop";
  if (screens.lg) return "desktop";
  if (screens.md) return "tablet";
  if (screens.sm) return "tablet";
  if (screens.xs) return "mobile";

  return "mobile";
};

export default UseResponsive;
