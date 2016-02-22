import {ILogProvider, ILocationProvider} from "angular";
import appConsts from "./app.const";

/*@ngInject*/
export default function appConfigFunc(
	$logProvider: ILogProvider,
	$locationProvider: ILocationProvider
) {
	// turn debugging off/on (no info or warn)
	if ($logProvider.debugEnabled) {
		$logProvider.debugEnabled(true);
	}

	//		// remove the hash tag
	//		$locationProvider.html5Mode({
	//			enabled: true
	//		});
}