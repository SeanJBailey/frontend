import React, { useState } from 'react';

const Tickets = () => {
  // Sample ticket data - replace with data from your API
  const [tickets, setTickets] = useState([
    {
      id: 'TKT-001',
      entryTime: '2024-01-15 09:30:45',
      exitTime: '2024-01-15 16:15:20',
      price: '$15.75',
      lotId: 'Downtown Lot A',
      vehiclePlate: 'ABC123'
    },
    {
      id: 'TKT-002',
      entryTime: '2024-01-16 14:20:10',
      exitTime: '2024-01-16 18:45:30',
      price: '$8.50',
      lotId: 'City Center B',
      vehiclePlate: 'XYZ789'
    },
    {
      id: 'TKT-003',
      entryTime: '2024-01-17 08:15:00',
      exitTime: '2024-01-17 17:30:00',
      price: '$22.00',
      lotId: 'Airport Parking',
      vehiclePlate: 'DEF456'
    }
  ]);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Parking Tickets</h1>
        
        {/* Tickets Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tickets.map((ticket) => (
            <div key={ticket.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-200">
              {/* Ticket Header */}
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{ticket.id}</h2>
              </div>

              {/* Ticket Details */}
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Vehicle:</span>
                  <span className="text-sm font-semibold text-gray-800">{ticket.vehiclePlate}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Parking Lot:</span>
                  <span className="text-sm font-semibold text-gray-800">{ticket.lotId}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Entry Time:</span>
                  <span className="text-sm font-semibold text-gray-800">{ticket.entryTime}</span>
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-600">Exit Time:</span>
                  <span className="text-sm font-semibold text-gray-800">{ticket.exitTime}</span>
                </div>

                {/* Price - Highlighted */}
                <div className="flex justify-between items-center pt-3 border-t border-gray-200 mt-3">
                  <span className="text-lg font-medium text-gray-700">Price:</span>
                  <span className="text-xl font-bold text-green-600">{ticket.price}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-2 mt-4 pt-4 border-t border-gray-200">
                <button className="flex-1 bg-blue-500 text-white py-2 px-3 rounded-md text-sm hover:bg-blue-600 transition duration-200">
                  View Details
                </button>
                <button className="flex-1 bg-gray-500 text-white py-2 px-3 rounded-md text-sm hover:bg-gray-600 transition duration-200">
                  Print
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {tickets.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 text-6xl mb-4">🎫</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">No tickets found</h3>
            <p className="text-gray-500">You don't have any parking tickets yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;
