webpackJsonpCoveo__temporary([62],{269:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0}),n(658);var r,i=n(3),a=n(16),s=n(1),u=n(15),l=n(12),c=n(4),p=n(7),g=n(8),d=n(2);!function(t){t[t.Undefined=0]="Undefined",t[t.Lowest=1]="Lowest",t[t.Low=2]="Low",t[t.Average=3]="Average",t[t.Good=4]="Good",t[t.Best=5]="Best"}(r=e.RatingValues||(e.RatingValues={}));var f=function(t){function e(n,o,r,i){var a=t.call(this,n,e.ID,r)||this;return a.element=n,a.options=o,a.bindings=r,a.result=i,a.options=g.ComponentOptions.initComponentOptions(n,e,o),c.Utils.isNullOrUndefined(i.rating)||a.renderComponent(n,i.rating),a}return o(e,t),e.prototype.renderComponent=function(t,e){for(var n=1;n<=5;n++)this.renderStar(t,n<=e,n)},e.prototype.renderStar=function(t,e,n){var o,r=this,i=s.$$(t).find('a[rating-value="'+n+'"]');null==i?(o=s.$$("a",{className:"coveo-result-rating-star"},l.SVGIcons.icons.star),u.SVGDom.addClassToSVGInContainer(o.el,"coveo-result-rating-star-svg"),t.appendChild(o.el),this.bindings.searchInterface.options.enableCollaborativeRating&&((new a.AccessibleButton).withElement(o).withSelectAction(function(t){var e=t.currentTarget;r.rateDocument(parseInt(e.getAttribute("rating-value")))}).withLabel(n.toString()).build(),o.on("mouseover",function(e){var n=e.currentTarget;r.renderComponent(t,parseInt(n.getAttribute("rating-value")))}),o.on("mouseout",function(){r.renderComponent(t,r.result.rating)})),o.el.setAttribute("rating-value",n.toString())):o=s.$$(i),o.toggleClass("coveo-result-rating-star-active",e)},e.prototype.rateDocument=function(t){var e=this,n={rating:r[t],uniqueId:this.result.uniqueId};this.queryController.getEndpoint().rateDocument(n).then(function(){e.result.rating=t,e.renderComponent(e.element,t)}).catch(function(){e.logger.error("An error occurred while rating the item")})},e.ID="ResultRating",e.doExport=function(){i.exportGlobally({ResultRating:e})},e}(p.Component);e.ResultRating=f,d.Initialization.registerAutoCreateComponent(f)},658:function(t,e){}});
//# sourceMappingURL=ResultRating.min__5585ef6718b0f0514f71.js.map