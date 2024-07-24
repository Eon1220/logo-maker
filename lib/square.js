class Square {
    constructor (text, textColor, shapeColor){
            this.text = text;
            this.textColor = textColor;
            this.shapeColor = shapeColor;
        }
    render() {
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
                <rect width="150" height="150" x="75" y="40" fill="${this.shapeColor}" />
                <text x='150' y='125' font-size='40' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>
                </svg>`;
    }
}

module.exports = Square