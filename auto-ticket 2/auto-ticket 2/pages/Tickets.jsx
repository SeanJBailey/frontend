import React, { useState } from 'react';

const Tickets = () => {
  // Sample ticket 
  const [tickets, setTickets] = useState([
    {
      id: 'TKT-001',
      entryTime: '2024-01-15 09:30:45',
      exitTime: '2024-01-15 16:15:20',
      price: 'R 215.75',
      lotId: 'Bellville Lot A',
      vehiclePlate: 'ABC123'
    },
    {
      id: 'TKT-002',
      entryTime: '2024-01-16 14:20:10', 
      exitTime: '2024-01-16 18:45:30',
      price: 'R 118.50',
      lotId: 'City Center B',
      vehiclePlate: 'XYZ789'
    },
    {
      id: 'TKT-003',
      entryTime: '2024-01-17 08:15:00',
      exitTime: '2024-01-17 17:30:00',
      price: 'R 295.00',
      lotId: 'Airport Parking',
      vehiclePlate: 'DEF456'
    }
  ]);

  return (
    <div className="min-h-screen p-6" style={{backgroundColor: '#000000', color: '#ffffff'}}>
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        
        
        <h1 className="text-3xl font-bold mb-8" style={{color: '#ffffff'}}>Parking Tickets</h1>
        
        
        <div className="w-full flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
            {tickets.map((ticket) => (
              <div 
                key={ticket.id} 
                className="rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-200 border border-gray-700 w-full max-w-sm" 
                style={{backgroundColor: '#000000', color: '#ffffff'}}
              >
                
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-semibold" style={{color: '#ffffff'}}>{ticket.id}</h2>
                </div>

                
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium" style={{color: '#cccccc'}}>Vehicle:</span>
                    <span className="text-sm font-semibold" style={{color: '#ffffff'}}>{ticket.vehiclePlate}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium" style={{color: '#cccccc'}}>Parking Lot:</span>
                    <span className="text-sm font-semibold" style={{color: '#ffffff'}}>{ticket.lotId}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium" style={{color: '#cccccc'}}>Entry Time:</span>
                    <span className="text-sm font-semibold" style={{color: '#ffffff'}}>{ticket.entryTime}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium" style={{color: '#cccccc'}}>Exit Time:</span>
                    <span className="text-sm font-semibold" style={{color: '#ffffff'}}>{ticket.exitTime}</span>
                  </div>

                 
                  <div className="flex justify-between items-center pt-3 border-t border-gray-700 mt-3">
                    <span className="text-lg font-medium" style={{color: '#ffffff'}}>Price:</span>
                    <span className="text-xl font-bold" style={{color: '#4ade80'}}>{ticket.price}</span>
                  </div>
                </div>

               
                <div className="flex space-x-2 mt-4 pt-4 border-t border-gray-700">
                  <button className="flex-1 py-2 px-3 rounded-md text-sm transition duration-200" style={{backgroundColor: '#4b5563', color: '#ffffff'}}>
                    View Details
                  </button>
                  <button className="flex-1 py-2 px-3 rounded-md text-sm transition duration-200" style={{backgroundColor: '#374151', color: '#ffffff'}}>
                    Print
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

       
        {tickets.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🎫</div>
            <h3 className="text-xl font-semibold mb-2" style={{color: '#ffffff'}}>No tickets found</h3>
            <p style={{color: '#cccccc'}}>You don't have any parking tickets yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Tickets;
