// 🎨 Colores base (Material Tailwind o personalizados)
const defaultColors = ["#020617", "#ff8f00", "#00897b", "#1e88e5", "#d81b60"];

const baseOptions = {
  chart: { toolbar: { show: false } },
  title: { show: false },
  dataLabels: { enabled: false },
  tooltip: { theme: "dark" },
};

const baseAxisStyles = {
  labels: {
    style: {
      colors: "#616161",
      fontSize: "12px",
      fontFamily: "inherit",
      fontWeight: 400,
    },
  },
  axisTicks: { show: false },
  axisBorder: { show: false },
};

// ✅ Adapter for Pie Chart
const pieChartAdapter = ({
  series,
  categories,
  colors = defaultColors,
  responsive,
}) => ({
  type: "pie",
  height: 500,
  width: responsive ? "" : 500,
  series,
  options: {
    ...baseOptions,
    labels: categories,
    colors,
    legend: { show: true },
  },
});

// ✅ Adapter for Bar Chart
const barChartAdapter = ({
  series,
  categories,
  colors = defaultColors,
  responsive,
}) => ({
  type: "bar",
  height: responsive ? 300 : 400,
  series,
  options: {
    ...baseOptions,
    colors,
    plotOptions: {
      bar: {
        columnWidth: "40%",
        borderRadius: 2,
        endingShape: "rounded",
      },
    },
    xaxis: {
      ...baseAxisStyles,
      categories,
    },
    yaxis: baseAxisStyles,
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: { lines: { show: true } },
      padding: { top: 5, right: 20 },
    },
    fill: { opacity: 0.8 },
    legend: { show: true, position: "top", horizontalAlign: "right" },
  },
});

// ✅ Adapter for Line Chart
const lineChartAdapter = ({
  series,
  categories,
  colors = defaultColors,
  responsive,
}) => ({
  type: "line",
  height: responsive ? 300 : 400,
  series,
  options: {
    ...baseOptions,
    colors,
    stroke: {
      lineCap: "round",
      curve: "smooth",
    },
    markers: {
      size: 0,
    },
    xaxis: {
      ...baseAxisStyles,
      categories,
    },
    yaxis: baseAxisStyles,
    grid: {
      show: true,
      borderColor: "#dddddd",
      strokeDashArray: 5,
      xaxis: { lines: { show: true } },
      padding: { top: 5, right: 20 },
    },
    fill: { opacity: 0.8 },
  },
});

// 🏭 Factory
export function createChartConfig(type, config, responsive) {
  switch (type) {
    case "pie":
      return pieChartAdapter({ ...config, responsive });
    case "bar":
      return barChartAdapter({ ...config, responsive });
    case "line":
      return lineChartAdapter({ ...config, responsive });
    default:
      throw new Error(`Unsupported chart type: ${type}`);
  }
}
