const { converter } = require('../src/moeda');

test('converte 10 reais para dólares com taxa 0.20', () => {
  expect(converter(10, 0.20)).toBe(2);
});

test('deve lançar erro se valor for negativo', () => {
  expect(() => converter(-10, 0.20)).toThrow("Valor não pode ser negativo");
});