// Adiciona um ouvinte de evento para o carregamento do documento
document.addEventListener('DOMContentLoaded', () => {
    // Faz uma solicitação GET para a API de orders
    fetch('http://localhost:8080/api/orders')
        .then(response => response.json()) // Converte a resposta em JSON
        .then(data => { // Manipula os dados recebidos
            // Obtém a div 'pedidos' do documento
            const pedidosDiv = document.getElementById('orders');
            // Itera sobre cada pedido nos dados recebidos
            data.result.forEach(order => {
                // Cria uma nova div
                const div = document.createElement('div');
                // Extrai as informações do pedido
                const business = order.business.nome;
                const user = order.user.nome;
                const numeroOrdem = order.numeroOrdem;
                // Calcula o total do pedido
                const total = calcularTotalPedido(produto.orders);
                const status = produto.status;

                // Define o HTML da div com as informações do pedido
                div.innerHTML = `
                    <p>Comércio: ${business}</p>
                    <p>Usuário: ${user}</p>
                    <p>Número do pedido: ${numeroOrdem}</p>
                    <p>Total do pedido: ${total}</p>
                    <p>Status do pedido: ${status}</p>
                `;
                // Adiciona a div à div 'pedidos'
                pedidosDiv.appendChild(div);
            });
        })
        .catch(error => console.error('Erro ao obter os pedidos:', error)); // Registra qualquer erro que ocorra
});

// Define a função para calcular o total de um pedido
function calcularTotalPedido(produtos) {
    // Reduz a lista de produtos a um total, multiplicando o preço e a quantidade de cada produto e somando tudo
    return produtos.reduce((total, produto) => total + produto.preco * produto.quantidade, 0);
}