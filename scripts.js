let names = ["Tofi ", "Rofi "];
names.forEach((name) => 
{$("ul").append(name)
})
$("ul").append("<strong>Niki</strong>");
let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
}

$("body").append("<h1>additionalBlock.title</h1>");
$("body").append("<p>additionalBlock.text</p>");
