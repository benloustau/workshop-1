var myModule = angular.module('Lesson03', []);

myModule.controller('MyController', function(){
	var self = this;

	self.me = {
		firstName: "Benjamin",
		lastName: "Loustau"
	};

	self.name = {}

	self.isEditing = false;

	self.setEdit = function() {
		self.isEditing = true;
		self.name.firstName = angular.copy(self.me.firstName)
		self.name.lastName = angular.copy(self.me.lastName)
	};

	self.update = function() {
		self.isEditing = false;
		angular.extend(self.me, self.name)
	}


	self.cancelEdit = function() {
		self.isEditing = false;
	};

});