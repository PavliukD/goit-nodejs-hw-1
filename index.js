const contactsOperations = require("./contacts")
const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
    switch (action) {
      case 'list':
        const contactsList = await contactsOperations.listContacts()
        console.log(contactsList)
        break;
  
      case 'get':
        const contact = await contactsOperations.getContactById(id)
        if (contact === null){
            console.log('no contacts found')
            break
        }
        console.log(contact)
        break;
  
      case 'add':
        if (name === ''){
            console.log('enter correct name!')
            break
        }
        if (email === ''){
            console.log('enter correct email!')
            break
        }
        if (phone === ''){
            console.log('enter correct phone number!')
            break
        }
        const newContact = await contactsOperations.addContact(name, email, phone)
        if (newContact === null){
            console.log('user with such data is already in the database')
            break
        }
        console.log(newContact)
        break;
  
      case 'remove':
        const delContact = await contactsOperations.removeContact(id)
        if (delContact === null){
            console.log('no contacts found!')
            break
        }
        console.log(delContact)
        break;
  
      default:
        console.warn('\x1B[31m Unknown action type!');
    }
  }
  
  invokeAction(argv);