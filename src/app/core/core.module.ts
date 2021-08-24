import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/layout/header/header.component';
import { FooterComponent } from './component/layout/footer/footer.component';
import { LandingComponent } from './component/layout/landing/landing.component';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LandingComponent],
  imports: [CommonModule],
  exports: [HeaderComponent, FooterComponent, LandingComponent],
})
export class CoreModule {}
