```javascript
import React, { useState, useEffect, useRef } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    // Update countRef only when count changes
    countRef.current = count;
    console.log('Effect ran with count:', count);
  }, [count]);

  useEffect(() => {
    //Simulate asynchronous operation. Without it, the next line won't have any effect.
    const intervalId = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
    </div>
  );
}

export default MyComponent;
```