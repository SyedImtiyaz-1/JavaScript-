const form = document.forms.myForm;
const submitForm = document.getElementById("btn");
const outputVal = document.getElementById("output");
const downloadBtn = document.getElementById("download-btn");

submitForm.addEventListener("click", function (e) {
  const name = form.elements.name.value;
  const mail = form.elements.email.value;
  const number = form.elements.number.value;

  const data = outputVal.textContent;

  const blob = new Blob([data], { type: "text/plain" });

  const url = URL.createObjectURL(blob);
  downloadBtn.href = url;
  downloadBtn.style.display = "block";

  const queryParams = `?name=${name}&email=${mail}&number=${number}`;
  window.open(`retrieve.html${queryParams}`, "_blank");

  e.preventDefault();
});