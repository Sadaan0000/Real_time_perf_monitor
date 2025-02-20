import Chart from "react-apexcharts";

const BrushChart = (props) => {
  const memoryChartData = Object.entries(props.memoryData).map(
    ([label, value]) => ({
      x: label,
      y: parseInt(value),
    })
  );

  // Set up chart options
  const chartOptions = {
    chart: {
      id: "memory-usage-brush",
      type: "area",
      stacked: false,
      toolbar: {
        autoSelected: "zoom",
      },
    },
    dataLabels: {
      enabled: false,
    },
    markers: {
      size: 0,
    },
    xaxis: {
      type: "category",
    },
    yaxis: {
      labels: {
        minWidth: 40,
      },
    },
    colors: ["#3F51B5", "#FF9800", "#E91E63"], // Set custom colors for the areas
  };

  // Create the chart series
  const chartSeries = [
    {
      name: "Memory Usage",
      data: memoryChartData,
    },
  ];

  return (
    <div>
      {" "}
      <h2>Memory Usage Brush Chart</h2>
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="area"
        height="300"
        width={500}
      />
    </div>
  );
};

export default BrushChart;
