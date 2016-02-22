import {ILog, ILoggerFactory} from "core/logger/logger";

export interface IUserInfo {
	alias: string;
}

export class UserInfo implements IUserInfo {
	static id = "userInfo";

	alias = "Chiko";

	private _logger: ILog;

	/*@ngInject*/
	constructor(
		private loggerFactory: ILoggerFactory
	) {

		this._logger = loggerFactory(UserInfo.id);
	}

}