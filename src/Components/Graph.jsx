import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

export default function Graph() {
  const [selection, setSelection] = useState([]);

  const { data ={}, error="", loading=false } = useFetch( selection?.length > 0 ?
    `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${selection.join(',')}` : ""
  );

  const handleChange = (e) => {
    if (e.target.value !== '') {
      setSelection((prev) => [...new Set([...prev, e.target.value])]); // avoid duplicates
    }
  };



  return (
    <div style={{ padding: '20px' }}>
      <h3>Crypto Prices Dashboard</h3>

      <select multiple value={selection} onChange={handleChange} name="filterCurrency">
        <option value="">Select</option>
        <option value="bitcoin">bitcoin</option>
        <option value="ethereum">ethereum</option>
        <option value="solana">solana</option>
        <option value="binancecoin">binancecoin</option>
        <option value="dogecoin">dogecoin</option>
      </select>

      {/* Show loader */}
      {loading && <p>Loading data...</p>}

      {/* Show chart only when we have data */}
      {data?.length > 0 && (
       <LineChart style={{ width: '100%', aspectRatio: 1.618, maxWidth: 600 }} responsive data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
            <CartesianGrid stroke="#aaa" strokeDasharray="5 5" />
            <Line type="monotone" dataKey="current_price" stroke="purple" strokeWidth={2} name="Coins" />
            <XAxis dataKey="name" />
            <YAxis width="auto" label={{ value: 'Price', position: 'insideLeft', angle: -90 }} />
            <Legend align="right" />
            <Tooltip />
        </LineChart>
      )}

      {/* Fallback when no data */}
      {!loading && data?.length === 0 && (
        <p style={{ marginTop: '20px' }}>Please select at least one coin.</p>
      )}

    </div>
  );
}
