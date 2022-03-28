var emailApplication = {
    name: "Matthew",
    inbox: [{ subject: "very import", content: "fhsdfhosjfaos" }, { subject: "not important", content: "did you get my last email" }],
    sent: [],
    draft: [],
    contacts: [{ name: 'Matt', email: 'matt@carolinafintechhub.org' }, { name: 'Julian', email: 'julian@carolinafintechhub.org' }, { name: 'Erin', email: 'erin@carolinafintechhub.org' }, { name: 'Hector', email: 'hector@carolinafintechhub.org' }],

}

for (var i = 0; i < emailApplication.contacts.length; i++) {
    console.log(emailApplication.contacts[i].name);
    console.log(emailApplication.contacts[i].email);
}

for (var j = 0; j < emailApplication.inbox.length; j++) {
    console.log(emailApplication.inbox[j]);
}