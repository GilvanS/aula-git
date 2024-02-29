Feature: Login
Login para acesso ao AP

  Scenario: Login com sucesso
    Given que eu queira acessar o sistema
    When eu inserir meu login e senha
    And clicar no botão entrar
    Then tenho meu acesso realizado com sucesso

  Scenario Outline: Login
    Given que eu queira acessar o sistema
    When eu inserir meu "<login>" login e senha "<senha>"
    And clicar no botão entrar
    Then tenho meu acesso "<mensagem>"

    Examples: 
      | login  | senha | mensagem                  |
      | Gilvan |  1234 | login com sucesso         |
      | Jean   |  0987 | login com senha incorreta |
