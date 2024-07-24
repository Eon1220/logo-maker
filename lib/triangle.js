class Triangle {
    constructor (text, textColor, shapeColor){
        this.text = text;
        this.textColor = textColor;
        this.shapeColor = shapeColor;
    }
    render() {
        return `<svg version='1.1' width='300' height='200' xmlns="http://www.w3.org/2000/svg">
                <polygon points="150, 18 244, 182 56, 182" fill="${this.shapeColor}"/>
                <text x='150' y='125' font-size='40' text-anchor='middle' fill='${this.textColor}'>${this.text}</text>
                </svg>`;
    }
}

module.exports = Triangle;