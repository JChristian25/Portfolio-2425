import React, { useState } from "react";

function Notif() {
  // State to manage the visibility of the notification
  const [isVisible, setIsVisible] = useState(true);

  // Function to close the notification
  const handleClose = () => {
    setIsVisible(false);
  };

  // Render nothing if the notification is not visible
  if (!isVisible) return null;

  return (
    <div className="fixed bg-black bottom-0 h-[10vh] w-full flex items-center justify-center px-4">
      <p className="text-white text-center font-mono text-sm sm:text-base">
        I'm still working on my site right now. Thanks for coming by, and please check back soon! 
        Note: For Academic Purposes Only!
      </p>
      {/* "X" Button to close the notification */}
      <button onClick={handleClose} 
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-lg font-bold"
        aria-label="Close notification">
        &times;
      </button>
    </div>
  );
}

export default Notif;
