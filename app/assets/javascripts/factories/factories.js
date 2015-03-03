contactList.factory('contactData', function($http) {
  contactData = {
    data: {
      contacts: [
      ]
    }
  }

  contactData.loadContacts = function() {
    $http.get("/contacts.json").success(function(contactsFromServer){
      _.each(contactsFromServer, function(contact){
        contactData.pushContact(contact)
      })
    });
  }

  contactData.addContact = function(contact) {
    $http.post('/contacts.json', contact).success(function(contactsFromServer){
      contactData.pushContact(contactsFromServer);
    })
  }

  contactData.updateContact = function(contact) {
    // console.log(contact)
    $http.patch("/contacts/" + contact.contact.id + '.json', contact).success(function(data){
      var foundContact = _.findWhere( contactData.data.contacts, {id: parseInt(contact.contact.id)})
      foundContact.name = data.name
      foundContact.phone = data.phone
      foundContact.email = data.email

    })
  }

  contactData.pushContact = function(contact) {
    contactData.data.contacts.push(contact);
  }

  contactData.deleteContact = function(contactId) {
    $http.delete("/contacts/" + contactId + ".json").success(function(data){
      var deletedContact = _.findWhere( contactData.data.contacts, {id: parseInt(contactId)})
      contactData.data.contacts = _.without(contactData.data.contacts, deletedContact)
    })
  }

  contactData.editContact = function(contactId) {
    $http.get("/contacts/" + contactId + "/edit.json").success(function(data){
    })
  }

  return contactData;
});