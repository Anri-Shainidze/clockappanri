import  { useState, useEffect } from 'react';
import './App.scss';
import Fold from './components/folders/Fold';
import Time from './components/fortimer/Time';
import { IoIosArrowDropdownCircle } from 'react-icons/io';





function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDaytime, setIsDaytime] = useState(true);

  useEffect(() => {
    const checkDayTime = () => {
      const currentHour = new Date().getHours();
      setIsDaytime(currentHour >= 6 && currentHour < 18);
    };


    checkDayTime();
    const timer = setInterval(checkDayTime, 60000); 

    return () => clearInterval(timer);
  }, []);

  const toggleFold = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`for-containerss ${isOpen ? 'fold-open' : ''} ${isDaytime ? 'forday' : 'fornight'}`}>
      <div className="first-areast">
        <div className="for-txtarea">
          <p>
            "The science of operations, as derived from mathematics more <br />
            especially, is a science of itself, and has its own abstract truth <br />
            and value."
          </p>
          <p>Ada Lovelace</p>
        </div>
        
        <div className="only-timer">
          <Time isDaytime={isDaytime} />
          <button onClick={toggleFold}>
            {isOpen ? 'Less' : 'More'} 
            <IoIosArrowDropdownCircle 
              style={{ 
                marginLeft: '11px', 
                cursor: "pointer",
                color: "#303030", 
              }} 
            />
          </button>
        </div>
      </div>
      
      <Fold isOpen={isOpen} isDaytime={isDaytime} />
    </div>
  );
}

export default App;