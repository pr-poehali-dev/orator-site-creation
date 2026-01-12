const PhoneButton = () => {
  return (
    <a
      href="tel:+79183111712"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-16 h-16 bg-primary text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 group"
      aria-label="Позвонить"
    >
      <svg 
        className="w-8 h-8" 
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        viewBox="0 0 24 24"
      >
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
      
      <span className="absolute right-full mr-3 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        +7 918 311-17-12
      </span>
    </a>
  );
};

export default PhoneButton;