const getMetrics = require("../services/monitor.service");
const metrics = async (req, res) => {
  try {
    const metrics = await getMetrics();
    console.log(metrics);
    res.status(200).json({
      success: true,
      status: 200,
      message: "Successfully fetched metrics",
      data: metrics,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      status: 500,
      message: "Internal server error",
      data: null,
    });
  }
};

module.exports = metrics;
