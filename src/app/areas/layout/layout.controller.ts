import {ILog, ILoggerFactory} from "core/logger/logger";
import {INotificationService} from "modules/notification/notification";
import consts from "app/app.const";


export class LayoutController {
	static id = "layoutController";

	unreadNotificationsCount = 0;

	private _logger: ILog;

	get appTitle() {
		return consts.name;
	}

	get appVersion() {
		return consts.version;
	}

	// get user() {
	// 	return this.userInfo.alias;
	// }

	/*@ngInject*/
	constructor(
		private loggerFactory: ILoggerFactory,
		private notificationService: INotificationService
		// private userInfo: IUserInfo
	) {

		this._logger = loggerFactory(LayoutController.id);
		this._logger.info("ctor", "init");
		this.unreadNotificationsCount = this.notificationService.getUnreadCount();
	}
}