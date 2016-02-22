import {ILogProvider, ILocationProvider, IHttpProvider, ICompileProvider} from "angular";

/*@ngInject*/
export default function appConfigFunc(
	$logProvider: ILogProvider,
	$locationProvider: ILocationProvider,
	$httpProvider: IHttpProvider,
	$compileProvider: ICompileProvider
) {
	configureForDebug(true);
	configureHttp();

	// remove the hash tag
	$locationProvider.html5Mode({
		enabled: true
	});

	function configureForDebug(isDebug: boolean) {
		$compileProvider.debugInfoEnabled(isDebug);
		$logProvider.debugEnabled(isDebug);
	}

	function configureHttp() {
		// http://blog.thoughtram.io/angularjs/2015/01/14/exploring-angular-1.3-speed-up-with-applyAsync.html
		$httpProvider.useApplyAsync(true);
	}
}