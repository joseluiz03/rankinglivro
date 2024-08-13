function abrirMenu(){
    document.getElementById("menu-Oculto").style.width="400px";
    document.getElementById("principal").style.marginLeft="0px";
}
function fecharMenu(){
    document.getElementById("menu-Oculto").style.width="0vw";
    document.getElementById("principal").style.marginLeft="0vw";
}

// Código dos gráficos
google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
    var data1 = google.visualization.arrayToDataTable([
        ['Livro', 'Leituras'],
        ['Maze Runner', 100],
        ['Vidas Secas', 85],
        ['Senhora', 70],
        ['O Guarani', 65],
        ['Dom Casmurro', 50]
    ]);

    var options1 = {
        title: 'LIVROS MAIS LIDOS' ,
        titleTextStyle: { color: 'green', fontSize: 25,},
        bars: 'vertical',
        /* hAxis: { title: 'Livros' },
        vAxis: { title: 'Leituras' }, */
        bar: { groupWidth: '55%' },
        colors: ['#4d4d4d'],
        backgroundColor: 'transparent'
    };

    var chart1 = new google.visualization.ColumnChart(document.getElementById('chart_livros'));
    chart1.draw(data1, options1);

    var data2 = google.visualization.arrayToDataTable([
        ['Curso', 'Leituras'],
        ['Enfermagem', 90],
        ['Informática', 75],
        ['Comércio', 60],
        ['Administração', 45]
    ]);

    var options2 = {
        title: 'CURSO COM MAIS LEITORES',
        titleTextStyle: { color: 'green', fontSize: 25, },
        
        bars: 'vertical',
       /*  hAxis: { title: 'Cursos' },
        vAxis: { title: 'Leituras' }, */
        bar: { groupWidth: '55%' },
        colors: ['#0000FF'],
        backgroundColor: 'transparent'
    };

    var chart2 = new google.visualization.ColumnChart(document.getElementById('chart_cursos'));
    chart2.draw(data2, options2);
}


/* document.querySelectorAll('.dropdown-btn').forEach(button => {
    button.addEventListener('click', function() {
        const dropdownContent = this.nextElementSibling;
        dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
    });
});

window.onclick = function(event) {
    if (!event.target.matches('.dropdown-btn')) {
        document.querySelectorAll('.dropdown-content').forEach(content => {
            if (content.style.display === 'block') {
                content.style.display = 'none';
            }
        });
    }
}; */

/* outros graficos para teste */

/* 
  const ctx = document.getElementById('myChart');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
  const cx = document.getElementById('Chart');

  new Chart(cx, {
    type: 'bar',
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
 */