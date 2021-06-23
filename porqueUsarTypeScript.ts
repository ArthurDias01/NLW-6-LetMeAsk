// incluir na mensagem de boas-vindas , a cidade e UF do usuário

type User = {
  name: string;
  address: {
    city: string;
    uf: string;
  }
};

function showWelcomeMessage(user: User) {
  return `Welcome ${user.name} (${user.address.city} - ${user.address.uf})`;
}

showWelcomeMessage({
  name: 'Arthur',
  address: {
    city: 'São José dos Campos',
    uf: 'SP'
  }
})
