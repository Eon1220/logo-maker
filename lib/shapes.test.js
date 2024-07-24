const Square = require('./square.js');
const Triangle = require('./triangle.js');
const Circle = require('./circle.js')
describe('shape', () => {
    describe('Square', () => {
        describe('Check to see if a square is being created', () => {
            it('should print out a square with the chosen color containing text with the chosen color', () => {
                const square = new Square('own', 'blue', 'red')
                const expectedText = `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="150" height="150" x="75" y="40" fill="${square.shapeColor}" />
                <text x='150' y='125' font-size='40' text-anchor='middle' fill='${square.textColor}'>${square.text}</text>
                </svg>`;

                const renderSquare = square.render();


                expect(renderSquare).toEqual(expectedText);
            })
        })
        describe('Triangle', () => {
            describe('Check to see if a triangle is being created', () => {
                it('should print out a triangle with the chosen color containing text with the chosen color', () => {
                    const triangle = new Triangle('own', 'blue', 'red')
                    const expectedText = `<svg version='1.1' width='300' height='200' xmlns="http://www.w3.org/2000/svg">
                <polygon points="150, 18 244, 182 56, 182" fill="${triangle.shapeColor}"/>
                <text x='150' y='125' font-size='40' text-anchor='middle' fill='${triangle.textColor}'>${triangle.text}</text>
                </svg>`;

                    const rendertriangle = triangle.render();


                    expect(rendertriangle).toEqual(expectedText);
                })
            })
            describe('Circle', () => {
                describe('Check to see if a circle is being created', () => {
                    it('should print out a circle with the chosen color containing text with the chosen color', () => {
                        const circle = new Circle('own', 'blue', 'red')
                        const expectedText = `<svg version='1.1' width='300' height='200' xmlns="http://www.w3.org/2000/svg">
                <circle cx='150' cy='100' r='80' fill="${circle.shapeColor}" />
                <text x='150' y='125' font-size='60' text-anchor='middle' fill='${circle.textColor}'>${circle.text}</text>
                </svg>`;

                        const rendercircle = circle.render();


                        expect(rendercircle).toEqual(expectedText);
                    })
                })
            })
        })
    })
})