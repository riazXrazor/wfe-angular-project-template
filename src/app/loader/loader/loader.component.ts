import { Component } from '@angular/core';
import { LoaderService } from '@ng/cee-core';
@Component({
	selector: 'app-loader',
	templateUrl: './loader.component.html',
	styleUrls: ['./loader.component.scss']
})
export class LoaderComponent {
	isLoading: boolean = true;
	loaderText: string = '';
	constructor(private loaderService: LoaderService) {
		this.loaderService.loader
			.subscribe((isLoading) => {
				this.isLoading = isLoading;
			});
		this.loaderService.loadingTextSet.subscribe(res => {
			this.loaderText = res;
			/* istanbul ignore next */
			if (res) {
				let i = setInterval(() => {
					if (!this.isLoading) {
						this.loaderText = '';
						clearInterval(i);
					}
				}, 2000)
			}
		});
	}
}
