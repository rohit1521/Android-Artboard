let dialog;

function createartboard() {
    const html = `
        <style>
            .textValue{
                font-size: 10px;
                font-weight: 200;
            }
            title {
                display: block;
                text-align: center;
                font-size: 20px;
                margin-bottom: 20px;
            }
            label.row > span {
                color: #8E8E8E;
                text-align: right;
                font-size: 9px;
            }
            label.row input {
                flex: 1 1 auto;
            }
        </style>
        <form method="dialog" id="main">
            <title class="title">Android Artboard</title>
            <p class = "textValue">If you selected an artboard then it will change to android artbaord </p>
            <div class="row break">
                <label class="row">
                <span>Select Model</span>
                <select id="dropdown">
                    <option value="0" selected="selected >Google XL 3</option>
                    <option value="0">Google XL 3</option>
                    <option value="1">Google XL 2</option>
                    <option value="2">Google XL 1</option>
                    <option value="3">Galexy S8/s9</option>
                    <option value="4">Galaxy S7/Note5</option>
                </select>
                </label>
            </div>
            <footer><button id="ok" type="submit" uxp-variant="cta">Apply</button></footer>
        </form>
        `


    const data = {
        items: [{
                width: 411,
                height: 822,
                name: "Google XL 3"
            },
            {
                width: 411,
                height: 731,
                name: "Google XL 2"
            },
            {
                width: 411,
                height: 731,
                name: "Google XL"
            },
            {
                width: 360,
                height: 740,
                name: "Galaxy S8/S9"
            },
            {
                width: 360,
                height: 640,
                name: "Galaxy S7/Note5"
            }
        ]
    };


    function insertArtboard() {
        const {
            selection,
            Artboard,
            Color
        } = require("scenegraph")
        var e = document.getElementById("dropdown");
        const width = (data.items[e.options[e.selectedIndex].value]).width;
        const height = (data.items[e.options[e.selectedIndex].value]).height;
        const color = "#FFFFFF";
        var e = document.getElementById("dropdown");
        var name = (data.items[e.options[e.selectedIndex].value]).name;

        let sel = selection.items;
        const selCount = sel.length;
        if (!selCount) {
            let artboard = new Artboard();
            artboard.width = width;
            artboard.height = height;
            artboard.name = name;
            artboard.fill = new Color(color);
            selection.insertionParent.addChild(artboard);
        } else {
            for (var i = 0; i < selCount; i++) {
                if (sel[i] instanceof Artboard) {
                    sel[i].width = width;
                    sel[i].height = height;
                    sel[i].name = name + " " + i;
                }
                console.log("Select an Artboard");

            }


        }



    }
    if (!dialog) {
        dialog = document.createElement("dialog");
        dialog.innerHTML = html;
        document.appendChild(dialog);
        document.querySelector("form").addEventListener("submit", insertArtboard);
    }
    return dialog.showModal()
}

module.exports = {
    commands: {
        createartboard
    }
};