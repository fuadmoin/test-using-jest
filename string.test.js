const str = require('./string');
const calculator = require('./calculator');

describe('string tester', () => {

    test('returns error', () => {
        expect(str.stringLength('hashimmmmmmmmmmmmmmmmmm')).toThrow(Error);
    });

    test('returns reversed string', () => {
        expect(str.reverseString('man')).toBe('nam');
        });

        test('returns number of characters', () => {
            expect(str.stringLength('hashim')).toBe(6);
            });

});


describe('add testers', () =>{
    test('returns sum', () => {
        expect(calculator.add(5,2)).toBe(7);
        });

    test('returns sum', () => {
        expect(calculator.add(45,2)).toBe(47);
        });

        test('returns sum', () => {
    expect(calculator.add(6,8)).toBe(14);
    });

});

describe('subtract testers', () =>{
    test('returns difference', () => {
        expect(calculator.subtract(5,2)).toBe(3);
        });

    test('returns difference', () => {
        expect(calculator.subtract(45,2)).toBe(43);
        });

        test('returns difference', () => {
    expect(calculator.subtract(6,8)).toBe(-2);
    });

});

describe('multiplication testers', () =>{
    test('returns product', () => {
        expect(calculator.multiply(5,2)).toBe(10);
        });

    test('returns product', () => {
        expect(calculator.multiply(45,2)).toBe(90);
        });

        test('returns product', () => {
    expect(calculator.multiply(6,8)).toBe(48);
    });

});

describe('division testers', () =>{
    test('returns quotient', () => {
        expect(calculator.divide(6,2)).toBe(3);
        });

    test('returns quotient', () => {
        expect(calculator.divide(46,2)).toBe(23);
        });

        test('returns quotient', () => {
    expect(calculator.divide(8,-4)).toBe(-2);
    });

});

test('returns first character capitalized', () => {

    expect(str.capitalise('fuad')).toBe('Fuad');
});