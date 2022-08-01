function sendMail() {   
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;
    var msg=document.getElementById("msg").value;
    var body="<span align='center'>A Message From Sanidhya's smtp site : "+name +"<br><br>Email : "+email+"<br><br>Phone Number : " +phone+"<br><br>Message : "+msg;

    Email.send({
        SecureToken : "99ffa8d5-8f61-445f-8665-1bd0d32a6208",
       
        To : `sanidhyaitmornigbvp@gmail.com,${email}`,
        From : "sanidhyaitmornigbvp@gmail.com",
        Subject : "Email from "+ name,
        Body : body,
        Cc : email,
    }).then(
    message => alert(message)
    );
}