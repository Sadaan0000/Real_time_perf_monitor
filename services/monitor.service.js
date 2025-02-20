const os = require("os");
const osu = require("node-os-utils");

const getMetrics = async (req, res) => {
  try {
    const cpuUsage = await osu.cpu.usage();
    const totalMem = (os.totalmem() / (1024 * 1024)).toFixed();
    const freeMem = (os.freemem() / (1024 * 1024)).toFixed();
    return [
      {
        SYSTEM_INFO: {
          HOST_NAME: os.hostname(),
          ARCHITECTURE: os.arch(),
          OS_TYPE: os.type(),
          PLATFORM: os.platform(),
          UPTIME: (os.uptime() / 3600).toFixed(2),
          VERSION: os.version(),
          LOAD_AVG: os.loadavg(),
          RELEASE: os.release(),
        },
        MEMORY: {
          TOTAL: totalMem,
          FREE: freeMem,
          USED: (totalMem - freeMem).toFixed(),
        },
        CPU: {
          CORES: os.cpus().length,
          USAGE: cpuUsage,
        },
      },
    ];
  } catch (err) {
    console.log(err);
  }
};

module.exports = getMetrics;
