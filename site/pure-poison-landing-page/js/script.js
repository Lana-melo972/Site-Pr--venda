const topbar = document.querySelector(".topbar");
const form = document.querySelector("#captureForm");
const message = document.querySelector("#formMessage");

window.addEventListener("scroll", () => {
  topbar.classList.toggle("scrolled", window.scrollY > 30);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value.trim();
  if (!email) return;

  // Demo: stores the email locally. Connect this handler to your
  // backend, CRM or form service before publishing.
  const leads = JSON.parse(localStorage.getItem("purePoisonLeads") || "[]");
  if (!leads.includes(email)) leads.push(email);
  localStorage.setItem("purePoisonLeads", JSON.stringify(leads));

  message.textContent = "Cadastro recebido. Você será avisado quando a pré-venda abrir.";
  form.reset();
});
