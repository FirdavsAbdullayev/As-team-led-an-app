import React from 'react'
import "./App.css"

const App = () => {
  return (
    <div>
      <BarChart
        height={300}
        series={[
          { ...seriesA, stack: 'total' },
          { ...seriesB, stack: 'total' },
          { ...seriesC, stack: 'total' },
        ]}
      />
    </div>
  )
}

export default App