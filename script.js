var drawTopItems = function (context) {
  var chartType = document.getElementById("ChartType");

  chartType.innerHTML = "Populiariausios prekės";

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["15:00","16:00","17:00","18:00","19:00","20:00","21:00"],
      datasets: [{ 
        data: [86,114,106,106,107,111,133,221,783,2478],
        label: "Prekė 1",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282,350,411,502,635,809,947,1402,3700,5267],
        label: "Prekė 2",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [168,170,178,190,203,276,408,547,675,734],
        label: "Prekė 3",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [40,20,10,16,24,38,74,167,508,784],
        label: "Prekė 4",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [6,3,2,2,7,26,82,172,312,433],
        label: "Prekė 5",
        borderColor: "#c45850",
        fill: false
      }
    ]
    }
  });
}

var drawTopRegions = function () {
  var chartType = document.getElementById("ChartType");

  chartType.innerHTML = "Populiariausi regionai";

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["15:00","16:00","17:00","18:00","19:00","20:00","21:00"],
      datasets: [{ 
        data: [86,114,106,106,107,345,743,54,123,553],
        label: "Maxima ten kur prie",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [282,350,411,502,432,523,632,743,743,213],
        label: "Maxima nu taa",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [168,170,178,235,375,235,735,623,58,734],
        label: "Maxima kažkur ten turi būti",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [40,20,10,346,743,38,234,742,508,784],
        label: "Maxima?",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [6,3,235,632,23,234,45,172,23,433],
        label: "Maxima, kurią neseniai uždarė",
        borderColor: "#c45850",
        fill: false
      }
    ]
    }
  });
}

var drawOneItem = function () {
  var chartType = document.getElementById("ChartType");

  chartType.innerHTML = "Vienos prekės populiarumas";

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["15:00","16:00","17:00","18:00","19:00","20:00","21:00"],
      datasets: [{ 
        data: [86,114,106,106,107,345,743,54,123,553],
        label: "Akmuo 1kg",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
    }
  });
}

var drawTopMatches = function () {
  var chartType = document.getElementById("ChartType");

  chartType.innerHTML = "Kartu perkamos";

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["Saulėgrąžų sėklos", "Duona", "Cigarėtės Marlboro Gold", "Žiebtuvėlis BiC", "Alus, bet dar pigesnis", "Teleloto", "Logika ir dirbtinis intelektas"],
      datasets: [{ 
        data: [553,552,463,437,400,345,325,200,123,1],
        label: "Alus",
        borderColor: "#3e95cd",
        fill: false
      }
    ]
    }
  });
}

var drawSum = function () {
  var chartType = document.getElementById("ChartType");

  chartType.innerHTML = "Čekio suma";

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["15:00","16:00","17:00","18:00","19:00","20:00","21:00"],
      datasets: [{ 
        data: [86,114,106,106,107,345,743,54,123,553],
        label: "Čekio suma",
        borderColor: "#3e95cd",
        fill: false
      }]
    }
  });
}

var drawItemMatches = function () {
  var chartType = document.getElementById("ChartType");

  chartType.innerHTML = "Prekių suderinamumas";

  var ctx = document.getElementById("myChart");
  var myChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ["15:00","16:00","17:00","18:00","19:00","20:00","21:00"],
      datasets: [{ 
        data: [643,114,743,123,132,643,743,54,743,123],
        label: "Prekė 1",
        borderColor: "#3e95cd",
        fill: false
      }, { 
        data: [643,743,643,214,743,743,421,643,743,213],
        label: "Prekė 2",
        borderColor: "#8e5ea2",
        fill: false
      }, { 
        data: [24,170,624,642,321,632,735,623,432,734],
        label: "Prekė 3",
        borderColor: "#3cba9f",
        fill: false
      }, { 
        data: [40,743,10,346,632,132,85,236,508,784],
        label: "Prekė 4",
        borderColor: "#e8c3b9",
        fill: false
      }, { 
        data: [83,3,235,632,743,643,45,172,23,433],
        label: "Prekė 5",
        borderColor: "#c45850",
        fill: false
      }
    ]
    }
  });
}