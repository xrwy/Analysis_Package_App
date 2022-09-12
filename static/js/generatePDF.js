function generatePDF() {
    const element = document.getElementById('root');
    let fileName = prompt('Enter a File Name Please','Default File Name : db_data.pdf')
    if(fileName === null){
        alert("Pdf file not downloaded");
    }else{
        var opt = {
            filename:fileName
        }
        html2pdf().set(opt).from(element).save();
    }
}
