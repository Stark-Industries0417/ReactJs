import { useEffect, useState } from 'react';

function Hello() {
  // function byFn() {
  //   console.log('destroyed');
  // }
  // function hiFn() {
  //   console.log('created');
  //   return byFn;
  // }
  useEffect(() => {
    console.log('created');
    return () => console.log('destroyed'); // execute when a component is deleted
  }, []);
  return <h1>Hello</h1>
}

function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing(prev => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? 'Hide' : 'Show'}</button>
    </div>
  );
}

export default CleanUp;
