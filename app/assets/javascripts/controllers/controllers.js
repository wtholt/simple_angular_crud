var indexCtrl = contactList.controller('indexCtrl',['$scope', 'contactData', function($scope, contactData){
  $scope.contacts = contactData.data;
  $scope.formContactName = '';
  $scope.formContactPhone = '';
  $scope.formContactEmail = '';
  $scope.editing = false
  contactData.loadContacts();

  $scope.submitForm = function() {
    if($scope.editing == false){
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
  } else if($scope.editing == true){
      contactData.updateContact(
        {
          contact: {
            id: $scope.formContactId , name: $scope.formContactName, phone: $scope.formContactPhone, email: $scope.formContactEmail
          }
        }
      );
      $scope.formContactName = '';
      $scope.formContactPhone = '';
      $scope.formContactEmail = '';
      $scope.editing = false
  }
  };

  $scope.deleteContact = function(contactId) {
    contactData.deleteContact(contactId);
  };

  $scope.editContact = function(contact) {
    $scope.editing = true
    $scope.formContactName = contact.name
    $scope.formContactPhone = contact.phone
    $scope.formContactEmail = contact.email
    $scope.formContactId = contact.id
    // console.log(contact)
  };
  
}]);