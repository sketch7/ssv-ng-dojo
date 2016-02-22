import * as angular from "angular";
import app from "./app/app.module";


angular.element(document).ready(() => {
	angular.bootstrap(document.documentElement, [app.name], {
		strictDi: true
	});
});