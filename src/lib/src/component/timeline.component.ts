import {Component, Input} from '@angular/core';

@Component({
    selector: 'timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.scss']
})

export class TimelineComponent {
    public pipelineWidth: number;
    public pipelineContainer: number;

    public _datasource: string[];

    @Input('datasource')
    set datasource(value: string[]) {
        if (value !== undefined && value !== null) {
            this._datasource = value;
            this.resize();
            console.log(this._datasource);
        }
    }

    constructor() {
        this._datasource = [];
    }

    private resize() {
        let totalPoints = 0;

        this._datasource.forEach((t: string) => {
            totalPoints += t.length + 1;
        });

        this.pipelineWidth = ((totalPoints) * 210) + 25;
        this.pipelineContainer = ((totalPoints) * 210) + 30;
    };
}
