import {IStateProvider, IUrlRouterProvider} from "angular-ui-router";

import consts from "./app.const";

import {LayoutController} from "./areas/layout/layout.controller";
import {HomeController} from "./areas/home/home.controller";
import {ErrorController} from "./areas/error/error.controller";
import {BasicFormController} from "./areas/basic-form/basic-form.controller";
import {HeroDetailController, HeroListController, heroResolver, heroesResolver} from "./areas/hero/hero";

export interface AppStateParams {
	hero?: string;
}

/*@ngInject*/
export default function appRouteConfigFunc(
	$stateProvider: IStateProvider,
	$urlRouterProvider: IUrlRouterProvider
) {
	console.log("config routing..");
	const defaultControllerAs = consts.controllerAs;

	$stateProvider.state(consts.routeStates.layout, {
		url: "/",
		abstract: true,
		templateUrl: `${consts.basePath}/areas/layout/layout.html`,
		controller: LayoutController,
		controllerAs: defaultControllerAs,
	});

	$stateProvider.state(consts.routeStates.home, {
		url: "",
		templateUrl: `${consts.basePath}/areas/home/home.html`,
		controller: HomeController,
		controllerAs: defaultControllerAs,
		resolve: {
			// 	fail: () => {
			// //						throw new Error("Fellaq!");
			// //					}
			// }
		}
	});

	$stateProvider.state(consts.routeStates.heroes, {
		url: "heroes",
		templateUrl: `${consts.basePath}/areas/hero/hero-list.html`,
		controller: HeroListController,
		controllerAs: defaultControllerAs,
		resolve: {
			heroesResolve: heroesResolver
		}
	});

	$stateProvider.state(consts.routeStates.hero, {
		url: "hero/:hero",
		templateUrl: `${consts.basePath}/areas/hero/hero-detail.html`,
		controller: HeroDetailController,
		controllerAs: defaultControllerAs,
		resolve: {
			heroResolve: heroResolver
		}
	});

	$stateProvider.state(consts.routeStates.basicForm, {
		url: "basic-form",
		templateUrl: `${consts.basePath}/areas/basic-form/basic-form.html`,
		controller: BasicFormController,
		controllerAs: defaultControllerAs
	});

	// $stateProvider.state("shell.command-lab", {
	// 	url: "command-lab",
	// 	templateUrl: "areas/labs/command-lab.html",
	// 	controller: CommandLabController.id,
	// 	controllerAs: defaultControllerAs
	// });
	// 
	$stateProvider.state(consts.routeStates.error, {
		url: "/error",
		templateUrl: `${consts.basePath}/areas/error/error.html`,
		controller: ErrorController,
		controllerAs: defaultControllerAs
	});

	$urlRouterProvider.otherwise("/");
}