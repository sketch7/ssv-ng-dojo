import {IPromise} from "angular";
import {HeroService} from "./hero.service";
import {Hero} from "./hero.model";
import {AppStateParams} from "app/app.config.route";

/*@ngInject*/
export function heroResolver(
	heroService: HeroService,
	$stateParams: AppStateParams
): IPromise<Hero> {
	return heroService.getByKey($stateParams.hero);
}


/*@ngInject*/
export function heroesResolver(
	heroService: HeroService,
	$stateParams: AppStateParams
): IPromise<Hero[]> {
	return heroService.getAll();
}