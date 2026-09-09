import { supabase } from "./supa.js"

function formatPrice(price) {
  return price.toFixed(2).replace(".", ",") + " €"
}

function renderProducts(products) {
  const lista = document.querySelector("#lista-produtos")
  for (const produto of products) {
    const card = document.createElement("div")
    card.className = "card produto"

  if (produto.photo_url) {
      const foto = document.createElement("img")
      foto.src = produto.photo_url
      foto.alt = produto.name
      card.append(foto)
    }

    const nome = document.createElement("h3")
    nome.textContent = produto.name

    const preco = document.createElement("p")
    preco.textContent = formatPrice(produto.price)

    card.append(nome, preco)

    if (!produto.in_stock) {
      const badge = document.createElement("span")
      badge.className = "esgotado"
      badge.textContent = "esgotado"
      card.append(badge)
    }

    lista.append(card)
  }
}

async function loadProducts() {
  const { data, error } = await supabase.from("products").select("*")
  if (error) {
    console.log("Erro ao carregar produtos:", error.message)
    return
  }
  renderProducts(data)
}

loadProducts()