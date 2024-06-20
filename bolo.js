const fotoGrande = document.getElementById('fotogrande')
const titulo = document.getElementById('titulo')
const receita = document.getElementById('receita')
const preco = document.getElementById('preco')

const bolos = [
    ['Bolo de Pote Floresta Negra', '<li>2 xícaras (chá) de açúcar </li><li>4 ovos </li><li>1 xícara (chá) de chocolate em pó</li><li>1 xícara (chá) de água </li><li>1 xícara (chá) de óleo </li><li>3 xícaras (chá) de farinha de trigo </li><li>1 colher (sopa) de fermento em pó </li><li>2 xícaras (chá) de creme de leite fresco gelado </li><li>3 colheres (sopa) de açúcar </li><li>1 xícara (chá) de cerejas picadas</li>', 'R$ 9,99', 'bolopote1.png'],
    ['Bolo de pote Maracuja', ' <li>2 xícaras de farinha de trigo (280 gramas)</li><li>2 xícaras de açúcar (320 gramas)</li> <li>1 xícara de leite (240 mililitros)</li><li>3 ovos</li> <li>2 colheres de sopa de manteiga sem sal</li><li> 1 colher de sopa de fermento em pó (colher rasa)</li><li>Para o mousse de maracujá:</li><li> 1 lata de leite condensado</li><li> 1 lata de creme de leite fresco (medida da lata de leite condensado)</li><li> ½ lata de suco natural de maracujá(medida da lata de leite condensado)</li><li>1 maracujá (polpa)</li>', 'R$ 7,99', 'bolopote2.png'],
    ['Bolo de pote Ninho com nutella', '<li>2 xícaras de farinha de trigo (280 gramas)</li><li>1 xícara de açúcar refinado</li><li>1 xícara de leite morno</li><li>4 colheres de sopa de óleo</li><li>2 ovos</li><li>1 colher de sopa de fermento em pó (colher rasa)</li><li>1 pitada de sal</li><li> 200 mililitros de chantilly para bater ou creme de leite fresco</li><li>6 colheres de sopa de leite em pó</li><li>3 colheres de sopa de leite condensado</li>', 'R$ 9,99', 'bolopote3.png'],
]

function trocaFoto(value) {
    switch (value) {
        case 1:
            fotoGrande.src = `assets/${bolos[0][3]}`
            titulo.innerHTML = bolos[0][0]
            receita.innerHTML = bolos[0][1]
            preco.innerHTML = bolos[0][2]
            break
        case 2:
            fotoGrande.src = `assets/${bolos[1][3]}`
            titulo.innerHTML = bolos[1][0]
            receita.innerHTML = bolos[1][1]
            preco.innerHTML = bolos[1][2]
            break
        case 3:
            fotoGrande.src = `assets/${bolos[2][3]}`
            titulo.innerHTML = bolos[2][0]
            receita.innerHTML = bolos[2][1]
            preco.innerHTML = bolos[2][2]
            break

    }
}