const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send("Olá");
});

router.get('/:operacao/:valor1/:valor2', function (req, res) {

    const operacao = req.params.operacao;
    const valor1 = Number(req.params.valor1);
    const valor2 = Number(req.params.valor2);

    if (isNaN(valor1))
        return res.status(400).json({'mensagem': 'Valor 1 precisa ser numérico'})

    if (isNaN(valor2))
        return res.status(400).json({'mensagem': 'Valor 2 precisa ser numérico'})

    let resultado = 0;

    switch (operacao) {
        case 'soma':
            resultado = valor1 + valor2
            return res.status(200).json(
                {
                    'operacao': "Soma",
                    'valor1': valor1,
                    'valor2': valor2,
                    'resultado': resultado
                }
            )

        case 'sub':
            resultado = valor1 - valor2
            return res.status(200).json(
                {
                    'operacao': "Subtração",
                    'valor1': valor1,
                    'valor2': valor2,
                    'resultado': resultado
                }
            )

        case 'mult':
            resultado = valor1 * valor2
            return res.status(200).json(
                {
                    'operacao': "Multiplicação",
                    'valor1': valor1,
                    'valor2': valor2,
                    'resultado': resultado
                }
            )

        case 'divisao':
            if (valor2 === 0)
                return res.status(400).json({ 'mensagem': 'Impossível dividir por zero' })

            resultado = valor1 / valor2
            return res.status(200).json(
                {
                    'operacao': "Divisão",
                    'valor1': valor1,
                    'valor2': valor2,
                    'resultado': resultado
                }
            )
        default:
            return res.status(400).json({ 'mensagem': 'Opção inválida' })
    }
})

module.exports = router;