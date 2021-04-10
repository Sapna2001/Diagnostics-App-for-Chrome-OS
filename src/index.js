var options = { 
    series: [
      {
        name: "CPU Usage",
        data: [44, 55, 57, 56, 61, 58, 63, 60, 66],
      }
    ],
    chart: {
      type: "bar",
      height: 280, 
      sparkline: {
        enabled: true, 
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
      },
    },
    dataLabels: {
      enabled: true,
    },
    stroke: {
      show: true,
      width: 2,
    },
    xaxis: {
      categories: ["CPU1","CPU2","CPU3","CPU4","CPU5","CPU6","CPU7","CPU8"],
    },
    yaxis: {
      title: {
        text: "",
      },
    },
    fill: {
      opacity: 1,
    },
    tooltip: {
      y: {
        formatter: function (val) {
          return  val ;
        },
      },
    },
  };
  
  var chart = new ApexCharts(document.querySelector("#apex1"), options);
  chart.render();
  
  window.onload = function () {
  
    var dataPointsArray = [{x: 1, y: 5}, {x: 2, y: 10}, {x: 3, y: 15}, {x: 4, y: 20}, {x: 5, y: 25},{x: 6, y: 30}, 
                            {x: 7, y: 35}, {x: 8, y: 40}, {x: 9, y: 45}, {x: 10, y: 50}];   
  
    var chart = new CanvasJS.Chart("chart",{
        title :{
            text: "Live Data"
        },
        axisX: {						
            title: "Axis X Title"
        },
        axisY: {						
            title: "Units"
        },
        data: [{
            type: "line",
            dataPoints : dataPointsArray
        }]
    });
  
    chart.render();
    var xVal = dataPointsArray.length + 1;
    var yVal = 15;	
    var updateInterval = 300;
  
    var updateChart = function () {
        yVal = yVal +  Math.round(Math.random() * (100));
        dataPointsArray.push({x: xVal,y: yVal});
        
        xVal++;
        if (dataPointsArray.length >  10 ) {
            dataPointsArray.shift();				
        }

        chart.render();		
    };
  
    setInterval(function(){updateChart()}, updateInterval); 
  }

  if("serviceWorker" in navigator) {
    navigator.serviceWorker.register("serviceWorker.js").then(registration => {
        console.log("Service Worker Registered");
    }).catch(error => {
        console.log("Service Worker registration failed!!!");
        console.log(error);
    })
}