import React from "react";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import BarChart from "../src/components/BarChart";
import SplineChart from "./components/SplineChart";
import Cards from "./components/Cards";
import GridServers from "./components/GridServers";

function App() {
  return (
    <>
    <div className="bg-slate-300">
      <Header />
      <div className="min-h-max bg-slate-300 p-4">
        <Cards />
        <div className="grid grid-cols-1 col-span-1 gap-4 pb-4">
          <div className="bg-white border rounded-lg shadow-lg shadow-slate-800">
            <div className="text-2xl text-center pt-4 font-light">Tráfego de Rede</div>
            <div className="text-lg font-light">
              <SplineChart />
            </div>
          </div>
        </div>
        <div className="grid flex-col justify-between gap-4 grid-cols-2 col-span-2">
          <div className="bg-white border rounded-lg shadow-lg shadow-slate-800 pb-4">
            <GridServers />
          </div>
          <div className="bg-white border rounded-lg shadow-lg shadow-slate-800 pb-4">
          <div className="text-2xl text-center pt-4 font-light">Consumo de Banda</div>
            <div className="text-2xl text-center font-light pt-4">
              <BarChart />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  );
}

export default App;
