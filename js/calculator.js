var calc = (function() {
    
    // fields to be inserted as private if necessary

    return {

        equalsZero: function (arg) {
            return arg === 0;
        },

        isInt: function (arg) {
            return arg % 1 === 0;
        },

        isPositive: function (arg) {
            return arg < 0;
        },

        isEmptyString: function (arg) {
            return arg === "";
        },

        isNull: function (arg) {
            return arg === null;
        },

        validNumberCheck: function (toCheck, msg) {
            if (isNaN(toCheck) || this.isEmptyString(toCheck) || toCheck === true || toCheck === false || this.isNull(toCheck)) {
                throw new Error('argument: ' + toCheck + ' is not a valid number; ' + msg);
            }
        },

        validResultCheck: function (toCheck, msg) {
            if (isNaN(toCheck)) {
                throw new Error('result is not a valid number; ' + msg);
            }
        },

        nonZeroNumberCheck: function (toCheck, msg) {
            if (this.equalsZero(toCheck)) {
                throw new Error('zero is not valid argument; ' + msg);
            }
        },

        positiveNumberCheck: function (toCheck, msg) {
            if (this.isPositive(toCheck)) {
                throw new Error('argument: ' + toCheck + ' is not a positive number; ' + msg);
            }
        },

        integerCheck: function (toCheck, msg) {
            if (!this.isInt(toCheck)) {
                throw new Error('argument: ' + toCheck + ' is not integer; ' + msg);
            }
        },

        add: function (a, b) {
            this.validNumberCheck(a, 'addition failed');
            this.validNumberCheck(b, 'addition failed');
            return a + b;
        },

        subtract: function (a, b) {
            this.validNumberCheck(a, 'subtraction failed');
            this.validNumberCheck(b, 'subtraction failed');
            return a - b;
        },

        multiply: function (a, b) {
            this.validNumberCheck(a, 'multiplication failed');
            this.validNumberCheck(b, 'multiplication failed');
            return a * b;
        },

        divide: function (a, b) {
            this.validNumberCheck(a, 'division failed');
            this.validNumberCheck(b, 'division failed');
            this.nonZeroNumberCheck(b, 'division by zero');
            return a / b;
        },

        factorial: function (a) {
            this.validNumberCheck(a, 'factorial failed');
            this.positiveNumberCheck(a, 'natural number only as factorial argument');
            this.integerCheck(a, 'natural number only as factorial input');
            if (a == 0 || a == 1) {
                return 1;
            } else {
                return this.factorial(a - 1) * a;
            }
        },

        squareRoot: function (a) {
            this.validNumberCheck(a, 'square root failed');
            this.positiveNumberCheck(a, 'non-negative number only as square root argument');
            var b = a, c = 1, e = 0.000001;
            while (b - c > e) {
                b = (b + c) / 2;
                c = a / b;
            }
            return b;
        },

        power: function (a, b) {
            this.validNumberCheck(a, 'power failed');
            this.validNumberCheck(b, 'power failed');
            var c = Math.pow(a, b);
            this.validResultCheck(c, 'only integer exponent allowed for negative base for power');
            return c;
        }
    }
}());