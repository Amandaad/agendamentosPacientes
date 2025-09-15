document.getElementById("form-agendamento").addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.getElementById("nome").value;
  const telefone = document.getElementById("telefone").value;
  const endereco = document.getElementById("endereco").value;
  const anamnese = document.getElementById("anamnese").value;

  const lista = document.getElementById("lista-pacientes");
  const item = document.createElement("li");
  item.innerHTML = `<strong>Nome:</strong> ${nome} <br>
                    <strong>Telefone:</strong> ${telefone} <br>
                    <strong>Endereço:</strong> ${endereco} <br>
                    <strong>Anamnese:</strong> ${anamnese}`;
  lista.appendChild(item);

  this.reset();
});
