import {ILog, ILoggerFactory} from "core/logger/logger";

import {Hero} from "./hero.model";
import {HeroService} from "./hero.service";

export class HeroController {
	static id = "heroController";

	model: Hero;

	private _logger: ILog;

	/*@ngInject*/
	constructor(
		private loggerFactory: ILoggerFactory,
		private heroService: HeroService,
		heroResolve: Hero
	) {

		this._logger = loggerFactory(HeroController.id);
		this._logger.debug("ctor");

		this.model = heroResolve;
	}

}