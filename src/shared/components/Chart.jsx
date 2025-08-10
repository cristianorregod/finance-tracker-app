import { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import ChartComponent from "react-apexcharts";
import { getChartData } from "@/shared/services/chart";
import { createChartConfig } from "@/shared/helpers/chartFactory";
import { ChartSkeleton } from "@/shared/components/ChartSkeleton";
import { useIsMobile } from "@shared/hooks/useIsMobile";

export const Chart = ({ chartId, title = "Default chart" }) => {
  const [chartConfig, setChartConfig] = useState(null);
  const [chartType, setChartType] = useState("pie");
  const isMobile = useIsMobile();
  console.log("isMobile", isMobile);
  useEffect(() => {
    getChartData(chartId).then((res) => {
      const chartConfig = createChartConfig(res.type, res.data, isMobile);
      setChartConfig(chartConfig);
      setChartType(res.type);
    });
  }, []);
  return (
    <Card>
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="flex flex-col  rounded-none md:flex-row md:items-center"
      >
        <Typography
          variant="h5"
          color="blue-gray"
          className="w-full text-center"
        >
          {title}
        </Typography>
      </CardHeader>
      <CardBody
        className={`px-2  ${chartType != "pie" ? "pt-2" : "mx-auto pt-8"}`}
      >
        {!chartConfig && <ChartSkeleton />}
        {chartConfig && <ChartComponent {...chartConfig} />}
      </CardBody>
    </Card>
  );
};
