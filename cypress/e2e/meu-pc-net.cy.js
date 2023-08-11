describe('Testando Meu Pc.net', () => {
  it('Validando cadastro', () => {
    //Entrando no website escolhido meu pc net
    cy.visit('https://meupc.net/')
    
    //Esperando 1 segundo para executar as funções abaixo
    cy.wait(1000)

    //Clicando no notão de menu pela classe .navbar-burger
    cy.get('.navbar-burger').click()

    //cy.get('a[href="https://meupc.net/cadastro"]').click() --error tentativa
    // Clicando no botão de cadastro
    cy.wait(1000)
    cy
      .get('ul.menu-list')//Pegando a ul cam o classe .menu-list
      .children('li')//Pegando os filhos da ul
      .children('a[href="https://meupc.net/cadastro"]')//Pegando o filho da li que tem i href com o valor https://meupc.net/cadastro
      .click()

    //Preenchendo o campo nome do cadastro com o valor Kaique Teste
    cy.get('input[name="nome"]').type('Kaique Teste')

    //Preenchendo o campo email do cadastro com o valor johndoe@example.com
    cy.get('input[name="email"]').type('johndoe@example.com')
    
    //Preenchendo o campo senha do cadastro com valor teste123
    cy.get('input[placeholder="Defina uma senha"]').type('teste123')

    //Clicando no checkbox de aceitar os termos
    cy.get('input[type="checkbox"]').check({ force:true })

    //Clicando no notão de cadastrar
    cy.contains('Cadastrar-se').click()

    //Verificando se chegamos na tela final do cadastro
    cy.contains('Escolha seu nome de usuário').should('be.visible')

  })
})