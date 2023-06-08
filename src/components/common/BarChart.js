import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

function ChartComponent({DarkMode}) {
  const chartRef = useRef(null);

  useEffect(() => {
    const options = {
      chart: {
        type: 'bar'
      },
      stroke:{
       show:false
      },
      plotOptions: {
        bar: {
          horizontal: false,
          borderRadius:5,
          borderRadiusApplication:'around',
          
        },
       
      },
      colors:['#CFC3FF','#5D37F6'],
      series: [
        {
          name: 'sales',
          data: [30, 40, 35, 50, 49, 60, 70, ]
        },
        {
          name: 'sales',
          data: [30, 40, 35, 50, 49, 60, 70, ]
        }
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
      }
     
    }
    ;

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, []);

  return <div className={` p-5 w-96 h-80 rounded-[3rem] ${DarkMode ? 'bg-stone-900' : 'bg-white'}`}  ref={chartRef} />;
}

export default ChartComponent;
