import config from '../config';

const url_categories = `${config.url}/categorias?_embed=videos`;

function getAllWithVideos() {
  return fetch(url_categories)
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }
      throw new Error('Não foi possível pegar os dados :( ');
    });
}

export default {
  getAllWithVideos,
};
