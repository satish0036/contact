import { useEffect, useState } from 'react';
import './ChartsAndMaps.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Chart() {
  const [data, setData] = useState([]);

  const getData = async () => {
    // Fetch data from the API endpoint
    const res = await fetch('https://disease.sh/v3/covid-19/historical/all?lastdays=all');
    const actualData = await res.json();

    // Transform the data to the desired format
    const transformedData = Object.keys(actualData.cases).map((date) => ({
      date,
      cases: actualData.cases[date],
      deaths: actualData.deaths[date],
      recoveries: actualData.recovered[date],
    }));
    // Set the transformed data
    setData(transformedData);
  };

  useEffect(() => {
    getData();
    // Call the getData function when the component mounts
  }, []);

  const colors = ['#8884d8', '#d9041a', '#ffc658'];

  return (
    <div>
      <h2>A line graph showing the cases fluctuations</h2>
      {data.length >= 0 && (
        <ResponsiveContainer width="95%" height={300}>
          <LineChart data={data} margin={{ bottom: 0, left: 30 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis domain={[0, 'dataMax']} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="cases" stroke={colors[0]} dot={false} />
            <Line type="monotone" dataKey="deaths" stroke={colors[1]} dot={false} />
            <Line type="monotone" dataKey="recoveries" stroke={colors[2]} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}

export default Chart;
