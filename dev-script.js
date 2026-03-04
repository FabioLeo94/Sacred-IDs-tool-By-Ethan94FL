
let devEnabled = false;

function createJSON() {
    const fileinput = document.createElement("input");
    fileinput.style.display = "none";
    fileinput.accept = ".txt";
    document.body.appendChild(fileinput);
    fileinput.type = "file";

    fileinput.addEventListener("change", (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];

        reader.onload = (e) => {
            const lines = e.target.result.split("\n"); // Divide per riga
            const data = [];

            lines.forEach(line => {
                const [key, value] = line.split(": "); // Divide "numero" da "Nome_di_cosa"
                if (key && value) data.push({
                    id: key.trim(),
                    value: value.trim()
                });
            });

            console.log(data); // Risultato: { "1": "Nome1", "2": "Nome2" }

            JSONResult(JSON.stringify(data, null, 2));
        };
        reader.readAsText(file);
    })

    fileinput.showPicker();
}

function JSONResult(jsonString) {
    const result = document.createElement("textarea");
    const btn = document.createElement("button");
    const downloadFile = document.createElement("button");

    result.style.height = "600px";
    result.style.width = "100%";
    result.textContent = jsonString;
    result.contentEditable = "false";

    btn.textContent = "RIMUOVI TEXTAREA";
    downloadFile.textContent = "SCARICA JSON";

    document.body.appendChild(result);
    document.body.appendChild(btn);
    document.body.appendChild(downloadFile);

    btn.onclick = () => {
        document.body.removeChild(result);
        document.body.removeChild(btn);
        document.body.removeChild(downloadFile);
    };

    // 2. Crea il file (Blob)
    const blob = new Blob([jsonString], { type: "application/json" });

    // 3. Crea un link "fantasma" per il download
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "data.json"; // Nome del file in uscita

    // 4. Avvia il download e pulisci

    downloadFile.onclick = () => {
        link.click();
        URL.revokeObjectURL(link.href);
    };
}