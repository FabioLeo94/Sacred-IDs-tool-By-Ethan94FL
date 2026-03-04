const database = [
    {
        id: 0,
        data: mobs,
        name: "Mobs"
    },
    {
        id: 1,
        data: items,
        name: "Oggetti"
    },
    {
        id: 2,
        data: combat_arts,
        name: "Arti di combattimento\\Magie"
    },
    {
        id: 3,
        data: quest_items,
        name: "Oggetti missione"
    },
    {
        id: 4,
        data: scenic_effects,
        name: "Oggetti scenici"
    },
    {
        id: 5,
        data: various_equipment,
        name: "Equipaggiamenti vari"
    },
];

const input = document.querySelector("input");
const searchBoxContainer = document.body.querySelector(".sections-buttons-container");
const table = document.body.querySelector("table");

let selectedData = 0;
let filter = "";

document.body.onload = () => {
    // Succede dopo che la pagina viene caricata
    database.forEach(data => {
        generateDatabaseSelector(data);
    });
    loadDatabase();

    input.addEventListener("input", (e) => {
        filter = String(e.target.value).toLowerCase();
        Object.values(table.rows).forEach(tr => {
            let id = tr.childNodes[0].textContent;
            let value = String(tr.childNodes[1].textContent);

            //console.log(id, value, "Filter: " + filter);
            if (tr.children[0].tagName.toLowerCase() !== "th") {
                if (!!filter && String(id).includes(String(filter)) || value.toLowerCase().startsWith(String(filter).toLowerCase())) {
                    tr.style.display = "table-row";
                } else {
                    tr.style.display = "none";
                }
            }

        })
    });

};

function addRowData(data) {
    //console.log("Adding rows...", data)
    if (!data) {
        //console.log("Impossibile caricare i dati: " + data);
        return;
    }
    data.forEach(d => {
        const row = document.createElement("tr");
        const dataID = document.createElement("td");
        const dataValue = document.createElement("td");

        const dId = d.id;
        const dValue = String(d.value);

        dataID.textContent = dId;
        dataValue.textContent = String(dValue[0]).toUpperCase() + dValue.substring(1, dValue.length);

        dataID.className = "id-cell";
        dataValue.className = "value-cell";

        if (!!filter && String(dId).includes(String(filter)) || dValue.toLowerCase().startsWith(String(filter).toLowerCase())) {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }

        row.appendChild(dataID);
        row.appendChild(dataValue);
        table.appendChild(row);

        row.onclick = (e) => {
            //console.log()
            navigator.clipboard.writeText(dId);
            mostraNotifica("L'ID di \"" + dValue + "\" è stato copiato!")
        }
    });

}

function clearTableData() {
    while (table.rows.length > 1) {
        table.deleteRow(table.rows.length - 1);
    }
}

function mostraNotifica(messaggio) {
    let toast = document.getElementById("toast");
    if (!toast) {
        toast = document.createElement("div");
        toast.id = "toast";
        document.body.appendChild(toast);
    }
    toast.textContent = messaggio;
    toast.className = "show";
    setTimeout(() => { toast.className = toast.className.replace("show", ""); }, 3000);
}

function loadDatabase() {
    const buttons = searchBoxContainer.querySelectorAll("button");
    const data = database.find(x => x.id === selectedData);



    buttons.forEach(b => {
        //console.log(b)
        if (Number(b.getAttribute("data-databaseId")) == Number(data.id)) {
            b.setAttribute("data-isSelected", "true");
        } else {
            b.setAttribute("data-isSelected", "false");
        }
    });

    addRowData(data.data);
}

function generateDatabaseSelector(data) {
    const btn = document.createElement("button");
    btn.textContent = data.name;
    btn.setAttribute("data-databaseId", Number(data.id))
    btn.setAttribute("data-isSelected", "false")
    searchBoxContainer.appendChild(btn);

    btn.onclick = () => {
        if (Number(selectedData) !== Number(data.id) || selectedData === null) {
            selectedData = data.id;
            clearTableData();
            loadDatabase();
        } else {
            mostraNotifica("Categoria già selezionata!")
            return;
        }
    };
}