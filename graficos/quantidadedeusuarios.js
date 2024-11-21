async function quantidadedeusuarios(){
const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json'

const res = await fetch(url)
const dados = await res.json()
const nomeDasRedes = object.keys(dados)
const quantidadedeusuarios = object.values(dados)

const data = [
  {
    x: nomeDasRedes,
    y: quantidadedeusuarios,
    type: 'bar'
  }
]

const grafico = document.createElement('div')
grafico.className = 'grafico'
document.getElementByld('graficos-container').appendChild(grafico)
Plotly.newPlot(grafico,data)

}

quantidadedeusuarios()