import {ILog, ILoggerFactory} from "core/logger/logger";
import {Hero} from "../hero/hero";

export class HomeController {
	static id = "homeController";

	title = "Top Heroes";
	heroes: Hero[];
	language: string;

	private _logger: ILog;

	//static $inject = ["translationService", "loggerFactory", "config"]; // manual way without using ngAnnotate
	/*@ngInject*/
	constructor(
		// private translationService: ITranslationService,
		private loggerFactory: ILoggerFactory,
		private heroesResolve: Hero[]
	) {

		this._logger = loggerFactory(HomeController.id);
		this.heroes = heroesResolve;
	}


}