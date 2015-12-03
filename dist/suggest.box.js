!function(){"use strict";angular.module("azSuggestBox",[])}(),function(){"use strict";angular.module("azSuggestBox").directive("sbDropdownItem",[function(){return{transclude:"element",restrict:"AE",link:function(e,t,i,n,o){var s=[],l=e.listAlias,r=t.parent();e.$watch("isOpen",function(){e.isOpen?r.removeClass("ng-hide"):r.addClass("ng-hide")}),e.$watchCollection("list",function(){for(var i=0;i<s.length;i++)s[i].clone[1].outerHTML="",s[i].scope.$destroy();s=[];for(var n=0;n<e.list.length;n++){var r=e.list[n],h=e.$new();h[l]=r,h.itemId=n,o(h,function(e,i){i.hidden=!1,i.hide=function(){angular.element(e).addClass("ng-hide"),i.hidden=!0},i.show=function(){angular.element(e).removeClass("ng-hide"),i.hidden=!1},i.highlight=function(){angular.element(e).addClass("sb-list-item-highlight")},i.unHighlight=function(){angular.element(e).removeClass("sb-list-item-highlight")},s.push({scope:i,clone:e}),0==n?t.after(e):s[n-1].clone.after(e),e.on("click",function(){i.model.push(i.itemId),i.$apply()})})}}),e.hideListItem=function(t){t==e.highlightedItem&&(s[t].scope.unHighlight(),e.highlightedItem=-1),s[t].scope.hide()},e.showListItem=function(e){s[e]&&s[e].scope.show()},e.getSearchResultsCount=function(){for(var e=0,t=0;t<s.length;t++)s[t].scope.hidden||e++;return e},e.getListItemsCount=function(){return s.length},e.highlightedItem=-1,e.highlightListItem=function(t){e.highlightedItem>-1&&s[e.highlightedItem].scope.unHighlight(),s[t].scope.highlight(),e.highlightedItem=t},e.highlightNextItem=function(){var t=0,i=e.highlightedItem;do t++,i++,i>=s.length&&(i=0);while(t<s.length&&s[i].scope.hidden);e.highlightListItem(i)},e.highlightPrevItem=function(){var t=0,i=e.highlightedItem;do t++,i--,-1>=i&&(i=s.length-1);while(t<s.length&&s[i].scope.hidden);e.highlightListItem(i)}}}}])}(),function(){"use strict";angular.module("azSuggestBox").directive("sbRemoveItemFromSelection",[function(){return{restrict:"AE",link:function(e,t,i){t.on("click",function(){e.sbRemoveItemFromSelection(),e.$apply()})}}}])}(),function(){"use strict";angular.module("azSuggestBox").directive("sbSelectionItem",[function(){return{transclude:"element",restrict:"AE",link:function(e,t,i,n,o){var s=[],l=e.modelAlias;e.$watchCollection("model",function(){for(var i=0;i<s.length;i++)s[i].clone[0].outerHTML="",s[i].scope.$destroy();s=[];for(var n=0;n<e.model.length;n++){var r=e.list[e.model[n]],h=e.$new();h[l]=r,h.itemId=e.model[n],o(h,function(e,i){i.sbRemoveItemFromSelection=function(){i.showListItem(i.itemId),i.model.splice(i.model.indexOf(i.itemId),1)},s.push({scope:i,clone:e}),0==n?t.after(e):s[n-1].clone.after(e)})}})}}}])}(),function(){"use strict";angular.module("azSuggestBox").directive("azSuggestBox",[function(){return{transclude:!0,restrict:"AE",scope:{sbList:"@",sbModel:"@",sbMaxSelection:"@",sbAllowFreeText:"=",sbAllowAddItem:"=",sbNewItemField:"@",sbSearchField:"@",sbBroadcastEventName:"@",sbCloseListOnSelect:"=",sbOnSelectionChange:"&",sbAllowDuplicates:"="},link:function(e){e.init()},controller:["$scope","$element","$transclude","$timeout",function(e,t,i,n){e.init=function(){e.sbCloseListOnSelect=e.sbCloseListOnSelect||!1;var n,o,s,l,r=e.sbList.split(" ");if(3!=r.length)throw"invalid sbList attribute";s=r[0],n=r[2],e.listAlias=s,e.list=e.$parent.$eval(n);var h=e.sbModel.split(" ");if(3!=h.length)throw"invalid sbModel attribute";l=h[0],o=h[2],e.modelAlias=l,e.model=e.$parent.$eval(o),i(e,function(e,i){i.isOpen=!1,i.$watch("isOpen",function(){i.isOpen?t.addClass("open"):t.removeClass("open")}),t.append(e)}),e.$watch("model",function(){e.sbOnSelectionChange(),e.sbCloseListOnSelect&&(e.isOpen=!1,e.$broadcast("clearSearch")),e.sbAllowDuplicates||e.model.forEach(function(t){e.hideListItem(t)})},!0),e.$watch("list",function(){},!0)}}]}}])}(),function(){"use strict";angular.module("azSuggestBox").directive("sbTriggerArea",[function(){return{restrict:"AE",link:function(e,t,i){t.on("click",function(){e.isOpen=!e.isOpen,e.$apply()})}}}])}(),function(){"use strict";angular.module("azSuggestBox").directive("sbTypeAhead",[function(){return{restrict:"A",require:"ngModel",link:function(e,t,i,n){e[i.ngModel]="",t.on("keydown",function(t){switch(t.keyCode){case 40:e.isOpen=!0,e.highlightNextItem(),t.preventDefault();break;case 38:e.highlightPrevItem(),t.preventDefault();break;case 13:e.highlightedItem>-1&&e.model.push(e.highlightedItem),t.preventDefault();break;case 27:e.isOpen=!1,e.$emit("clearSearch"),t.preventDefault();break;case 8:0==e[i.ngModel].length&&e.showListItem(e.model.pop())}e.$apply()}),e.$on("clearSearch",function(){e[i.ngModel]="";for(var t=0;t<e.list.length;t++)e.showListItem(t);e.sbAllowDuplicates||e.model.forEach(function(t){e.hideListItem(t)})}),n.$viewChangeListeners.push(function(){e.isOpen=!0;for(var t=e[i.ngModel].toLowerCase(),n=0,o=-1,s=0;s<e.list.length;s++)if(0==t.length)e.showListItem(s),n++,o=s;else{var l=e.list[s];if("object"==typeof l){for(var r in l)if(l.hasOwnProperty(r)){var h;if("string"==typeof l[r])h=l[r].toLowerCase();else{if("number"!=typeof l[r])break;h=l[r].toString()}if(h.search(new RegExp(t))>-1){e.showListItem(s),n++,o=s;break}e.hideListItem(s)}}else if("string"==typeof l){if(l.toLowerCase().search(new RegExp(t))>-1){e.showListItem(s),n++,o=s;break}e.hideListItem(s)}else if("number"==typeof l){if(l.toString().search(new RegExp(t))>-1){e.showListItem(s),n++,o=s;break}e.hideListItem(s)}}e.sbAllowDuplicates||e.model.forEach(function(t){e.hideListItem(t),o==t&&(o=-1,n=2)}),1==n&&e.highlightListItem(o)})}}}])}();