sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel",
	"./model/models"
], function(UIComponent, Device, JSONModel, ResourceModel ,models) {
	"use strict";

	return UIComponent.extend("sap.ui.demo.basicTemplate.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// set the device model
			this.setModel(models.createDeviceModel(), "device");

			// create the views based on the url/hash
			this.getRouter().initialize();

			 // set data model
			 var oData = {
				recipient : {
				   name : "World"
				}
			 };
			 var oModel = new JSONModel(oData);
			 this.setModel(oModel);

			 // set i18n model
			 var i18nModel = new ResourceModel({
				bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
				supportedLocales: [""],
				fallbackLocale: ""
			 });
			 this.setModel(i18nModel, "i18n");
		}
	});
});