import {IStateProvider, IUrlRouterProvider} from "angular-ui-router";

import consts from "./app.const";

import {LayoutController} from "./areas/layout/layout.controller";
import {HomeController} from "./areas/home/home.controller";
import {ErrorController} from "./areas/error/error.controller";
import {HeroController, heroResolver, heroesResolver} from "./areas/hero/hero";

export interface AppStateParams {
	hero?: string;
}

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
		templateUrl: `${consts.basePath}/areas/layout/layout.html`,
		controller: LayoutController,
		controllerAs: defaultControllerAs,
	});

	$stateProvider.state("shell.home", {
		url: "",
		templateUrl: `${consts.basePath}/areas/home/home.html`,
		controller: HomeController,
		controllerAs: defaultControllerAs,
		resolve: {
			heroesResolve: heroesResolver
			// 	fail: () => {
			// //						throw new Error("Fellaq!");
			// //					}
			// }
		}
	});

	$stateProvider.state("shell.hero", {
		url: "hero/:hero",
		templateUrl: `${consts.basePath}/areas/hero/hero.html`,
		controller: HeroController,
		controllerAs: defaultControllerAs,
		resolve: {
			heroResolve: heroResolver
		}
	});
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
	$stateProvider.state("error", {
		url: "/error",
		templateUrl: `${consts.basePath}/areas/error/error.html`,
		controller: ErrorController,
		controllerAs: defaultControllerAs
	});

	$urlRouterProvider.otherwise("/");
}