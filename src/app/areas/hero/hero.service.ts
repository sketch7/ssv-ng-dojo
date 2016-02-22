import {IPromise, IQService} from "angular";
import {ILog, ILoggerFactory} from "core/logger/logger";
import {Hero} from "./hero.model";
import {Heroes} from "./mock-heroes";
import * as _ from "lodash";

export class HeroService {
	static id = "heroService";

	private _logger: ILog;

	/*@ngInject*/
	constructor(
		private loggerFactory: ILoggerFactory,
		private $q: IQService
	) {

		this._logger = loggerFactory(HeroService.id);
		this._logger.debug("ctor", "init");
	}


	getAll(): IPromise<Hero[]> {
		return this.$q.when(Heroes);
	}

	getByKey(key: string): IPromise<Hero> {

		this._logger.info("getByKey", "finding...", { key: key });

		return this.getAll()
			.then(x => {
				const result = _.find(x, { key: key });
				this._logger.info("getByKey", "find complete.", { key: key, result: result });
				return result;
			});
	}

}