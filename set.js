var selectedRow = null
function dalam_kondisi_submit() {
    if (memvalidasi_data()) {
        var formData = baca_data();
        if (selectedRow == null)
            tambah_data_form(formData);
        else
            update_data(formData);
        reset_data_awal();
    }
}

function baca_data() {
    var formData = {};
    formData["nama_mhs"] = document.getElementById("nama_mhs").value;
    formData["npm_mhs"] = document.getElementById("npm_mhs").value;
    formData["alamat_mhs"] = document.getElementById("alamat_mhs").value;
    formData["email_mhs"] = document.getElementById("email_mhs").value;
    formData["judul_blog_mhs"] = document.getElementById("judul_blog_mhs").value;
    return formData;
}

function tambah_data_form(data) {

    var table = document.getElementById("result_table").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);

    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.nama_mhs;

    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.npm_mhs;

    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.alamat_mhs;

    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.email_mhs;

    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.judul_blog_mhs; 

    cell4 = newRow.insertCell(5);
    cell4.innerHTML = `<a onClick="edit_data(this)"><img src='pencil.svg' alt=''></a>&nbsp;
                       <a onClick="hapus_data(this)"><img src='trash.svg' alt=''></a>`;

}

function reset_data_awal() {
    document.getElementById("nama_mhs").value = "";
    document.getElementById("npm_mhs").value = "";
    document.getElementById("alamat_mhs").value = "";
    document.getElementById("email_mhs").value = "";
    document.getElementById("judul_blog_mhs").value = "";
    selectedRow = null;
}

function edit_data(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("nama_mhs").value = selectedRow.cells[0].innerHTML;

    document.getElementById("npm_mhs").value = selectedRow.cells[1].innerHTML;

    document.getElementById("alamat_mhs").value = selectedRow.cells[2].innerHTML;

    document.getElementById("email_mhs").value = selectedRow.cells[3].innerHTML;

    document.getElementById("judul_blog_mhs").value = selectedRow.cells[4].innerHTML;

}

function update_data(formData) {
    selectedRow.cells[0].innerHTML = formData.nama_mhs;

    selectedRow.cells[1].innerHTML = formData.npm_mhs;

    selectedRow.cells[2].innerHTML = formData.alamat_mhs;

    selectedRow.cells[3].innerHTML = formData.email_mhs;

    selectedRow.cells[4].innerHTML = formData.judul_blog_mhs;

}

function hapus_data(td) {
    if (confirm('Apakah anda ingin menghapus data ini?')) {
        row = td.parentElement.parentElement;
        document.getElementById("result_table").deleteRow(row.rowIndex);
        reset_data_awal();
    }
}

function memvalidasi_data() {
    isValid = true;
    if (document.getElementById("npm_mhs").value == "") {
        isValid = false;
        document.getElementById("log-requirement-npm").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("log-requirement-npm").classList.contains("hide"))
            document.getElementById("log-requirement-npm").classList.add("hide");
    }
    return isValid;
}