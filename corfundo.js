function gerarCorAleatoria() {
  const corAleatoria = '#' + Math.floor(Math.random() * 0x1000000).toString(16).padStart(6, '0');
  return corAleatoria;
}

function mudarCor() {
  const cor = gerarCorAleatoria();
  if (document.body) {// Verifica se o body existe
    document.body.style.backgroundColor = cor ;
  }
}