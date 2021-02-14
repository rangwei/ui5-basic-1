sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/model/json/JSONModel",
	"../model/formatter"
], function(Controller, MessageToast, JSONModel, formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.Home", {

		formatter: formatter,

		onInit: function () {
		},

		onShowHello: function() {

			var sRecipient = this.getView().getModel().getProperty("/recipient/name");
			MessageToast.show(sRecipient);
		},
		onPress: function(oEvent) {

            var oSelectedItem = oEvent.getSource();
            var oContext = oSelectedItem.getBindingContext("employee");
            var sPath = oContext.getPath();
            var oProductDetailPanel = this.byId("FormDisplay471");
			oProductDetailPanel.bindElement({ path: sPath, model: "employee" });
			
        }
	});
});
