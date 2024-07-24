const inquirer = require("inquirer"); //requires  inquirer package
const fs = require("fs"); //requires file system package.
const {Circle, Square, Triangle} = require("./lib/shapes");
const { validate } = require("@babel/types");

inquirer
.prompt([
    {
        type: "input",
        name: "text",
        message: "enter 3 characters",
        validate: (input) => {
            if (input.length < 3) {
                return "please enter at least 3 characters"
            }
        }
    },
    {
        type: "input",
        name: "textColor",
        message: "what color should the text be?"
    
    },
    {
        // Selects shape type
        type: "list",
        name: "shape",
        message: "choose a shape",
        choices: ["circle", "square", "triangle"]
    },
    {
        // adds a color to the shape
        type: "input",
        name: "shapeColor",
        message: "enter a color that you would like the shape be?"
    },
])

.then ((response) => {
    let shape;
    if (response.shape === "circle") {
        shape = new Circle(response.text, response.textColor, response.shapeColor);
    } else if (response.shape === "square") {
        shape = new Square(response.text,response.textColor, response.shapeColor);
    } else if (response.shape === "triangle") {
        shape = new Triangle(response.text, response.textColor, response.shapeColor);
    }



fs.writeFile("logo.svg", `${shape.render()}`, (err) => { 
    if (err) {
        console.log(err);
    }
})
})