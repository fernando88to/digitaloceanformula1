# digitaloceanformula1

Projeto de estudo de uma aplicação que possui backend e frontend separado, aqui elas possuem o mesmo repositório,
contudo o deploy de cada uma é feita em separado por meio do github actions.


Esse projeto tem ligação com https://github.com/fernando88to/digitalocean o qual é o proxy/load balance de todo o servidor.


* frontend -> https://www.applicacao.dev.br/frontend/
* backend -> https://www.applicacao.dev.br/backend


### FrontEnd

Desenvolvido em NextJs


### BackEnd

Desenvolvido em Quarkus


### Ambiente de desenvolvimento


Na raiz do projeto aplicar o seguinte comando

```
docker-compose up -d --build
```
