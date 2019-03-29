$('#cmd').click(function () {
  var filename = 'Hoang-Tuan-Resume.pdf';
  html2canvas(document.querySelector('#content'), { sclae: 1 }).then(canvas => {
    let pdf = new jsPDF('p', 'mm', 'a4');
    pdf.addImage(
      canvas.toDataURL('image/png'),
      'PNG',
      0, 0,
      211, 298);
    pdf.save(filename);
  });

});