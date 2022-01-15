import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { SessionAddFromComponent } from './session-add-from/session-add-from.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { AdminComponent } from './admin/admin.component';
import {RouterModule, Routes} from '@angular/router';
const adminRoutes: Routes = [
 {
 path: '',
 component: AdminComponent,
 children: [
 { path: 'add', component: SessionAddFromComponent },
 { path: 'edit/:id', component: 
SessionEditFormComponent },
 { path: 'list', component: SessionItemListComponent 
},
 { path: '', redirectTo: 'list', pathMatch: 'full' }
 ],
 }
];
@NgModule({
 imports: [RouterModule.forChild(adminRoutes),
 CommonModule,
 FormsModule
 ],
 declarations: [
 SessionItemComponent,
 SessionItemListComponent,
 SessionAddFromComponent,
 SessionEditFormComponent,
 AdminComponent
 ],
 providers: [],
 bootstrap: [AdminComponent]
})
export class AdminModule { }
