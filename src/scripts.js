export function formatarData(timestamp) {
    const data = new Date(timestamp);
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0'); // Mês começa do zero
    const ano = data.getFullYear();

    return `${dia}/${mes}/${ano}`;
}

export function validarLogin(estado, tela = "normal"){
    if (!estado && tela == "normal") {
        window.location.href="/"
    }else if(estado && tela == "login"){
        window.location.href="/laboratorios"
    }
}