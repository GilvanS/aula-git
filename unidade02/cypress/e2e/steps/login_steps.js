
Given(/^que eu queira acessar o sistema$/, () => {
	return true;
});

When(/^eu inserir meu login e senha$/, () => {
	return true;
});

When(/^clicar no botão entrar$/, () => {
	return true;
});

Then(/^tenho meu acesso realizado com sucesso$/, () => {
	return true;
});


When(/^eu inserir meu "([^"]*)" login e senha "([^"]*)"$/, (args1,args2) => {
	console.log(args1,args2);
	return true;
});

When(/^clicar no botão entrar$/, () => {
	return true;
});

Then(/^tenho meu acesso "([^"]*)"$/, (args1) => {
	console.log(args1);
	return true;
});

