import {ILog, ILoggerFactory} from "core/logger/logger";

export class HomeController {
	static id = "homeController";

	title = "Top Heroes";
	// heroes: Hero[];
	language: string;

	private _logger: ILog;
		
	//static $inject = ["translationService", "loggerFactory", "config"]; // manual way without using ngAnnotate
	/*@ngInject*/
	constructor(
		// private translationService: ITranslationService,
		private loggerFactory: ILoggerFactory
		// private heroService: IHeroService
	) {

		this._logger = loggerFactory(HomeController.id);
		// this.heroes = heroService.getAll();
	}


}