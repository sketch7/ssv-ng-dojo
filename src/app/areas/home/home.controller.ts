import {ILog, ILoggerFactory} from "core/logger/logger";
import consts from "app/app.const";

export class HomeController {
	static id = "homeController";

	title = consts.name;

	private _logger: ILog;

	// static $inject = ["loggerFactory"]; // manual way without using ngAnnotate
	/*@ngInject*/
	constructor(
		private loggerFactory: ILoggerFactory
	) {

		this._logger = loggerFactory(HomeController.id);
	}

}