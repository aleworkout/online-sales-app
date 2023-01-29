import { main } from "../src/main";

describe("Não deve criar um pedido", () => {
    it("com cpf inválido", () => {
        const products = [
            { sku: 0, description: "coca cola zero 1lt", price: 13, amount: 2 },
            { sku: 1, description: "notebook aspire D1", price: 13, amount: 2 },
            { sku: 2, description: "girassol pack", price: 100, amount: 2 },
        ];
        const coupon = { discount: 10 }
        const cpf = '204.845.300-08';
        expect(() => main(products, cpf, coupon)).toThrow("CPF inválido");
    });
});

describe("Deve criar um pedido", () => {
    it("Com 3 produtos (com descrição, preço e quantidade) e calcular o valor total", () => {
        const products = [
            { sku: 0, description: "coca cola zero 1lt", price: 13, amount: 2 },
            { sku: 1, description: "notebook aspire D1", price: 13, amount: 2 },
            { sku: 2, description: "girassol pack", price: 100, amount: 2 },
        ];
        const coupon = { discount: 0 }
        const cpf = '204.845.200-08';
        const order = main(products, cpf, coupon);
        expect(order.total).toBe(252);
    });

    it("Com 3 produtos, associar um cupom de desconto e calcular o total (percentual sobre o total do pedido)", () => {
        const products = [
            { sku: 0, description: "coca cola zero 1lt", price: 13, amount: 2 },
            { sku: 1, description: "notebook aspire D1", price: 13, amount: 2 },
            { sku: 2, description: "girassol pack", price: 100, amount: 2 },
        ];
        const coupon = { discount: 10 }
        const cpf = '204.845.200-08';
        const order = main(products, cpf, coupon);
        expect(order.total).toBe(242);
    });
});