$("#cmd").click(function () {
  var filename = "Hoang-Tuan-Resume.pdf";
  html2canvas(document.querySelector("#content"), { scale: 1 }).then(
    (canvas) => {
      let pdf = new jsPDF("p", "px", [730, 1000]);
      pdf.addImage(canvas.toDataURL("image/png"), "PNG", 0, 0);
      pdf.save(filename);
    }
  );
});
