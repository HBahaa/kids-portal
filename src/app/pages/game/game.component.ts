import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
	type:string;
	url:string;
	constructor(private route: ActivatedRoute, private sanitizer: DomSanitizer) {
	}

	ngOnInit() {
		this.type = this.route.snapshot.paramMap.get('type');
		if (this.type == 'memory') {
	    	this.url = "./assets/games/احسن اختيار طعامى - ذاكرة.swf";
	    }
	    else if (this.type == 'match') {
	    	this.url = "./assets/games/احسن اختيار طعامى - توصيل.swf";
	    }
	}

	photoURL(){
		return this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
	}

}
