import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalService } from './services/global.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderFooterComponent } from './header-footer/header-footer.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    CommonModule,
    HeaderFooterComponent

  ],
  declarations: [HeaderFooterComponent],
  providers: [GlobalService]
})
export class SharedModule { }
