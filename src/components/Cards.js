import React from 'react'

const Cards = () => {
  return (
    <div>
    <div className="pb-4">
        <div className="grid grid-cols-3 col-span-3 gap-4">
          {/* Card 01 - Servidores */}
          <div className="bg-gray-50 rounded-xl p-4 transition-all shadow-lg shadow-slate-800">
            <h2 className="text-xl text-gray-800 font-semibold mb-4">Servidores</h2>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-gray-800">Online:</p>
                <p className="text-2xl font-bold text-green-500">9</p>
              </div>
              <div>
                <p className="text-gray-800">Offline:</p>
                <p className="text-2xl font-bold text-red-500">5</p>
              </div>
            </div>
          </div>

          {/* Card 02 - Tráfego */}
          <div className="bg-gray-50 rounded-xl p-4 transition-all shadow-lg shadow-slate-800">
            <h2 className="text-xl text-gray-800  font-semibold mb-4">Tráfego</h2>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-gray-800">MB recebidos:</p>
                <p className="text-2xl font-bold text-blue-400">155MB/s</p>
              </div>
              <div>
                <p className="text-gray-800">MB enviados:</p>
                <p className="text-2xl font-bold text-green-400">45MB/s</p>
              </div>
            </div>
          </div>

          {/* Card 03 - Erros */}
          <div className="bg-gray-50 rounded-xl p-4 transition-all shadow-lg shadow-slate-800">
            <h2 className="text-xl text-gray-800  font-semibold mb-4">Erros</h2>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <p className="text-gray-800">Críticos:</p>
                <p className="text-2xl font-bold text-red-500">4</p>
              </div>
              <div>
                <p className="text-gray-800">Advertências:</p>
                <p className="text-2xl font-bold text-yellow-500">15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cards