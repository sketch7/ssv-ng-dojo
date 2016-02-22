import * as angular from "angular";

import consts from "./app.const";

import appRouteFunc from "./app.config.route";
import appConfigFunc from "./app.config";

import {ILoggerFactory, LoggerService, loggerFactory} from "./core/logger/logger";
//import {AppBootstrapper} from "./app.bootstrap";
import {NotificationService} from "./modules/notification/notification";

let app = angular.module(consts.moduleName, [
	"ngAnimate",
	"ngCookies",
	"ngTouch",
	"ngSanitize",
	"ui.router",
	"ui.bootstrap"
]);

// app.service(AppBootstrapper.id, AppBootstrapper);
app.service(LoggerService.id, LoggerService);
app.factory("loggerFactory", loggerFactory);
app.service(NotificationService.id, NotificationService);

app.config(appConfigFunc);
app.config(appRouteFunc);


app.run(
	/*@ngInject*/
	(
		$rootScope: angular.IRootScopeService,
		loggerFactory: ILoggerFactory,
		$state: angular.ui.IStateService) => {

		const logger = loggerFactory("app.startup");
		logger.info("run", "app launched!");

		$rootScope.$on(consts.events.uiRouter.$stateChangeError, (
			event: angular.IAngularEvent,
			toState: angular.ui.IState,
			toParams: any,
			fromState: angular.ui.IState,
			fromParams: any,
			error: Error
		) => {

			logger.error("$stateChangeError", "an error occured while loading state.", error);
			$state.go("error");
		});
	}
);

export default app;