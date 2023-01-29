import { validateCPF } from './validateCPF'

export function main(order: any[], cpf: string, coupon: any | undefined) {
    if (!validateCPF(cpf)) throw new Error("CPF inválido");

    const { discount } = coupon;
    const total =
        order.reduce((acc, curr) => {
            return acc + curr.price * curr.amount;
        }, 0) - discount;
    return {
        total,
    };
}