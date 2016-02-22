export class AppConst {

	moduleName = "app-heroes";
	templateModuleName = "app.tmpls";
	basePath = "/wwwroot/dist/app";

	name = "Heroes";
	version = "1.0.0-alpha";

	routeStates = new RouteStateConfig();

	events = {
		myEvent: "example",
		uiRouter: {
			$stateChangeError: "$stateChangeError",
			$stateChangeStart: "$stateChangeStart",
			$stateChangeSuccess: "$stateChangeSuccess",
			$stateNotFound: "$stateNotFound"
		}
	};
}


export class RouteStateConfig {
	layout = "layout";

	home = `home`;
	heroes = `${this.layout}.heroes`;
	hero = `${this.layout}.hero`;
}

export default new AppConst();