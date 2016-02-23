import {ILog, ILoggerFactory} from "core/logger/logger";
import consts from "app/app.const";
import {IUserInfo} from "modules/user/user";

export class BasicFormController {
	static id = "basicFormController";

	title = "Basic Form";
	alias: string;

	private _logger: ILog;

	/*@ngInject*/
	constructor(
		private loggerFactory: ILoggerFactory,
		private userInfo: IUserInfo
	) {

		this._logger = loggerFactory(BasicFormController.id);
		this._logger.info("ctor", "", { alias: this.alias });
		this.alias = userInfo.alias;
	}

	save(): void {
		this._logger.info("save", "yay!", { alias: this.alias });
		this.userInfo.alias = this.alias;
	}
}