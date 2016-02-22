import {ILog, ILoggerFactory} from "core/logger/logger";
import consts from "app/app.const";
import {Hero} from "./hero.model";
import {HeroService} from "./hero.service";

export class HeroDetailController {
	static id = "heroDetailController";

	hero: Hero;
	heroesState = consts.routeStates.heroes;

	private _logger: ILog;

	/*@ngInject*/
	constructor(
		private loggerFactory: ILoggerFactory,
		private heroService: HeroService,
		heroResolve: Hero
	) {

		this._logger = loggerFactory(HeroDetailController.id);
		this._logger.debug("ctor");

		this.hero = heroResolve;
	}

}