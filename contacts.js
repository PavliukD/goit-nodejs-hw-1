const fs = require("fs/promises")
const path = require("path")
const { v4 } = require("uuid")

const contactsPath = path.join(__dirname, 'db', 'contacts.json')

async function listContacts(){
    const contacts = await fs.readFile(contactsPath)
    const contatcsList = JSON.parse(contacts)
    return contatcsList
}

async function getContactById(contactId){
    const contactsList = await listContacts()
    const contact = contactsList.find(item => item.id === contactId.toString())
    if (!contact){
        console.log('no contacts found!')
        return null
    }
    console.log(contact)
    return contact
}

async function removeContact(contactId){
    const contactsList = await listContacts()
    const idx = contactsList.findIndex(item => item.id === contactId.toString())
    if (idx === -1){
        console.log('no contacts found!')
        return null
    }
    const deleteContact = contactsList.splice(idx, 1)
    await fs.writeFile(contactsPath, JSON.stringify(contactsList,null,4))
    console.log(deleteContact)
    return deleteContact

}

async function addContact(name, email, phone){
    const contactsList = await listContacts()
    const idx = contactsList.findIndex(item => item.email === email)
    if (idx !== -1){
        console.log('the user with such data is already in the database')
        return null
    }
    const newUser = {
        "id": v4(),
        name,
        email,
        phone
    }
    contactsList.push(newUser)
    await fs.writeFile(contactsPath, JSON.stringify(contactsList,null,4))
    console.log(newUser)
}


module.exports = {
    listContacts,
    getContactById,
    removeContact,
    addContact,
}