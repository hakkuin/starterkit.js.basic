/*global describe, calc, expect, it*/
/*esline no-undef: "error"*/

'use strict';

describe('Calculator test suite', function () {

    it('should add 5 to 6', function () {
        // given
        var a = 5, b = 6, c;
        
        // when
        c = calc.add(a, b);

        // then
        expect(c).toBe(11);
    });

    it('should add -5 to -6', function () {
        // given
        var a = -5, b = -6, c;
        // when
        c = calc.add(a, b);

        // then
        expect(c).toBe(-11);
    });

    it('should subtract 3 from 7', function () {
        // given
        var a = 7, b = 3, c;
        
        // when
        c = calc.subtract(a, b);

        // then
        expect(c).toBe(4);
    });

    it('should multiply 4 by 7', function () {
        // given
        var a = 4, b = 7, c;
        
        // when
        c = calc.multiply(a, b);

        // then
        expect(c).toBe(28);
    });

    it('should divide 18 by 6', function () {
        // given
        var a = 18, b = 6, c;
        
        // when
        c = calc.divide(a, b);

        // then
        expect(c).toBe(3);
    });

    it('should calculate square root of 2', function () {
        // given
        var a = 2, b;
        
        // when
        b = calc.squareRoot(a);

        // then
        expect(b >= 1.41421356237).toBeTruthy();
        expect(b <= 1.41421356238).toBeTruthy();
    });


    it('should divide 14 by 7 when input strings', function () {
        // given
        var a = '14', b = '7', c;
        
        // when
        c = calc.divide(a, b);

        // then
        expect(c).toBe(2);
    });

    it('should calculate factorial for agrument of 0', function () {
        // given
        var a = 0, b;
        
        // when
        b = calc.factorial(a);

        // then
        expect(b).toBe(1);
    });

    it('should calculate factorial for agrument of 1', function () {
        // given
        var a = 0, b;
        
        // when
        b = calc.factorial(a);

        // then
        expect(b).toBe(1);
    });

    it('should calculate factorial for agrument of 3', function () {
        // given
        var a = 3, b;
        
        // when
        b = calc.factorial(a);

        // then
        expect(b).toBe(6);
    });

    it('should calculate factorial for agrument of 27', function () {
        // given
        var a = 27, b;
        
        // when
        b = calc.factorial(a);

        // then
        expect(b).toBe(10888869450418352160768000000);
    });

    it('should calculate exponent base 7 to 3', function () {
        // given
        var a = 7, b = 3, c;
        
        // when
        c = calc.power(a, b);

        // then
        expect(c).toBe(343);
    });

    it('should throw error of not valid number for string for add', function () {
        // given
        var a = 'asdv', b = 9;

        // when // then
        expect(function () {
            calc.add(a, b);
        }).toThrow(new Error('argument: ' + a + ' is not a valid number; addition failed'));
    });

    it('should throw error of not valid number for string for subtract', function () {
        // given
        var a = 9, b = 'asdv';

        // when // then
        expect(function () {
            calc.subtract(a, b);
        }).toThrow(new Error('argument: ' + b + ' is not a valid number; subtraction failed'));
    });

    it('should throw error of not valid number for null for multipy', function () {
        // given
        var a = null, b = 1;

        // when // then
        expect(function () {
            calc.multiply(a, b);
        }).toThrow(new Error('argument: ' + a + ' is not a valid number; multiplication failed'));
    });

    it('should throw error of not valid number for empty string for multipy', function () {
        // given
        var a = "", b = 1;

        // when // then
        expect(function () {
            calc.multiply(a, b);
        }).toThrow(new Error('argument: ' + a + ' is not a valid number; multiplication failed'));
    });

    it('should throw error of not valid number for true for multipy', function () {
        // given
        var a = true, b = 1;

        // when // then
        expect(function () {
            calc.multiply(a, b);
        }).toThrow(new Error('argument: ' + a + ' is not a valid number; multiplication failed'));
    });

    it('should throw error of not valid number for false for multipy', function () {
        // given
        var a = false, b = 1;

        // when // then
        expect(function () {
            calc.multiply(a, b);
        }).toThrow(new Error('argument: ' + a + ' is not a valid number; multiplication failed'));
    });

    it('should throw error of division by zero', function () {
        // given
        var a = 3, b = 0;

        // when // then
        expect(function () {
            calc.divide(a, b);
        }).toThrow(new Error('zero is not valid argument; division by zero'));
    });

    it('should throw error of not valid number for string for factorial', function () {
        // given
        var a = 'asdv';

        // when // then
        expect(function () {
            calc.factorial(a);
        }).toThrow(new Error('argument: ' + a + ' is not a valid number; factorial failed'));
    });

    it('should throw error of non positive number for factorial', function () {
        // given
        var a = -1;

        // when // then
        expect(function () {
            calc.factorial(a);
        }).toThrow(new Error('argument: ' + a + ' is not a positive number; natural number only as factorial argument'));
    });

    it('should throw error of non positive number for square root', function () {
        // given
        var a = -1;

        // when // then
        expect(function () {
            calc.squareRoot(a);
        }).toThrow(new Error('argument: ' + a + ' is not a positive number; non-negative number only as square root argument'));
    });

    it('should throw error of not integer for factorial', function () {
        // given
        var a = 1.1;

        // when // then
        expect(function () {
            calc.factorial(a);
        }).toThrow(new Error('argument: ' + a + ' is not integer; natural number only as factorial input'));
    });

    it('should throw error of incorrect result for power', function () {
        // given
        var a = -1, b = 1.1;

        // when // then
        expect(function () {
            calc.power(a, b);
        }).toThrow(new Error('result is not a valid number; only integer exponent allowed for negative base for power'));
    });
});