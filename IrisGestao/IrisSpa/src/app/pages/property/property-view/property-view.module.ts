import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyViewComponent } from './property-view.component';
import { PropertyViewRoutingModule } from './property-view-routing.module';
import { IconModule } from 'src/app/shared/components/custom-ui/icon/icon.module';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { SidebarModule } from 'primeng/sidebar';
import { TabViewModule } from 'primeng/tabview';
import { AreaPipeModule } from 'src/app/shared/pipes';
import { PhotoGalleryComponent } from 'src/app/shared/components/photo-gallery/photo-gallery.component';
import { MatriculaPipeModule } from 'src/app/shared/pipes/matricula.module';
import { DialogModule } from 'primeng/dialog';
import { SpinnerComponent } from 'src/app/shared/components/custom-ui/spinner/spinner.component';

@NgModule({
	declarations: [PropertyViewComponent],
	imports: [
		CommonModule,
		PropertyViewRoutingModule,
		IconModule,
		TagModule,
		ButtonModule,
		TableModule,
		MenuModule,
		SidebarModule,
		TabViewModule,
		AreaPipeModule,
		MatriculaPipeModule,
		PhotoGalleryComponent,
		DialogModule,
		SpinnerComponent,
	],
})
export class PropertyViewModule {}
