import { Injectable } from '@angular/core';

@Injectable()
export abstract class CarouselController {
    constructor() { }

    public delay = 1000;
    public duration = 1000;
    public isPlaying = false;
    public current = 0;

    private interval: any;
    private timer: any;
    private gallery: string[] = [];

    get next(): number {
        return this.current + 1 < this.gallery.length ? this.current + 1 : 0
    }
    get films(): string[] {
        return [this.gallery[this.current], this.gallery[this.next]];
    }

    public initial(gallery: string[]) {
        this.gallery = [...[], ...gallery];
        this.repeat();
    }

    public stop() {
        if (this.interval) {
            clearInterval(this.interval);
            this.interval = null;
        }
    }

    public repeat() {
        this.interval = setInterval(() => this.start(), this.delay + this.duration);
    }

    public start() {
        this.isPlaying = true;
        this.timer = setTimeout(() => this.end(), this.duration);
    }

    private end() {
        this.current = this.current + 1 < this.gallery.length ? this.current + 1 : 0;
        clearTimeout(this.timer);
        this.isPlaying = false;
    }
}