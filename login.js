document.getElementById('frmLogin').addEventListener('submit', async (e) => {
    e.preventDefault();
    const senha = document.getElementById('txtSenha').value;
    const login = document.getElementById('txtLogin').value;
    const tipo = 'login';

    const response = await fetch('/api/mysql', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({login, senha, tipo })
    });

    const result = await response.json();
    console.log(result.message);
});