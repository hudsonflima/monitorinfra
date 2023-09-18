import React from "react";

const ServerStatusTable = () => {
    // Dados fictícios para 14 servidores
    const servers = [
        { name: "Servidor 1", uptime: "14 horas", status: "Online" },
        { name: "Servidor 2", uptime: "12 horas", status: "Offline" },
        { name: "Servidor 3", uptime: "8 horas", status: "Online" },
        { name: "Servidor 4", uptime: "10 horas", status: "Online" },
        { name: "Servidor 5", uptime: "6 horas", status: "Offline" },
        { name: "Servidor 6", uptime: "18 horas", status: "Online" },
        { name: "Servidor 7", uptime: "22 horas", status: "Online" },
        { name: "Servidor 8", uptime: "16 horas", status: "Offline" },
        { name: "Servidor 9", uptime: "20 horas", status: "Online" },
        { name: "Servidor 10", uptime: "5 horas", status: "Online" },
        { name: "Servidor 11", uptime: "11 horas", status: "Offline" },
        { name: "Servidor 12", uptime: "9 horas", status: "Online" },
        { name: "Servidor 13", uptime: "7 horas", status: "Online" },
        { name: "Servidor 14", uptime: "15 horas", status: "Offline" },
    ];

    return (
        <div className="container mx-auto pt-4">
            <h1 className="text-2xl font-light text-center mb-4">Status dos Servidores</h1>
            <div className="max-h-96 overflow-y-scroll">
                <table className="w-full border-collapse border border-gray-100 rounded-lg shadow-lg">
                    <thead>
                        <tr>
                            <th className="p-3 text-left">Servidor</th>
                            <th className="p-3 text-left">Uptime</th>
                            <th className="p-3 text-left">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {servers.map((server, index) => (
                            <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}>
                                <td className="p-3">{server.name}</td>
                                <td className="p-3">{server.uptime}</td>
                                <td className="p-3">
                                    <span className={`inline-block rounded-full w-3 h-3 mr-2 ${server.status === "Online" ? "bg-green-500" : "bg-red-500"}`}></span>
                                    {server.status}
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ServerStatusTable;
