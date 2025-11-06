// Declaração das constantes e variáveis
const primeiroNome = "João";
const sobrenome = "Silva";
let idade = 25;

// Criação da constante nomeCompleto com template literal
const nomeCompleto = `${primeiroNome} ${sobrenome}`;

// Exibindo no console as informações
console.log(`Nome completo do usuário: ${nomeCompleto}`);
console.log(`Idade do usuário: ${idade}`);

// Simulando o aniversário (incrementando idade em 1)
idade++;
console.log(`Nova idade do usuário após o aniversário: ${idade}`);

// Testando a imutabilidade
try {
  nomeCompleto = "Maria Oliveira"; // tentativa de modificar uma constante
} catch (erro) {
  console.log("Erro ao tentar modificar nomeCompleto:", erro.message);
}