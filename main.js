// site do Minimercado da Família 
console.log("Bem-vindo ao Minimercado da Família!")
console.log("Hoje o Pão custa:")
console.log(4.50)

 const nomeDaLoja = "Minimercado da Família"

const Product = [  
    { name: "Pão" , price: 1.20 , stock: true },
    { name: "Leite" , price: 2.20 , stock: false },
    { name: "Agua" , price: 0.60 , stock: true },
    { name: "Arroz" , price: 2.99 , stock: true },
    { name: "Queijo" , price: 4.99 , stock: false },
    { name: "Café" , price: 1.99 , stock: false },
]
console.log( `Primeiro produto: ${Product[0].name} - ${Product[0].price
} ` )
console.log(`Temos ${Product.length} Produtos na loja`)

Product.push({ name: "Ovos", price: 2.40, emStock: true })
console.log(`Agora temos ${Product.length} produtos`)

const produtos = [
  { name: "Pão", price: 4.50, emStock: true },
  { name: "Leite", price: 3.20, emStock: true },
  { name: "Queijo", price: 12.90, emStock: true },
  { name: "Água", price: 1.20, emStock: true },
  { name: "Arroz", price: 5.80, emStock: true },
  { name: "Café", price: 8.90, emStock: false },
];

function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " €";
}

function findProduct(name) {
  return produtos.find(function (produto) {
    return produto.name === name;
  });
}

console.log("Bem-vindo ao Minimercado da Família!");
console.log(`${produtos[0].name} — ${formatPrice(produtos[0].price)}`);
console.log(`${produtos[2].name} — ${formatPrice(produtos[2].price)}`);

const cafe = findProduct("Café");
console.log(`Encontrado: ${cafe.name} por ${formatPrice(cafe.price)}`);

function printCatalog(produtos) {
  for (const produto of produtos) {
    if (produto.emStock) {
      console.log(`${produto.name} — ${formatPrice(produto.price)}`)
    } else {
      console.log(`${produto.name} — esgotado`)
    }
  }
  const emStockList = produtos.filter(produto => produto.emStock)
  console.log(`Em stock: ${emStockList.length} de ${produtos.length} produtos`)
}

printCatalog(produtos)

const obrigado = document.createElement("p")
obrigado.textContent = "Obrigado pela visita "
document.querySelector("footer").append(obrigado)

const especial = produtos[new Date().getDay() % produtos.length]

document.querySelector("#especial h2").textContent = "special de hoje"
document.querySelector("#especial p").textContent =
  `${especial.name} por apenas ${formatPrice(especial.price)}!`
  import { supabase } from "./supa.js";

async function loadStoreInfo() {
  const { data, error } = await supabase.from("store_info").select("*").single();
  if (error) {
    console.log("Erro ao ler store_info:", error.message);
    return;
  }

  const lista = document.querySelector("#horario ul");
  lista.innerHTML = "";
  for (const linha of data.opening_hours.split(";")) {
    const li = document.createElement("li");
    li.textContent = linha.trim();
    lista.append(li);
  }

  document.querySelector("#endereco").textContent = data.address;
  document.querySelector("#telefone").textContent = data.phone;
}

loadStoreInfo();