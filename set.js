var selectedRow = null
function dalam_kondisi_submit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["fullName"] = document.getElementById("fullName").value;
    formData["npm"] = document.getElementById("npm").value;
    formData["alamat"] = document.getElementById("alamat").value;
    formData["email"] = document.getElementById("email").value;
    formData["judulblog"] = document.getElementById("judulblog").value;
    return formData;
}

function insertNewRecord(data) {

    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.npm;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.alamat;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.email; 

    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="onEdit(this)"><img src='pencil.svg' alt=''></a>&nbsp;
                       <a onClick="onDelete(this)"><img src='trash.svg' alt=''></a>`;

}

function resetForm() {
    document.getElementById("fullName").value = "";
    document.getElementById("npm").value = "";
    document.getElementById("alamat").value = "";
    document.getElementById("email").value = "";
    document.getElementById("judulblog").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("fullName").value = selectedRow.cells[0].innerHTML;

    document.getElementById("npm").value = selectedRow.cells[1].innerHTML;

    document.getElementById("alamat").value = selectedRow.cells[2].innerHTML;

    document.getElementById("email").value = selectedRow.cells[3].innerHTML;

    document.getElementById("judulblog").value = selectedRow.cells[4].innerHTML;

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.fullName;

    selectedRow.cells[1].innerHTML = formData.npm;

    selectedRow.cells[2].innerHTML = formData.alamat;

    selectedRow.cells[3].innerHTML = formData.email;

    selectedRow.cells[4].innerHTML = formData.judulblog;

}

function onDelete(td) {
    if (confirm('Apakah anda ingin menghapus data ini?')) {
        row = td.parentElement.parentElement;
        document.getElementById("employeeList").deleteRow(row.rowIndex);
        resetForm();
    }
}

function validate() {
    isValid = true;
    if (document.getElementById("npm").value == "") {
        isValid = false;
        document.getElementById("log-requirement-npm").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("log-requirement-npm").classList.contains("hide"))
            document.getElementById("log-requirement-npm").classList.add("hide");
    }
    return isValid;
}