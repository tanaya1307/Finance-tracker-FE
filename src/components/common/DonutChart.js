import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

 export default function DonutChart({DarkMode}) {
  const chartRef = useRef(null);
    
      useEffect(() => {
        const options = {
            chart: {
              type: 'donut',
              height:200
            },
            stroke:{
                show:false
            },
            plotOptions: {
                pie: {
                    startAngle:10,
                   
                    donut: {
                      size: '80%',
                      dataLabels: {
                        enabled: false
                      }
           
                    }
            }},
            colors:['#CFC3FF','#5D37F6'],
            series: [44, 55,],
            responsive: [{
                breakpoint: 480,
                options: {
                  chart: {
                    width: 180,
                    height:180
                  },
                  legend: {
                    position: 'bottom'
                  }
                }
              }]
          
          }
          ;
        const chart = new ApexCharts(chartRef.current, options);
        chart.render();
    
        return () => {
          chart.destroy();
        };
      }, []);
    

  return <div className={`w-full h-full rounded-[3rem] ${DarkMode ? 'bg-stone-900' : 'bg-white'}`}  ref={chartRef} />;
}
