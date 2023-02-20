const temporizador = () => {
  const dataAtual = new Date();
  return dataAtual.toLocaleTimeString('pt-BR');
};

setInterval(() => {
  console.log(temporizador());
}, 1000);
