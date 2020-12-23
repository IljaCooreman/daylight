import React, { useEffect } from 'react';
import './App.css';
import { observer } from 'mobx-react';
import { store } from './store';
import TodayMetrics from './components/TodayMetrics';
import DayGraph from './DayGraph';


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
    store.getLocationName();
  }, [location])

  return (
    <div className="App">
      <div style={{ width: '100%' }}>
        {
          sunTimes.map(timings => (
            <DayGraph timings={timings} key={String(timings.date)} />
          ))
        }
      </div>
      <div>
        location: {store.locationName}
      </div>
      <TodayMetrics />
    </div>
  );
}
)

export default App;
