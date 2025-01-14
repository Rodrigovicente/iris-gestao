import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { CpfCnpjPipeModule, TelefonePipeModule } from 'src/app/shared/pipes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpinnerComponent } from 'src/app/shared/components/custom-ui/spinner/spinner.component';
import { SupplierListingRoutingModule } from './supplier-listing-routing.module';
import { SupplierListingComponent } from './supplier-listing.component';
import { CardItemComponent } from 'src/app/shared/components/card-item/card-item.component';
import { SidebarModule } from 'primeng/sidebar';

@NgModule({
	declarations: [SupplierListingComponent],
	imports: [
		CommonModule,
		FormsModule,
		ReactiveFormsModule,
		DropdownModule,
		TableModule,
		TagModule,
		InputTextModule,
		ButtonModule,
		SupplierListingRoutingModule,
		CpfCnpjPipeModule,
		SpinnerComponent,
		TelefonePipeModule,
		CardItemComponent,
		SidebarModule,
	],
})
export class SupplierListingModule {}
