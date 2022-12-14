import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyItemComponent } from './property-item.component';
import { CstmInputTextModule } from 'src/app/shared/components/custom-ui/directives/input-text/input-text.module';
import { CstmButtonModule } from 'src/app/shared/components/custom-ui/directives/button/button.module';
import { CstmDropdownModule } from 'src/app/shared/components/custom-ui/dropdown/dropdown.module';
import { IconModule } from 'src/app/shared/components/custom-ui/icon/icon.module';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

@NgModule({
	declarations: [PropertyItemComponent],
	imports: [
		CommonModule,
		CstmButtonModule,
		IconModule,
		TagModule,
		ButtonModule,
	],
	exports: [PropertyItemComponent],
})
export class PropertyItemModule {}
