import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import { NgZorroAntdModule, NzDividerModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    NzDividerModule
  ],
  exports: [
    TranslateModule,
    NgZorroAntdModule,
    NzDividerModule
  ]
})
export class SharedModule { }
