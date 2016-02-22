import {IRootElementService} from "angular";
import {ILog, ILoggerFactory} from "core/logger/logger";

export class ErrorController {
	static id = "errorController";

	private _logger: ILog;

	/*@ngInject*/
	constructor(
		private loggerFactory: ILoggerFactory,
		private $rootElement: IRootElementService
	) {

		this._logger = loggerFactory(ErrorController.id);
		this._logger.debug("ctor", "init");
		$rootElement.addClass("error");
	}


}