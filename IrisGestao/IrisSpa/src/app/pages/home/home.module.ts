import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from '../home/home.component';
import { FileUploadComponent } from 'src/app/shared/components/file-upload/file-upload.component';
import { LinkPropertyComponent } from 'src/app/shared/components/link-property/link-property.component';
import { ButtonModule } from 'primeng/button';

@NgModule({
	declarations: [HomeComponent],
	imports: [
		CommonModule,
		HomeRoutingModule,
		FileUploadComponent,
		LinkPropertyComponent,
		ButtonModule,
	],
})
export class HomeModule {}
