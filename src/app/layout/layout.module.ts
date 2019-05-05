import { NgModule } from '@angular/core';
import { SharedModule } from '../share/shared.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LayoutComponent, HeaderComponent, SidebarComponent]
})
export class AppLayoutModule { }
