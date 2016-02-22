import {ILog, ILoggerFactory} from "core/logger/logger";
import consts from "app/app.const";
import {Hero} from "./hero.model";

export class HeroListController {
	static id = "heroListController";
	title = "Heroes";
	heroes: Hero[];
	heroState = consts.routeStates.hero;

	/*@ngInject*/
	constructor(
		private heroesResolve: Hero[]
	) {
		this.heroes = heroesResolve;
	}

}