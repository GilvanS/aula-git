describe('Usuarios devem realizar o login', () => {

    let data;

    before(() => {

        cy.fixture('example').then((tData) => {
            data = tData;
        })
    })
    it('Atraves da API da aplicacao com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://curso-automacao-web-app.herokuapp.com/auth',
            headers:{
                "Content-type": "aplication/json"
            },
            body:{
                username: "admin@automacao.org.br",
                password: "password01"
            }
        }).then((Response) => {
            expect(Response.status).to.eq(200)
        })
    })
})