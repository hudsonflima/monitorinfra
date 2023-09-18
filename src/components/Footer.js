import React, { useState, useEffect } from "react";

function Footer() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Atualizar a cada segundo

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formattedDateTime = currentDateTime.toLocaleString("pt-BR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  });

  return (
    <footer className="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700 rounded-lg shadow-md shadow-slate-800 mx-4 py-8 drop-shadow">
      <div className="container mx-auto bottom-full text-center">
        <p className="text-gray-800 text-lg">Dashboard Monitoring Servers | {formattedDateTime}</p>
      </div>
    </footer>
  );
}

export default Footer;
