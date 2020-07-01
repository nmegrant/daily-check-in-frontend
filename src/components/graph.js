
import React from "react";

import { 
  Tooltip, 
  ComposedChart,
  BarChart,
  Bar,
  Area, 
  Line, 
  ResponsiveContainer,
  CartesianGrid,
  XAxis,
  YAxis,
  Legend 
} from 'recharts';

// GRAPH SETTINGS
const primaryColor = 'rgb(31, 129, 140)';
const secondaryColor = 'rgb(242, 92, 105)';
const tertiaryColor = 'rgb(242, 203, 87)';
const quaternaryColor = 'rgb(242, 132, 92)';

const animationDuration = 1000;

// Helpers:
const getStrokeColor = (RGB) => {
  const darkerColorDifference = 20;
  const colorValues = breakRGBstring(RGB);
  colorValues.forEach(val => val-darkerColorDifference)
  return `rgb(${colorValues[0]}, ${colorValues[1]}, ${colorValues[2]})`
}
const breakRGBstring = (RGB) => (
  RGB.split(',').map(val=>parseInt(val.match(/\d+/)[0]))
)

const lerp = ( x,  in_min,  in_max,  out_min,  out_max) => (
  (x - in_min) * (out_max - out_min) / (in_max - in_min) + out_min
)

const interpolateColor = (fromRGB, toRGB, x) => {
  x = Math.abs(x);
  if(x === 0) return fromRGB;
  else {
    const from = breakRGBstring(fromRGB);
    const to = breakRGBstring(toRGB);
    const new_color = from.map((col, i) => 
      lerp(x, 0, 5, col, to[i]));
    
    return `rgb(${new_color[0]}, ${new_color[1]}, ${new_color[2]})`
  }
}

export const AreaGraph = ({data, min, max, primary_key, secondary_key, showSecondaryDataAsLine, x_dataKey, x_ticks, x_label, y_label, y_dataKey, y_ticks, duotone}) => {

  const gradientOffset = () => {
    const dataMax = Math.max(...data.map(d => d[primary_key]));
    const dataMin = Math.min(...data.map(d => d[primary_key]));
  
    if (dataMax <= duotone ? max : 0) return 0;
    if (dataMin >= duotone ? min : 0) return 1;
    return dataMax / (dataMax - dataMin);
  };

  const offset = gradientOffset();
  
  return (
    <div style={{ width: '100%', height: 300, overflow: 'visible' }}>
      <ResponsiveContainer>
        <ComposedChart
          width={500}
          height={450}
          data={data}
          margin={{
            top: 10, right: 30, left: 0, bottom: 50,
          }}
          baseValue={duotone ? 0 : min}
        >
          <CartesianGrid strokeDasharray="10 3" />
          <XAxis 
            interval={0}
            dataKey={x_dataKey}
            ticks={x_ticks}
            label={{ value: x_label, position: 'insideBottomRight', offset: -10 } }
          />
          <YAxis 
            domain={min && max && [min, max]}
            interval={0}
            dataKey={y_dataKey}
            ticks={y_ticks}
            label={{ value: y_label, angle: -90, position: 'insideLeft', offset: 20 }}
          />
          <Tooltip />
          <defs>
            <linearGradient 
              id="splitColor" 
              x1="0" 
              y1="0" 
              x2="0" 
              y2="1"
            >
              <stop offset={offset} stopColor={primaryColor} stopOpacity={1} />
              <stop offset={offset} stopColor={secondaryColor} stopOpacity={1} />
            </linearGradient>
          </defs>
          {secondary_key &&
              (showSecondaryDataAsLine ? 
              <Line type="monotone" strokeWidth={3} dataKey="comparativeScore" stroke={tertiaryColor} />
              : <Area 
              type="monotoneX" 
              dataKey={secondary_key} 
              stroke={getStrokeColor(tertiaryColor)} 
              fill={tertiaryColor}
              dot={{ fill: quaternaryColor }}
              fillOpacity={0.8}
            />)
          }
          <Area 
            type="monotoneX" 
            dataKey={primary_key} 
            stroke={getStrokeColor(primaryColor)}
            fill={duotone ? 'url(#splitColor)' : primaryColor}
            dot={{ fill: quaternaryColor }}
            fillOpacity={0.8}
          />
          <Legend />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}

export const BarGraph = ({score, min, max, ticks, height = 200}) => {
  const scoreIsPositive = score >= 0;
  const data = [{ score }]
  return (
    <div style={{ width: '100%', height: height, overflow: 'visible' }}>
      <ResponsiveContainer>
        <BarChart width={400} height={100} data={data} layout="vertical"  >
          <defs>
            <linearGradient id="colorUv" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor={scoreIsPositive ? tertiaryColor : interpolateColor(tertiaryColor, secondaryColor, score)} stopOpacity={0.8}/>
              <stop offset="100%" stopColor={scoreIsPositive ? interpolateColor(tertiaryColor, primaryColor, score) : tertiaryColor} stopOpacity={0.8}/>
            </linearGradient>
          </defs>
          <YAxis  
            type="category" 
            hide={true}
          />
          <XAxis 
            type="number"
            interval={0}
            domain={min && max && [min, max]}
            ticks={ticks}
          />
          <Legend />
          <Bar dataKey="score" fill="url(#colorUv)" animationDuration={animationDuration} />
        </BarChart>
      </ResponsiveContainer>
    </div> 
  )
}