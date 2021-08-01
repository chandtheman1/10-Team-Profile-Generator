function generateHTML() {
    return `

    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8"/>
            <link rel="stylesheet" href="./assets/css/reset.css"/>
            <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
            <link rel="stylesheet" href="./assets/css/index.css"/>
        </head>
        <body>
            <section class="heading">
                <h1>My Team</h1>
            </section>
            <section class="main">
            </section>
        </body>
    </html>
`
}

function generateManager(data) {
    return `

<div class="card">
    <header>
        <h3>${data.name}</h3>
        <i class="fas fa-mug-hot fa-2x"></i>
        <h4>Manager</h4>
    </header>
    <section class="card-content">
        <p>ID : ${data.id}</p>
        <p>chandler.liang123@gmail.com</p>
        <p>Office number: ${data.officeNumber}</p>
    </section>
</div>

`
}