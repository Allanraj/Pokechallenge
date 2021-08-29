webpackJsonpCoveo__temporary([76],{235:function(t,e,o){"use strict";var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}();Object.defineProperty(e,"__esModule",{value:!0});var i=o(7),r=o(8),a=o(5),s=o(11),c=o(17),u=o(53),h=o(93),p=o(1),d=o(2),l=o(6),g=o(26),f=o(0),m=o(3);o(596);var v=o(12),y=o(41),k=o(13);e.accessTokenStorageKey="coveo-auth-provider-access-token";var C=function(t){function o(e,n,i,h){void 0===n&&(n={});var p=t.call(this,e,o.ID,i)||this;return p.element=e,p.options=n,p._window=h,p.options=r.ComponentOptions.initComponentOptions(e,o,n),a.Assert.exists(p.options.name),p.handlers=[],p._window=p._window||window,p.redirectCount=0,p.bind.onRootElement(s.QueryEvents.buildingCallOptions,p.handleBuildingCallOptions),p.bind.onRootElement(s.QueryEvents.queryError,p.handleQueryError),p.bind.onRootElement(c.InitializationEvents.nuke,p.handleNuke),p.bind.onRootElement(c.InitializationEvents.afterComponentsInitialization,function(t){return p.onAfterComponentsInitialization(t)}),p.bind.onRootElement(u.SettingsEvents.settingsPopulateMenu,function(t){t.menuData.push({text:l.l("Reauthenticate",p.options.caption),className:"coveo-authentication-provider",onOpen:function(){return p.authenticateWithProvider()},svgIcon:v.SVGIcons.icons.dropdownAuthenticate,svgIconClassName:"coveo-authentication-provider-svg"})}),p}return n(o,t),o.prototype.getHandshakeTokenFromUrl=function(){var t=y.HashUtils.getHash(),e=y.HashUtils.getValue("handshake_token",t);return"string"==typeof e?e:""},o.prototype.onAfterComponentsInitialization=function(t){var e=this,o=this.getHandshakeTokenFromUrl();if(!o)return this.loadAccessTokenFromStorage();if(this.shouldExchangeHandshakeToken){var n=this.exchangeHandshakeToken(o).then(function(t){return e.storeAccessToken(t)}).then(function(){return e.loadAccessTokenFromStorage()}).catch(function(t){return e.logger.error(t)});t.defer.push(n)}},Object.defineProperty(o.prototype,"shouldExchangeHandshakeToken",{get:function(){var t=p.$$(this.element).getAttribute("data-tab"),e=y.HashUtils.getHash(),o=y.HashUtils.getValue(k.QUERY_STATE_ATTRIBUTES.T,e);return!t||t===o},enumerable:!0,configurable:!0}),o.prototype.exchangeHandshakeToken=function(t){var o=localStorage.getItem(e.accessTokenStorageKey),n=o?{handshakeToken:t,accessToken:o}:{handshakeToken:t};return this.queryController.getEndpoint().exchangeHandshakeToken(n)},o.prototype.storeAccessToken=function(t){localStorage.setItem(e.accessTokenStorageKey,t)},o.prototype.loadAccessTokenFromStorage=function(){var t=localStorage.getItem(e.accessTokenStorageKey);t&&this.queryController.getEndpoint().accessToken.updateToken(t)},o.prototype.handleBuildingCallOptions=function(t){t.options.authentication.push(this.options.name)},o.prototype.handleQueryError=function(t){var e=t.error;e.isMissingAuthentication&&e.provider===this.options.name&&this.redirectCount<2&&-1!==this.redirectCount?(++this.redirectCount,this.authenticateWithProvider()):(this.logger.error("The AuthenticationProvider is in a redirect loop. This may be due to a back-end configuration problem."),this.redirectCount=-1)},o.prototype.authenticateWithProvider=function(){this.options.useIFrame?this.authenticateWithIFrame():this.redirectToAuthenticationProvider()},o.prototype.redirectToAuthenticationProvider=function(){this.logger.info("Redirecting to authentication provider "+this.options.name),this._window.location.href=this.getAuthenticationProviderUriForRedirect()},o.prototype.authenticateWithIFrame=function(){this.logger.info("Using iframe to retrieve authentication for provider "+this.options.name);var t,e=p.$$("iframe",{src:this.getAuthenticationProviderUriForIFrame()}).el;t=this.options.showIFrame?this.createPopupForVisibleIFrame(e):this.createPopupForWaitMessage(e);var o=this.createHandler(t,e);p.$$(this._window).one("message",o),this.handlers.push(o)},o.prototype.createHandler=function(t,e){var o=this;return function(){p.$$(e).detach(),o.logger.info("Got authentication for provider "+o.options.name+"; retrying query."),t.close(),o.queryController.executeQuery()}},o.prototype.handleNuke=function(){var t=this;f.each(this.handlers,function(e){return p.$$(t._window).off("message",e)})},o.prototype.createPopupForWaitMessage=function(t){var e=p.$$("div",{className:"coveo-waiting-for-authentication-popup"},h.DomUtils.getBasicLoadingAnimation()).el;return p.$$(t).hide(),document.body.appendChild(t),g.ModalBox.open(e,{title:l.l("Authenticating",this.options.caption),sizeMod:"small",body:this.searchInterface.options.modalContainer}),g.ModalBox},o.prototype.createPopupForVisibleIFrame=function(t){p.$$(t).addClass("coveo-authentication-iframe");var e=p.$$("div",{},t).el;return g.ModalBox.open(e,{title:l.l("Authenticating",this.options.caption),className:"coveo-authentication-popup",sizeMod:"big",body:this.searchInterface.options.modalContainer}),g.ModalBox},o.prototype.getAuthenticationProviderUriForRedirect=function(){return this.queryController.getEndpoint().getAuthenticationProviderUri(this.options.name,this._window.location.href,void 0)},o.prototype.getAuthenticationProviderUriForIFrame=function(){return this.queryController.getEndpoint().getAuthenticationProviderUri(this.options.name,void 0,"success")},o.ID="AuthenticationProvider",o.doExport=function(){m.exportGlobally({AuthenticationProvider:o})},o.options={name:r.ComponentOptions.buildStringOption(),caption:r.ComponentOptions.buildStringOption({postProcessing:function(t,e){return t||e.name}}),useIFrame:r.ComponentOptions.buildBooleanOption({defaultValue:!1,alias:["useIframe"]}),showIFrame:r.ComponentOptions.buildBooleanOption({defaultValue:!0,alias:["showIframe"],depend:"useIFrame"})},o}(i.Component);e.AuthenticationProvider=C,d.Initialization.registerAutoCreateComponent(C)},596:function(t,e){}});
//# sourceMappingURL=AuthenticationProvider.min__5585ef6718b0f0514f71.js.map