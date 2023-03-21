import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
// import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { BsButtonDirective } from './directives/bs-button/bs-button.directive';
import { ValidationMessageComponent } from './components/validation-message/validation-message.component';
import { StringUtil } from './utils/string.util';


const components = [
  NotFoundComponent,
  FooterComponent,
  HeaderComponent,
  BsButtonDirective,
  ValidationMessageComponent
]

@NgModule({
  declarations: [...components],
  imports: [
    CommonModule,
    RouterModule,
    NgbDropdownModule,
    NgbCollapseModule
    // ScrollToModule.forRoot()
  ],
  exports: [...components,
  ],
  providers: [
    StringUtil
  ]
})
export class SharedModule { }
