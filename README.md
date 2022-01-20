# Sistema de registro de doadores, doações e organizações parceiras via api rest.

Desenvolvido em um projeto de extensão e atualmente está sendo utilizado pela instituição que foi beneficiada.

## Rotas: 

- _<Domínio>_/v1/admin (<b>GET</b>) <br>
    É necessario informar username e password, se for validado e houver um admin com esses parametros sera retornado um token de acesso para as outras rotas, se não houver retornara status(401);

#### DONATOR
- _<Domínio>_/v1/donator (<b>GET</b>) <br>
    Retorna todos os membros doadores cadastrados.

- _<Domínio>_/v1/donator (<b>POST</b>) <br>
    Deve ser utilizada para criar um doador, deve seguir todos atributos via JSON,
    retorna o doador criado.

- _<Domínio>_/v1/donator/:RG (<b>GET</b>) <br>
    Retorna o doador que possui o rg informado, caso não haja retornara um erro.

- _<Domínio>_/v1/donator/:RG (<b>DELETE</b>) <br>
    Retorna o doador excluido, caso não haja ninguem com esse rg, retornara um erro. Esta sendo utilizado o sistemas de status(O cadastro em si não é excluido, seu status apenas muda para desativado), necessario confirmar regra de negocio.

- _<Domínio>_/v1/donator/:RG (<b>PUT</b>) <br>
    Deve ser usado para atualizar o cadastro de um doador, devera seguir todos os atributos em formato JSON e ter um rg valido, retorna o doador com os dados atualizados.

#### DONATIONS
- _<Domínio>_/v1/donation (<b>GET</b>) <br>
    Retorna todos as doações cadastrados.

- _<Domínio>_/v1/donation (<b>POST</b>) <br>
    Deve ser utilizada para criar uma doação, deve seguir todos atributos via JSON,
    retorna o doador criado.
 
- _<Domínio>_/v1/donation/:ID (<b>GET</b>) <br>
    Retorna a doação que possui o id informado, caso não haja retornara um erro.

- _<Domínio>_/v1/donation/:ID (<b>DELETE</b>) <br>
    Retorna a doação excluida, caso não haja nenhuma com esse id, retornara um erro.

- _<Domínio>_/v1/donation/:ID (<b>PUT</b>) <br>
    Deve ser usado para atualizar uma doação, devera seguir todos os atributos em formato JSON e ter um id valido, retorna a doação com os dados atualizados.

#### PARTNERS
- _<Domínio>_/v1/collector (<b>GET</b>) <br>
    Retorna todos as organizações coletoras cadastradas.

- _<Domínio>_/v1/collector (<b>POST</b>) <br>
    Deve ser utilizada para criar uma organização coletora, deve seguir todos atributos via JSON,
    retorna a organização criada.

- _<Domínio>_/v1/collector/:ID (<b>GET</b>) <br>
    Retorna a organização coletora que possui o id informado, caso não haja retornara um erro.

- _<Domínio>_/v1/collector/:ID (<b>DELETE</b>) <br>
    Retorna organização coletora excluida, caso não haja nenhuma com esse id, retornara um erro.

- _<Domínio>_/v1/collector/:ID (<b>PUT</b>) <br>
    Deve ser usado para atualizar uma organização coletora devera seguir todos os atributos em formato JSON e ter um id valido, retorna a organização coletorac om os dados atualizados.

#### CEP 
- _<Domínio>_/v1/cep/:CEP   (<b>GET</b>) <br>
    Se nada der errado é para retornar informações sobre o cep.

#### PROFESSION 
- _<Domínio>_/v1/profissao  (<b>GET</b>) <br>
    Deve retornar as profissoes cadastradas.

- _<Domínio>_/v1/profissao  (<b>POST</b>) <br>
    Utilizada para criar uma profissao via api.
