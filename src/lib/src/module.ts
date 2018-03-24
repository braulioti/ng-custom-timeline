import {NgModule} from '@angular/core';

import {TimelineComponent} from './component/timeline.component';
import {TimelineService} from './service/timeline.service';
import {CommonModule} from "@angular/common";


@NgModule({
    imports: [
        CommonModule
    ]
    declarations: [
        TimelineComponent
    ],
    providers: [
        TimelineService
    ],
    exports: [
        TimelineComponent
    ]
})
export class TimelineModule { }
