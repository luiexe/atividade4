/*
 * MeuSom - Formulario de Interesses Musicais
 * Autor: Luis Augusto Petrochewski
 *
 * Este arquivo faz:
 *  1. monta os checkboxes dos albuns (lista da atividade de tabelas), agrupados por decada
 *  2. define a data de nascimento minima e maxima
 *  3. aplica a mascara do telefone
 *  4. valida todos os campos e mostra o erro do lado de cada um
 *  5. mostra um resumo dos erros acima dos botoes (clicar leva ao campo)
 *  6. se estiver tudo certo, mostra um resumo dos dados para confirmar o envio
 */


// mesma lista da atividade de tabelas
var albuns = [
  { posicao: 1,  artista: "Pink Floyd",            album: "The Dark Side of the Moon",             ano: 1973 },
  { posicao: 2,  artista: "Led Zeppelin",          album: "Led Zeppelin IV",                       ano: 1971 },
  { posicao: 3,  artista: "AC/DC",                 album: "Back in Black",                         ano: 1980 },
  { posicao: 4,  artista: "Fleetwood Mac",         album: "Rumours",                               ano: 1977 },
  { posicao: 5,  artista: "Alanis Morissette",     album: "Jagged Little Pill",                    ano: 1995 },
  { posicao: 6,  artista: "Pink Floyd",            album: "The Wall",                              ano: 1979 },
  { posicao: 7,  artista: "Dire Straits",          album: "Brothers in Arms",                      ano: 1985 },
  { posicao: 8,  artista: "Guns N' Roses",         album: "Appetite For Destruction",              ano: 1987 },
  { posicao: 9,  artista: "Metallica",             album: "Metallica",                             ano: 1991 },
  { posicao: 10, artista: "Eagles",                album: "Hotel California",                      ano: 1976 },
  { posicao: 11, artista: "Bruce Springsteen",     album: "Born in the U.S.A.",                    ano: 1984 },
  { posicao: 12, artista: "Nirvana",               album: "Nevermind",                             ano: 1991 },
  { posicao: 13, artista: "Meat Loaf",             album: "Bat Out of Hell",                       ano: 1977 },
  { posicao: 14, artista: "U2",                    album: "The Joshua Tree",                       ano: 1987 },
  { posicao: 15, artista: "The Beatles",           album: "Abbey Road",                            ano: 1969 },
  { posicao: 16, artista: "Santana",               album: "Supernatural",                          ano: 1999 },
  { posicao: 17, artista: "Def Leppard",           album: "Hysteria",                              ano: 1987 },
  { posicao: 18, artista: "The Beatles",           album: "Sgt. Pepper's Lonely Hearts Club Band", ano: 1967 },
  { posicao: 19, artista: "Eric Clapton",          album: "Unplugged",                             ano: 1992 },
  { posicao: 20, artista: "Bon Jovi",              album: "Slippery When Wet",                     ano: 1986 },
  { posicao: 21, artista: "Phil Collins",          album: "No Jacket Required",                    ano: 1985 },
  { posicao: 22, artista: "Boston",                album: "Boston",                                ano: 1976 },
  { posicao: 23, artista: "Hootie & The Blowfish", album: "Cracked Rear View",                     ano: 1994 },
  { posicao: 24, artista: "Pink Floyd",            album: "Wish You Were Here",                    ano: 1975 },
  { posicao: 25, artista: "Led Zeppelin",          album: "Led Zeppelin II",                       ano: 1969 },
  { posicao: 26, artista: "Linkin Park",           album: "Hybrid Theory",                         ano: 2000 },
  { posicao: 27, artista: "Phil Collins",          album: "... But Seriously",                     ano: 1989 },
  { posicao: 28, artista: "The Who",               album: "Tommy",                                 ano: 1969 },
  { posicao: 29, artista: "Green Day",             album: "Dookie",                                ano: 1994 },
  { posicao: 30, artista: "Simon & Garfunkel",     album: "Bridge Over Troubled Water",            ano: 1970 },
  { posicao: 31, artista: "The Beatles",           album: "The Beatles",                           ano: 1968 },
  { posicao: 32, artista: "Guns N' Roses",         album: "Use Your Illusion II",                  ano: 1991 },
  { posicao: 33, artista: "Guns N' Roses",         album: "Use Your Illusion I",                   ano: 1991 },
  { posicao: 34, artista: "No Doubt",              album: "Tragic Kingdom",                        ano: 1995 },
  { posicao: 35, artista: "The Cranberries",       album: "No Need to Argue",                      ano: 1994 },
  { posicao: 36, artista: "Led Zeppelin",          album: "Houses of the Holy",                    ano: 1973 },
  { posicao: 37, artista: "Oasis",                 album: "(What's the Story) Morning Glory?",     ano: 1995 },
  { posicao: 38, artista: "U2",                    album: "Achtung Baby",                          ano: 1991 },
  { posicao: 39, artista: "Peter Frampton",        album: "Frampton Comes Alive!",                 ano: 1976 },
  { posicao: 40, artista: "Supertramp",            album: "Breakfast in America",                  ano: 1979 },
  { posicao: 41, artista: "Evanescence",           album: "Fallen",                                ano: 2003 },
  { posicao: 42, artista: "Red Hot Chili Peppers", album: "Californication",                       ano: 1999 },
  { posicao: 43, artista: "Nirvana",               album: "MTV Unplugged in New York",             ano: 1994 },
  { posicao: 44, artista: "Blink-182",             album: "Enema of the State",                    ano: 1999 },
  { posicao: 45, artista: "Blondie",               album: "Parallel Lines",                        ano: 1978 },
  { posicao: 46, artista: "R.E.M.",                album: "Out of Time",                           ano: 1991 },
  { posicao: 47, artista: "Led Zeppelin",          album: "Led Zeppelin",                          ano: 1969 },
  { posicao: 48, artista: "Metallica",             album: "... And Justice for All",               ano: 1988 },
  { posicao: 49, artista: "Pearl Jam",             album: "Ten",                                   ano: 1991 },
  { posicao: 50, artista: "Phil Collins",          album: "Face Value",                            ano: 1981 },
  { posicao: 51, artista: "Radiohead",             album: "OK Computer",                           ano: 1997 },
  { posicao: 52, artista: "Arctic Monkeys",        album: "AM",                                    ano: 2013 },
  { posicao: 53, artista: "Foo Fighters",          album: "The Colour and the Shape",              ano: 1997 },
  { posicao: 54, artista: "Daft Punk",             album: "Random Access Memories",                ano: 2013 },
  { posicao: 55, artista: "The Strokes",           album: "Is This It",                            ano: 2001 }
];

var QTD_ALBUNS = 3;
var IDADE_MINIMA = 18;

// Maior idade registrada nos ultimos 10 anos: Kane Tanaka (Japao)
var IDADE_MAXIMA = 119;

var TIPOS_FOTO = ["image/png", "image/jpeg", "image/webp"];
var TAMANHO_MAX_FOTO = 2 * 1024 * 1024; // 2 MB

//ELEMENTOS

var form = document.getElementById("formulario");
var campoNome = document.getElementById("nome");
var campoEmail = document.getElementById("email");
var campoTelefone = document.getElementById("telefone");
var campoNascimento = document.getElementById("nascimento");
var campoFoto = document.getElementById("foto");
var campoArtistas = document.getElementById("artistas");
var campoCantor = document.getElementById("cantor");
var listaAlbuns = document.getElementById("lista-albuns");
var contadorAlbuns = document.getElementById("contador-albuns");

var resumoErros = document.getElementById("resumo-erros");
var listaErros = document.getElementById("lista-erros");

var secaoConfirmacao = document.getElementById("confirmacao");
var resumoDados = document.getElementById("resumo-dados");
var secaoSucesso = document.getElementById("sucesso");

var urlFoto = null;            // endereco temporario da foto para mostrar no resumo
var limparSemPerguntar = false; // usado quando o reset e feito pelo proprio codigo

// ===================== DATAS =====================

function doisDigitos(n) {
  return n < 10 ? "0" + n : String(n);
}

// Date -> "aaaa-mm-dd" (formato do input date)
function dataParaIso(data) {
  return data.getFullYear() + "-" + doisDigitos(data.getMonth() + 1) + "-" + doisDigitos(data.getDate());
}

// "aaaa-mm-dd" -> Date. Nao usamos new Date("aaaa-mm-dd") porque ele
// considera o horario UTC e no Brasil a data volta um dia.
function isoParaData(texto) {
  var partes = texto.split("-");
  return new Date(Number(partes[0]), Number(partes[1]) - 1, Number(partes[2]));
}

// "aaaa-mm-dd" -> "dd/mm/aaaa"
function isoParaBr(texto) {
  var partes = texto.split("-");
  return partes[2] + "/" + partes[1] + "/" + partes[0];
}

function calcularIdade(nascimento) {
  var hoje = new Date();
  var idade = hoje.getFullYear() - nascimento.getFullYear();
  return idade;
}

// coloca min e max no input de data, assim o calendario ja bloqueia datas erradas
function definirLimitesData() {
  var hoje = new Date();
  var maxima = new Date(hoje.getFullYear() - IDADE_MINIMA, hoje.getMonth(), hoje.getDate());
  // um dia depois de quem faria IDADE_MAXIMA + 1 anos hoje
  var minima = new Date(hoje.getFullYear() - IDADE_MAXIMA - 1, hoje.getMonth(), hoje.getDate() + 1);

  campoNascimento.max = dataParaIso(maxima);
  campoNascimento.min = dataParaIso(minima);
}

//ALBUNS

// cria um fieldset para cada decada com os checkboxes dos albuns dela
function montarAlbuns() {
  var decadas = {};
  var listaDecadas = [];

  for (var i = 0; i < albuns.length; i++) {
    var decada = Math.floor(albuns[i].ano / 10) * 10;
    if (!decadas[decada]) {
      decadas[decada] = [];
      listaDecadas.push(decada);
    }
    decadas[decada].push(albuns[i]);
  }

  listaDecadas.sort(function (a, b) { return a - b; });

  for (var d = 0; d < listaDecadas.length; d++) {
    var albunsDecada = decadas[listaDecadas[d]];
    albunsDecada.sort(function (a, b) { return a.ano - b.ano; });

    var fieldset = document.createElement("fieldset");
    var legend = document.createElement("legend");
    legend.textContent = "Anos " + listaDecadas[d];
    fieldset.appendChild(legend);

    var opcoes = document.createElement("div");
    opcoes.className = "opcoes-decada";

    for (var j = 0; j < albunsDecada.length; j++) {
      var item = albunsDecada[j];

      var label = document.createElement("label");
      var checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "albuns";
      checkbox.value = item.posicao;

      var texto = document.createElement("span");
      texto.textContent = item.album + " ";
      var info = document.createElement("span");
      info.className = "album-info";
      info.textContent = "(" + item.artista + ", " + item.ano + ")";
      texto.appendChild(info);

      label.appendChild(checkbox);
      label.appendChild(texto);
      opcoes.appendChild(label);
    }

    fieldset.appendChild(opcoes);
    listaAlbuns.appendChild(fieldset);
  }
}

function albunsMarcados() {
  return form.querySelectorAll('input[name="albuns"]:checked');
}

function atualizarContador() {
  var qtd = albunsMarcados().length;
  contadorAlbuns.textContent = qtd + " de " + QTD_ALBUNS + " selecionados";
  contadorAlbuns.classList.toggle("completo", qtd === QTD_ALBUNS);
  contadorAlbuns.classList.toggle("excedido", qtd > QTD_ALBUNS);
}

function buscarAlbum(posicao) {
  for (var i = 0; i < albuns.length; i++) {
    if (albuns[i].posicao === Number(posicao)) {
      return albuns[i];
    }
  }
  return null;
}

//MASCARA DO TELEFONE
// vai formatando enquanto digita: (41) 99999-9999 ou (41) 3333-3333
function mascaraTelefone() {
  var numeros = campoTelefone.value.replace(/\D/g, "").slice(0, 11);
  var resultado = "";

  if (numeros.length === 0) {
    resultado = "";
  } else if (numeros.length <= 2) {
    resultado = "(" + numeros;
  } else if (numeros.length <= 6) {
    resultado = "(" + numeros.slice(0, 2) + ") " + numeros.slice(2);
  } else if (numeros.length <= 10) {
    resultado = "(" + numeros.slice(0, 2) + ") " + numeros.slice(2, 6) + "-" + numeros.slice(6);
  } else {
    resultado = "(" + numeros.slice(0, 2) + ") " + numeros.slice(2, 7) + "-" + numeros.slice(7);
  }

  campoTelefone.value = resultado;
}

//VALIDACOES
// cada funcao devolve "" se estiver tudo certo, ou a mensagem do problema

function validarNome() {
  var valor = campoNome.value.trim();
  if (valor === "") {
    return "Informe seu nome.";
  }
  if (valor.length < 3) {
    return "O nome precisa ter pelo menos 3 caracteres.";
  }
  if (!/^[A-Za-zÀ-ÖØ-öø-ÿ' ]+$/.test(valor)) {
    return "O nome deve ter apenas letras e espaços.";
  }
  if (valor.split(/\s+/).length < 2) {
    return "Informe nome e sobrenome.";
  }
  return "";
}

function validarEmail() {
  var valor = campoEmail.value.trim();
  if (valor === "") {
    return "Informe seu e-mail.";
  }
  if (!/^[^\s@]+@[^\s@]+\.[A-Za-z]{2,}$/.test(valor)) {
    return "E-mail inválido. Use o formato nome@dominio.com.";
  }
  return "";
}

function validarTelefone() {
  var valor = campoTelefone.value.trim();
  if (valor === "") {
    return "Informe seu telefone.";
  }
  if (!/^\(\d{2}\) \d{4,5}-\d{4}$/.test(valor)) {
    return "Telefone incompleto. Use (DDD) 99999-9999 ou (DDD) 3333-3333.";
  }
  if (valor.charAt(1) === "0") {
    return "O DDD não pode começar com 0.";
  }
  return "";
}

function validarNascimento() {
  // badInput = o usuario digitou uma data pela metade ou impossivel
  if (campoNascimento.validity.badInput) {
    return "Data de nascimento incompleta ou inválida.";
  }
  var valor = campoNascimento.value;
  if (valor === "") {
    return "Informe sua data de nascimento.";
  }
  var data = isoParaData(valor);
  if (data > new Date()) {
    return "A data de nascimento não pode estar no futuro.";
  }
  var idade = calcularIdade(data);
  if (idade < IDADE_MINIMA) {
    return "Somente maiores de 18 anos podem enviar os dados.";
  }
  if (idade > IDADE_MAXIMA) {
    return "Data muito antiga. A data mínima permitida é " + isoParaBr(campoNascimento.min) +
           " (a maior idade registrada nos últimos 10 anos foi de " + IDADE_MAXIMA + " anos).";
  }
  return "";
}

function validarFoto() {
  var arquivo = campoFoto.files[0];
  if (!arquivo) {
    return "Escolha uma foto de perfil.";
  }
  if (TIPOS_FOTO.indexOf(arquivo.type) === -1) {
    return "A foto precisa ser uma imagem PNG, JPG ou WEBP.";
  }
  if (arquivo.size > TAMANHO_MAX_FOTO) {
    return "A foto tem " + (arquivo.size / 1024 / 1024).toFixed(1).replace(".", ",") +
           " MB. O máximo é 2 MB.";
  }
  return "";
}

function validarEstilos() {
  var marcados = form.querySelectorAll('input[name="estilos"]:checked');
  if (marcados.length === 0) {
    return "Escolha pelo menos 1 estilo musical.";
  }
  return "";
}

// separa o texto do textarea em uma lista, ignorando linhas vazias
function lerArtistas() {
  var linhas = campoArtistas.value.split("\n");
  var lista = [];
  for (var i = 0; i < linhas.length; i++) {
    var nome = linhas[i].trim();
    if (nome !== "") {
      lista.push(nome);
    }
  }
  return lista;
}

function validarArtistas() {
  var lista = lerArtistas();
  if (lista.length === 0) {
    return "Informe os artistas que você gosta.";
  }
  if (lista.length < 3) {
    return "Informe pelo menos 3 artistas, um por linha (você informou " + lista.length + ").";
  }
  var vistos = [];
  for (var i = 0; i < lista.length; i++) {
    if (lista[i].length < 2) {
      return "O nome \"" + lista[i] + "\" (linha " + (i + 1) + ") é curto demais.";
    }
    var minusculo = lista[i].toLowerCase();
    if (vistos.indexOf(minusculo) !== -1) {
      return "O artista \"" + lista[i] + "\" aparece repetido.";
    }
    vistos.push(minusculo);
  }
  return "";
}

function validarCantor() {
  if (campoCantor.value === "") {
    return "Selecione quem é o(a) melhor cantor(a) da história.";
  }
  return "";
}

function validarAlbuns() {
  var qtd = albunsMarcados().length;
  if (qtd === 0) {
    return "Selecione " + QTD_ALBUNS + " álbuns.";
  }
  if (qtd !== QTD_ALBUNS) {
    return "Selecione exatamente " + QTD_ALBUNS + " álbuns (você marcou " + qtd + ").";
  }
  return "";
}

// todos os campos na ordem em que aparecem na tela.
// o id e igual ao name dos inputs, e "grupo" indica um fieldset de checkboxes
var campos = [
  { id: "nome",       rotulo: "Nome completo",       validar: validarNome },
  { id: "email",      rotulo: "E-mail",              validar: validarEmail },
  { id: "telefone",   rotulo: "Telefone",            validar: validarTelefone },
  { id: "nascimento", rotulo: "Data de nascimento",  validar: validarNascimento },
  { id: "foto",       rotulo: "Foto de perfil",      validar: validarFoto },
  { id: "estilos",    rotulo: "Estilos musicais",    validar: validarEstilos, grupo: true },
  { id: "artistas",   rotulo: "Artistas",            validar: validarArtistas },
  { id: "cantor",     rotulo: "Melhor cantor(a)",    validar: validarCantor },
  { id: "albuns",     rotulo: "Álbuns preferidos",   validar: validarAlbuns, grupo: true }
];

function buscarCampo(nome) {
  for (var i = 0; i < campos.length; i++) {
    if (campos[i].id === nome) {
      return campos[i];
    }
  }
  return null;
}

// elemento que recebe o foco quando clica no erro do resumo
function elementoDoCampo(campo) {
  var elemento = document.getElementById(campo.id);
  if (campo.grupo) {
    return elemento.querySelector('input[type="checkbox"]'); // primeiro checkbox do grupo
  }
  return elemento;
}

// mostra (ou apaga, se mensagem for "") o erro ao lado do campo
function marcarCampo(campo, mensagem) {
  var elemento = document.getElementById(campo.id);
  var spanErro = document.getElementById("erro-" + campo.id);

  spanErro.textContent = mensagem;

  if (mensagem !== "") {
    elemento.classList.add("invalido");
  } else {
    elemento.classList.remove("invalido");
  }

  // aria-invalid so faz sentido nos inputs, nao no fieldset
  if (!campo.grupo) {
    if (mensagem !== "") {
      elemento.setAttribute("aria-invalid", "true");
    } else {
      elemento.removeAttribute("aria-invalid");
    }
  }
}

function validarCampo(campo) {
  var mensagem = campo.validar();
  marcarCampo(campo, mensagem);
  return mensagem;
}

// valida tudo e devolve a lista de erros encontrados
function validarTudo() {
  var erros = [];
  for (var i = 0; i < campos.length; i++) {
    var mensagem = validarCampo(campos[i]);
    if (mensagem !== "") {
      erros.push({ campo: campos[i], mensagem: mensagem });
    }
  }
  return erros;
}

//RESUMO DE ERROS
function mostrarResumoErros(erros) {
  listaErros.innerHTML = "";

  for (var i = 0; i < erros.length; i++) {
    var li = document.createElement("li");
    var link = document.createElement("a");
    link.href = "#" + erros[i].campo.id;
    link.textContent = erros[i].campo.rotulo + ": " + erros[i].mensagem;

    // guarda o campo no proprio link para usar no clique
    link.campo = erros[i].campo;
    link.addEventListener("click", function (evento) {
      evento.preventDefault();
      var alvo = elementoDoCampo(this.campo);
      alvo.focus();
      alvo.scrollIntoView({ behavior: "smooth", block: "center" });
    });

    li.appendChild(link);
    listaErros.appendChild(li);
  }

  resumoErros.hidden = erros.length === 0;
}

// quando o resumo ja esta aparecendo, ele e atualizado conforme a pessoa corrige
function atualizarResumoSeVisivel() {
  if (resumoErros.hidden) {
    return;
  }
  var erros = [];
  for (var i = 0; i < campos.length; i++) {
    var mensagem = document.getElementById("erro-" + campos[i].id).textContent;
    if (mensagem !== "") {
      erros.push({ campo: campos[i], mensagem: mensagem });
    }
  }
  mostrarResumoErros(erros);
}

function limparErros() {
  for (var i = 0; i < campos.length; i++) {
    marcarCampo(campos[i], "");
  }
  listaErros.innerHTML = "";
  resumoErros.hidden = true;
}

//CONFIRMACAO

// adiciona um par titulo/valor na lista de resumo (dl)
function adicionarResumo(titulo, valor) {
  var dt = document.createElement("dt");
  dt.textContent = titulo;
  var dd = document.createElement("dd");
  if (typeof valor === "string") {
    dd.textContent = valor;
  } else {
    dd.appendChild(valor); // ja e um elemento (lista, imagem...)
  }
  resumoDados.appendChild(dt);
  resumoDados.appendChild(dd);
}

function criarLista(itens) {
  var ul = document.createElement("ul");
  for (var i = 0; i < itens.length; i++) {
    var li = document.createElement("li");
    li.textContent = itens[i];
    ul.appendChild(li);
  }
  return ul;
}

function mostrarConfirmacao() {
  resumoDados.innerHTML = "";

  // foto
  if (urlFoto) {
    URL.revokeObjectURL(urlFoto);
  }
  urlFoto = URL.createObjectURL(campoFoto.files[0]);
  var img = document.createElement("img");
  img.src = urlFoto;
  img.alt = "Foto de perfil escolhida";
  img.className = "foto-resumo";
  adicionarResumo("Foto de perfil", img);

  adicionarResumo("Nome completo", campoNome.value.trim());
  adicionarResumo("E-mail", campoEmail.value.trim());
  adicionarResumo("Telefone", campoTelefone.value);

  var idade = calcularIdade(isoParaData(campoNascimento.value));
  adicionarResumo("Data de nascimento", isoParaBr(campoNascimento.value) + " (" + idade + " anos)");

  var estilos = [];
  var marcados = form.querySelectorAll('input[name="estilos"]:checked');
  for (var i = 0; i < marcados.length; i++) {
    estilos.push(marcados[i].value);
  }
  adicionarResumo("Estilos musicais", estilos.join(", "));

  adicionarResumo("Artistas", criarLista(lerArtistas()));

  var opcao = campoCantor.options[campoCantor.selectedIndex];
  adicionarResumo("Melhor cantor(a)", opcao.text + " (" + opcao.parentNode.label + ")");

  var textosAlbuns = [];
  var checks = albunsMarcados();
  for (var j = 0; j < checks.length; j++) {
    var album = buscarAlbum(checks[j].value);
    textosAlbuns.push(album.album + " (" + album.artista + ", " + album.ano + ")");
  }
  adicionarResumo("Álbuns preferidos", criarLista(textosAlbuns));

  form.hidden = true;
  secaoConfirmacao.hidden = false;
  secaoConfirmacao.focus();
}

function voltarParaFormulario() {
  secaoConfirmacao.hidden = true;
  secaoSucesso.hidden = true;
  form.hidden = false;
  campoNome.focus();
}

function confirmarEnvio() {
  // aqui os dados seriam mandados para o servidor (form.submit()).
  // como o trabalho nao tem back-end, so mostramos a mensagem de sucesso.
  var primeiroNome = campoNome.value.trim().split(/\s+/)[0];
  document.getElementById("mensagem-sucesso").textContent =
    "Obrigado, " + primeiroNome + "! Recebemos seus interesses musicais.";

  limparSemPerguntar = true;
  form.reset();

  secaoConfirmacao.hidden = true;
  secaoSucesso.hidden = false;
  secaoSucesso.focus();
}

//EVENTOS

form.addEventListener("submit", function (evento) {
  evento.preventDefault(); // quem decide se envia e o javascript

  var erros = validarTudo();
  if (erros.length > 0) {
    mostrarResumoErros(erros);
    resumoErros.focus();
  } else {
    resumoErros.hidden = true;
    mostrarConfirmacao();
  }
});

form.addEventListener("reset", function (evento) {
  if (!limparSemPerguntar && !confirm("Deseja mesmo apagar tudo o que foi preenchido?")) {
    evento.preventDefault();
    return;
  }
  limparSemPerguntar = false;

  // o evento reset acontece ANTES dos campos serem limpos,
  // entao espera o navegador limpar para depois atualizar a tela
  setTimeout(function () {
    limparErros();
    atualizarContador();
    campoNome.focus();
  }, 0);
});

// valida o campo quando a pessoa termina de mexer nele.
// nos grupos de checkbox so revalida se ja tinha erro, senao o erro
// apareceria logo no primeiro clique (ex.: "marcou 1 de 3")
form.addEventListener("change", function (evento) {
  var campo = buscarCampo(evento.target.name);
  if (campo && campo.grupo && document.getElementById("erro-" + campo.id).textContent === "") {
    return;
  }
  if (campo) {
    validarCampo(campo);
    atualizarResumoSeVisivel();
  }
});

// enquanto digita: so revalida se o campo ja estava com erro (para o erro sumir quando corrigir)
form.addEventListener("input", function (evento) {
  if (evento.target === campoTelefone) {
    mascaraTelefone();
  }
  var campo = buscarCampo(evento.target.name);
  if (campo && document.getElementById("erro-" + campo.id).textContent !== "") {
    validarCampo(campo);
    atualizarResumoSeVisivel();
  }
});

listaAlbuns.addEventListener("change", atualizarContador);

document.getElementById("botao-voltar").addEventListener("click", voltarParaFormulario);
document.getElementById("botao-confirmar").addEventListener("click", confirmarEnvio);
document.getElementById("botao-novo").addEventListener("click", voltarParaFormulario);

//INICIO

definirLimitesData();
montarAlbuns();
atualizarContador();
campoNome.focus(); // reforco do autofocus do html
