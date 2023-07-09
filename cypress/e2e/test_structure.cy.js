// Topics:
// -> Describe and Context
// -> It and Specify
// -> Unit Testing Demo

let add = (a, b) => a + b;
let substract = (a, b) => a - b;
let divide = (a, b) => a / b;
let multiply = (a, b) => a * b;

// Describe or Context
describe('Unit Testing for our dummy app', () => {
    context('Math with POSITIVE numbers', () => {
        // It - Specify
        it('Should add positive numbers', () => {
            expect(add(1, 2)).to.eq(3);
        });

        it('Should substract positive numbers', () => {
            expect(substract(4, 2)).to.eq(2);
        });

        it('Should divide positive numbers', () => {
            expect(divide(10, 2)).to.eq(5);
        });

        it('Should multiply positive numbers', () => {
            expect(multiply(5, 2)).to.eq(10);
        });
    });

    describe('Math with DECIMAL numbers', () => {
        specify('Should add decimal numbers', () => {
            expect(add(2.5, 2.5)).to.eq(5);
        });

        specify('Should substract decimal numbers', () => {
            expect(substract(5, 2.5)).to.eq(2.5);
        });

        specify('Should divide decimal numbers', () => {
            expect(divide(4.4, 2)).to.eq(2.2);
        });

        specify('Should multiply decimal numbers', () => {
            expect(multiply(2.5, 2)).to.eq(5);
        });
    });
});