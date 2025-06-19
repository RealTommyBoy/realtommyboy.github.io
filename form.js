function sendEmail() {
    const templateParams = {
        subject: document.querySelector("#subject").value,
        contact: document.querySelector("#contact").value,
        message: document.querySelector("#message").value
    };

    emailjs.send("service_zoyl15q", "template_brvx4n2", templateParams).then(
        ()=> alert("Email Sent!").catch(()=>("Email not sent. Please Try Again"))
    );

}