import React, { useEffect } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import { store } from './store';
import TodayMetrics from './components/TodayMetrics';


const App: React.FC = observer(() => {
  const { location, sunTimes } = store;
  console.log("TCL: App:React.FC -> sunTimes", sunTimes)

  const handleLocationSuccess: PositionCallback = (position) => {
    store.location = position.coords
  }
  const handleLocationError: PositionErrorCallback = (positionError) => {
    console.log('something went wrong:', positionError.message)
  }

  navigator.geolocation.getCurrentPosition(handleLocationSuccess, handleLocationError, { timeout: 5000 })

  useEffect(() => {
  }, [location])

  return (
    <div className="App">
      {/* <div style={{ width: '100%' }}>
        {
          sunTimes.map(timings => (
            <DayGraph timings={timings} />
          ))
        }
      </div> */}
      <TodayMetrics />
    </div>
  );
}
)

export default App;
