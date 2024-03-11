import React from "react";

const Status = ({ status }: { status: string }) => {
  const statusColor = () => {
    switch (status) {
      case "Pending":
        return "bg-yellow-300/80";
      case "Completed":
        return "bg-green-400 text-green-900";
      case "Processing":
        return "bg-blue-400 text-blue-900";
      case "Canceled":
        return "bg-red-400 text-red-700";
      default:
        return "bg-gray-400";
    }
    };
    
    const color = statusColor();
    return <div className={ `${color} p-1 text-center rounded-2xl`}>{status}</div>;
};

export default Status;
