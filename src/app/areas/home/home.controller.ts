import {ILog, ILoggerFactory} from "core/logger/logger";
import consts from "app/app.const";

export class HomeController {
	static id = "homeController";

	title = consts.name;

	private _logger: ILog;

	//static $inject = ["translationService", "loggerFactory", "config"]; // manual way without using ngAnnotate
	/*@ngInject*/
	constructor(
		// private translationService: ITranslationService,
		private loggerFactory: ILoggerFactory
	) {

		this._logger = loggerFactory(HomeController.id);
	}

}