import {IComponentOptions} from "angular";
import {ILog, ILoggerFactory} from "core/logger/logger";

import {INotificationService} from "modules/notification/notification";
import {IUserInfo} from "modules/user/user";
import consts from "app/app.const";

export class NavController {
	static id = "navController";

	heroesState = consts.routeStates.heroes;
	unreadNotificationsCount = 0;

	get appTitle() {
		return consts.name;
	}

	get appVersion() {
		return consts.version;
	}

	get user() {
		return this.userInfo.alias;
	}

	items = [{
		title: "Heroes",
		state: consts.routeStates.heroes
	}, {
			title: "Basic form",
			state: "#"
		}, {
			title: "Command lab",
			state: "#"
		},
	];

	private _logger: ILog;

	/*@ngInject*/
	constructor(
		private loggerFactory: ILoggerFactory,
		private notificationService: INotificationService,
		private userInfo: IUserInfo
	) {
		this._logger = loggerFactory(NavController.id);
		this._logger.info("ctor", "init");
		this.unreadNotificationsCount = this.notificationService.getUnreadCount();
	}
}

export const navComponent: IComponentOptions = {
	bindings: {
	},
	templateUrl: `${consts.basePath}/components/nav/nav.html`,
	controller: NavController,
	controllerAs: consts.controllerAs
}