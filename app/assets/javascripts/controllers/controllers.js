var indexCtrl = contactList.controller('indexCtrl', function($scope, contactData){
  $scope.contacts = contactData.data;
  $scope.formContactName = '';
  $scope.formContactPhone = '';
  $scope.formContactEmail = '';
  contactData.loadContacts();

  $scope.submitForm = function() {
    contactData.addContact(
      {
        contact: {
          name: $scope.formContactName, phone: $scope.formContactPhone, email: $scope.formContactEmail
        }
      }
    );
    $scope.formContactName = '';
    $scope.formContactPhone = '';
    $scope.formContactEmail = '';
  };

  $scope.deleteContact = function(contactId) {
    contactData.deleteContact(contactId);
  };

  $scope.editContact = function(contact) {
    $scope.formContactName = contact.name
    $scope.formContactPhone = contact.phone
    $scope.formContactEmail = contact.email
    // console.log(contact)
    $scope.submitForm = function() {
      contactData.updateContact(
        {
          contact: {
            id: contact.id , name: $scope.formContactName, phone: $scope.formContactPhone, email: $scope.formContactEmail
          }
        }
      );
      $scope.formContactName = '';
      $scope.formContactPhone = '';
      $scope.formContactEmail = '';
    }
  };
  
});