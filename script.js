const fotoGrande = document.getElementById('fotogrande')
const titulo = document.getElementById('titulo')
const receita = document.getElementById('receita')
const preco = document.getElementById('preco')

const bolos = [
    ['Bolo de Cenoura', '<li>3 cenouras médias (250g) </li><li> 4 ovos</li><li> meia xícara(chá) de óleo</li><li> 2 e meia xícaras(chá) de farinha de trigo</li><li> 2 xícaras(chá) de açúcar</li><li> 1 colher(sopa) de fermento em pó</li><li> Cobertura de Brigadeiro</li><li> 1 Leite MOÇA®(lata ou caixinha) 395 g</li><li> 1 colher(sopa) de manteiga</li><li> meia xícara(chá) de Chocolate em Pó NESTLÉ</li>', 'R$ 45,00', 'bolo-cenoura.png'],
    ['Bolo de Brigadeiro', '<li>5 ovos</li><li>1 xícara (chá) de açúcar</li><li>1 xícara (chá) de Leite Líquido NINHO</li><li>2 xícaras (chá) de farinha de trigo</li><li>meia xícara (chá) de Chocolate em Pó</li><li>1 colher (sopa) de fermento em pó</li><li>2 Leite MOÇA® (lata ou caixinha) 395g</li><li>2 colheres (sopa) de manteiga</li><li>meia xícara (chá) de chocolate granulado</li><li>meia xícara (chá) de Chocolate em Pó </li>', 'R$ 45,00', 'bolo-brigadeiro.png'],
    ['Bolo de Churros', '<li>3 ovos</li><li>3 colheres de margarina</li><li>1 xícara de açúcar</li><li>2 xícaras de farinha de trigo </li><li>1/2 xícara de leite</li><li>1/2 colher de canela em pó</li><li>1 colher (sopa) de fermento em pó</li><li>doce de leite</li><li>açucar</li><li>canela em pó</li>', 'R$ 50,00', 'bolo-churros.png'],
    ['Bolo de Laranja', '<li>2 laranjas</li><li>2 ovos</li><li>1 xícara (chá) de óleo</li><li>1½ xícara (chá) de açúcar</li><li>2 xícaras (chá) de farinha de trigo</li><li>2 colheres (chá) de fermento em pó</li><li>1 xícara (chá) de açúcar de confeiteiro</li><li>20 flores de mel comestíveis para decorar</li><li>3 pedaços de casca de laranja cristalizada para decora</li>', 'R$ 35,00', 'bolo-laranja.png'],
    ['Bolo de Limão', '<li>3 ovos</li><li>1 e 1/2 xícara (chá) de açúcar</li><li>1/2 xícara de (chá) de óleo</li><li>1 pitada de sal</li><li>1/2 xícara (chá) de leite</li><li>raspas de 1 limão</li><li>1/2 xícara (chá) de suco de limão</li><li>2 xícaras (chá) de farinha de trigo (sem fermento)</li><li>1 colher (sopa) fermento químico em pó</li><li>1 lata de leite condensado</li><li>60 ml de suco de limão</li><li>1 colher (sopa) de creme de leite</li>', 'R$ 45,00', 'bolo-limao.png'],
    ['Bolo de Prestígio', '<li>3 ovos</li><li> 1/2 xícara (chá) de óleo</li><li>1 xícara (chá) de leite</li><li> 1 xícara (chá) de açúcar</li><li> 1 xícara (chá) de chocolate em pó</li><li> 2 xícaras (chá) de farinha de trigo </li><li>1 colher (sopa) de fermento </li><li>coco ralado a gosto </li><li> 1 lata de leite condensado</li><li> 1 colher (sopa) de margarina</li><li> 100 g de coco ralado </li>', 'R$ 45,00', 'bolo-prestigio.png']
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
        case 4:
            fotoGrande.src = `assets/${bolos[3][3]}`
            titulo.innerHTML = bolos[3][0]
            receita.innerHTML = bolos[3][1]
            preco.innerHTML = bolos[3][2]
            break
        case 5:
            fotoGrande.src = `assets/${bolos[4][3]}`
            titulo.innerHTML = bolos[4][0]
            receita.innerHTML = bolos[4][1]
            preco.innerHTML = bolos[4][2]
            break
        case 6:
            fotoGrande.src = `assets/${bolos[5][3]}`
            titulo.innerHTML = bolos[5][0]
            receita.innerHTML = bolos[5][1]
            preco.innerHTML = bolos[5][2]
            break

    }
}