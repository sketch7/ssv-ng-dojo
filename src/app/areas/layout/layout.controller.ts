import {ILog, ILoggerFactory} from "core/logger/logger";

import consts from "app/app.const";


export class LayoutController {
	static id = "layoutController";

	private _logger: ILog;

	/*@ngInject*/
	constructor(
		private loggerFactory: ILoggerFactory

	) {

		this._logger = loggerFactory(LayoutController.id);
		this._logger.info("ctor", "init");
	}
}