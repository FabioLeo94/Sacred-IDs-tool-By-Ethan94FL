const version = "1.1.1"; // MAJOR, MINOR, PATCH
const input = document.querySelector("input");
const searchBoxContainer = document.body.querySelector(".sections-buttons-container");
const table = document.body.querySelector("table");

let selectedData = 0;
let filter = "";

document.body.onload = () => {
    // Succede dopo che la pagina viene caricata
    const versionStringElement = document.querySelector(".version-string");
    versionStringElement.textContent = "V" + version;
    versionStringElement.setAttribute("title", "La versione in uso è la " + version);

    database.forEach(data => {
        generateDatabaseSelector(data);
    });
    loadDatabase();

    input.addEventListener("input", (e) => {
        filter = String(e.target.value).toLowerCase();
        Object.values(table.rows).forEach(tr => {
            let id = tr.childNodes[0].textContent;
            let value = String(tr.childNodes[1].textContent);

            if (tr.children[0].tagName.toLowerCase() !== "th") {
                if (!!filter && String(id).includes(String(filter)) || value.toLowerCase().includes(String(filter).toLowerCase())) {
                    tr.style.display = "table-row";
                    tr.classList.remove("hidden")
                } else {
                    tr.classList.add("hidden");
                    tr.style.display = "none";
                }
            }
        })
    });
};

function addRowData(data) {
    if (!data) {
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

        if (!!filter && String(dId).includes(String(filter)) || dValue.toLowerCase().includes(String(filter).toLowerCase())) {
            row.style.display = "table-row";
        } else {
            row.style.display = "none";
        }

        row.appendChild(dataID);
        row.appendChild(dataValue);
        table.appendChild(row);

        row.onclick = (e) => {
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