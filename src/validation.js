
const validation = () => {

    const uName = document.getElementById('uName').value;
    const pwd = document.getElementById('pwd').value;


    if (uName == 'riwaj' && pwd == '1212') {
        
        alert('working');
        // app.get("/admin", (req, res) => {
        //     res.render('admin');
        // });
        console.log(uName);
        console.log(pwd);

    }
    else {
        alert('Sorry the authentication is not valid');
    }
}