// ========================================
// MEU PRIMEIRO SCRIPT JAVASCRIPT
// ========================================

console.log("=== BEM-VINDO AO JAVASCRIPT! ===");
console.log("");

// VARIÁVEIS
let nome = "João Silva";
let idade = 25;
let altura = 1.75;
const cidade = "São Paulo";

console.log("👤 Nome:", nome);
console.log("🎂 Idade:", idade, "anos");
console.log("📏 Altura:", altura, "m");
console.log("🏙️  Cidade:", cidade);
console.log("");

// CÁLCULOS
let anoNascimento = 2025 - idade;
console.log("📅 Ano de nascimento:", anoNascimento);
console.log("");

// CONDICIONAIS
console.log("=== VERIFICAÇÕES ===");

if (idade >= 18) {
    console.log("✅ Maior de idade");
} else {
    console.log("❌ Menor de idade");
}

if (altura > 1.70) {
    console.log("✅ Altura acima da média");
}

// LOOPS (igual C++!)
console.log("");
console.log("=== CONTAGEM REGRESSIVA ===");

for (let i = 5; i >= 1; i--) {
    console.log(i);
}
console.log("🚀 DECOLANDO!");

console.log("");
console.log("=== FIM DO SCRIPT ===");