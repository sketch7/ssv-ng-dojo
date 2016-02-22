import {IStateProvider} from "angular-ui-router";

import consts from "./app.const";

import {LayoutController} from "./areas/layout/layout.controller";
import {HomeController} from "./areas/home/home.controller";

/*@ngInject*/
export default function appRouteConfigFunc(
	$stateProvider: IStateProvider,
	$urlRouterProvider: IUrlRouterProvider
) {
	console.log("config routing..");
	const defaultControllerAs = "vm";

	$stateProvider.state("shell", {
		url: "/",
		abstract: true,
		templateUrl: "areas/layout/layout.html",
		controller: LayoutController.id,
		controllerAs: defaultControllerAs,
	});

	$stateProvider.state("shell.home", {
		url: "",
		templateUrl: "areas/home/home.html",
		controller: HomeController.id,
		controllerAs: defaultControllerAs,
		//				resolve: {
		//					fail: () => {
		//						throw new Error("Fellaq!");
		//					}
		//				}
	});
			
	// $stateProvider.state("shell.hero", {
	// 	url: "hero/:hero",
	// 	templateUrl: "areas/hero/hero.html",
	// 	controller: HeroController.id,
	// 	controllerAs: defaultControllerAs
	// });
	// 
	// $stateProvider.state("shell.basicform", {
	// 	url: "basic-form",
	// 	templateUrl: "areas/basic-form/basic-form.html",
	// 	controller: BasicFormController.id,
	// 	controllerAs: defaultControllerAs
	// });
	// 
	// $stateProvider.state("shell.command-lab", {
	// 	url: "command-lab",
	// 	templateUrl: "areas/labs/command-lab.html",
	// 	controller: CommandLabController.id,
	// 	controllerAs: defaultControllerAs
	// });
	// 
	// $stateProvider.state("error", {
	// 	url: "/error",
	// 	templateUrl: "areas/error/error.html",
	// 	controller: ErrorController.id,
	// 	controllerAs: defaultControllerAs
	// });
			
	$urlRouterProvider.otherwise("/");
}