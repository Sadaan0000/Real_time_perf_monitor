import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";
import BrushChart from "./BrushChart";
import PieChart from "./PieChart";

function App() {
  const [SYSTEM_INFO, setSYSTEM_INFO] = useState([]);
  const [MEMORY, setMEMORY] = useState([]);
  const [CPU, setCPU] = useState([]);
  const [data, setData] = useState([]);
  const URL = "http://localhost:8000/api/metrics";

  const fetchData = async (URL) => {
    const res = await axios.get(URL);
    setSYSTEM_INFO(res.data.data[0].SYSTEM_INFO);
    setMEMORY(res.data.data[0].MEMORY);
    setCPU(res.data.data[0].CPU);
    setData(res.data.data);
  };

  useEffect(() => {
    fetchData(URL);
  });

  // console.log(data);

  // const SYSTEM_INFO = data.data.SYSTEM_INFO;
  // console.log(SYSTEM_INFO);

  // const parsedData = JSON.stringify(data.data);
  // console.log(parsedData);
  const memoryData = {
    // TOTAL: MEMORY.TOTAL,
    USED: MEMORY.USED,
    FREE: MEMORY.FREE,
  };
  // Example using plain WebSocket
const ws = new WebSocket('ws://localhost:8000/ws');

ws.onopen = () => {
  console.log('Connected to WebSocket server');
  // Send a message to the server
  ws.send('Hello Server!');
};

ws.onmessage = (event) => {
  console.log(`Received: ${event.data}`);
  // Handle incoming messages
};

ws.onclose = () => {
  console.log('Disconnected from WebSocket server');
};


  return (
    <>
      {/* Pie Chart */}
      <div className="px-36 py-20 flex justify-between">
        <div>
          <h1 className="font-bold text-xl">
            HOSTNAME:- {SYSTEM_INFO.HOST_NAME}{" "}
          </h1>
          <h1 className="font-bold text-xl pt-4">CPU CORES:- {CPU.CORES} </h1>
          <h1 className="font-bold text-xl pt-4">CPU USAGE:- {CPU.USAGE}% </h1>
          <h1 className="font-bold text-xl pt-4">
            MEMORY TOTAL:- {MEMORY.TOTAL} MB
          </h1>
          <h1 className="font-bold text-xl pt-4">
            MEMORY USED:- {MEMORY.USED} MB
          </h1>
          <h1 className="font-bold text-xl pt-4">
            MEMORY FREE:- {MEMORY.FREE} MB
          </h1>
          <h1 className="font-bold text-xl pt-4">
            SYSTEM UPTIME:- {SYSTEM_INFO.UPTIME} Hrs
          </h1>

          <h1 className="font-bold text-xl pt-4">
            Architecture :- {SYSTEM_INFO.ARCHITECTURE}
          </h1>
          <h1 className="font-bold text-xl pt-4">
            OS Type :- {SYSTEM_INFO.OS_TYPE}
          </h1>
        </div>
        <PieChart memoryData={memoryData} />
        <BrushChart memoryData={memoryData} />
      </div>

      {/* <p>{JSON.stringify(SYSTEM_INFO)}</p>*/}
      {/* <p>{MEMORY.FREE}</p> */}
      {/* <p>{JSON.stringify(CPU)}</p> */}
    </>
  );
}

export default App;
